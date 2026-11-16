import { installAdmin } from './admin.mjs';
import { createServer } from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { randomUUID } from 'node:crypto';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
export function createApi(dbPath = resolve('server/data/enquiries.sqlite')) {
  mkdirSync(dirname(dbPath), { recursive: true });
  const db = new DatabaseSync(dbPath);
  db.exec('PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS enquiries (id TEXT PRIMARY KEY, created_at TEXT NOT NULL, payload TEXT NOT NULL)');
  const admin = installAdmin(db);
  const limits = new Map();
  const server = createServer(async (req, res) => {
    const send = (status, body) => { res.writeHead(status, {'Content-Type':'application/json', 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff'}); res.end(JSON.stringify(body)); };
    if (req.url === '/api/health' && req.method === 'GET') return send(200, {ok:true});
    if (req.url !== '/api/enquiries' && !req.url.startsWith('/api/admin/')) return send(404, {error:'Not found'});
    if (!['POST','PATCH','GET'].includes(req.method)) return send(405, {error:'Method not allowed'});
    if (req.headers.origin && req.headers.origin !== `http://${req.headers.host}` && req.headers.origin !== process.env.APP_ORIGIN && !['http://localhost:5176','http://127.0.0.1:5176'].includes(req.headers.origin)) return send(403,{error:'Origin not allowed'});
    if (req.method !== 'GET' && !req.headers['content-type']?.startsWith('application/json')) return send(415,{error:'JSON required'});
    const now=Date.now();
    for (const [key,value] of limits) if(now-value.start>600000) limits.delete(key);
    const key=req.socket.remoteAddress + (req.url === '/api/admin/login' ? ':login' : req.url.startsWith('/api/admin/') ? ':admin' : ':public'); const rate=limits.get(key)||{start:now,count:0};
    if(rate.count>=(req.url.startsWith('/api/admin/') && req.url!=='/api/admin/login'?300:10)) return send(429,{error:'Too many requests. Please try again in ten minutes.'});
    rate.count++;limits.set(key,rate);
    let raw='';
    try {
      for await (const chunk of req) {raw+=chunk.toString();if(Buffer.byteLength(raw)>16384)return send(413,{error:'Request too large'});}
      const input=raw?JSON.parse(raw):{};
      if(!input || typeof input!=='object' || Array.isArray(input))return send(400,{error:'Invalid request'});
      if(req.url.startsWith('/api/admin/'))return await admin.handle(req,res,input,send);
      if(req.method!=='POST')return send(405,{error:'Method not allowed'});
      if(input.companyWebsite)return send(200,{ok:true});
      const data={};
      const lengths={name:120,email:254,phone:40,business:200,website:500,service:80,message:5000,type:20};
      for(const [field,max] of Object.entries(lengths)) {if(input[field]!==undefined && typeof input[field]!=='string')return send(400,{error:'Invalid field'});data[field]=(input[field]||'').trim();if(data[field].length>max)return send(400,{error:`${field} is too long`});}
      if(!['enquiry','audit','callback'].includes(data.type)||!data.name || (data.type!=='callback'&&!data.message) || (data.type==='audit'&&!data.business) || (data.type==='callback'&&!/^[+\d\s().-]{7,40}$/.test(data.phone)) || ((data.type!=='callback'||data.email)&&! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)))return send(400,{error:'Please check your name, contact details and required fields.'});
      const id=randomUUID();
      db.prepare('INSERT INTO enquiries VALUES (?, ?, ?)').run(id,new Date().toISOString(),JSON.stringify(data));
      send(201,{ok:true,id});
    } catch(error) {if(error instanceof SyntaxError)return send(400,{error:'Invalid JSON'});console.error('Enquiry storage failed');send(500,{error:'Unable to save your request. Please try again.'});}
  });
  server.on('close',()=>db.close());
  return server;
}
if(process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url))createApi().listen(Number(process.env.PORT||3001),'127.0.0.1',()=>console.log('Enquiry API listening on port '+(process.env.PORT||3001)));
