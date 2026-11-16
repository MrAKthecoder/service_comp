import { randomBytes, scryptSync, timingSafeEqual, createHash } from 'node:crypto';
export function installAdmin(db) {
 db.exec(`CREATE TABLE IF NOT EXISTS admins (username TEXT PRIMARY KEY,salt TEXT,hash TEXT); CREATE TABLE IF NOT EXISTS sessions (token TEXT PRIMARY KEY,expires INTEGER); CREATE TABLE IF NOT EXISTS enquiry_status (id TEXT PRIMARY KEY,status TEXT NOT NULL)`);
 const hash=t=>createHash('sha256').update(t).digest('hex');
 const authorized=req=>{const token=(req.headers.cookie||'').split(';').map(s=>s.trim()).find(s=>s.startsWith('forma_session='))?.slice(14);return token && db.prepare('SELECT token FROM sessions WHERE token=? AND expires>?').get(hash(token),Date.now());};
 return {authorized, async handle(req,res,input,send){
 const cookie=(token,age)=>`forma_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${age}${process.env.NODE_ENV==='production'?'; Secure':''}`;
 if(req.url==='/api/admin/login' && req.method==='POST') {
 const user=db.prepare('SELECT * FROM admins WHERE username=?').get(typeof input.username==='string'?input.username:'');
 const salt=user?.salt||'00000000000000000000000000000000';const derived=scryptSync(typeof input.password==='string'?input.password:'',salt,64);
 if(!user||!timingSafeEqual(derived,Buffer.from(user.hash,'hex')))return send(401,{error:'Incorrect ID or password.'});
 const token=randomBytes(32).toString('hex');db.prepare('DELETE FROM sessions WHERE expires<?').run(Date.now());db.prepare('INSERT INTO sessions VALUES (?,?)').run(hash(token),Date.now()+28800000);res.setHeader('Set-Cookie',cookie(token,28800));return send(200,{ok:true});
 }
 if(!authorized(req))return send(401,{error:'Please log in.'});
 if(req.url==='/api/admin/logout'&&req.method==='POST'){const token=(req.headers.cookie||'').split(';').map(s=>s.trim()).find(s=>s.startsWith('forma_session='))?.slice(14);if(token)db.prepare('DELETE FROM sessions WHERE token=?').run(hash(token));res.setHeader('Set-Cookie',cookie('',0));return send(200,{ok:true});}
 if(req.url==='/api/admin/enquiries'&&req.method==='GET')return send(200,{enquiries:db.prepare("SELECT e.*, COALESCE(s.status,'New') status FROM enquiries e LEFT JOIN enquiry_status s ON e.id=s.id ORDER BY created_at DESC").all().map(r=>({...r,payload:JSON.parse(r.payload)}))});
 if(req.url.startsWith('/api/admin/enquiries/')&&req.method==='PATCH') {const id=req.url.split('/').pop();if(!['New','Contacted','Closed'].includes(input.status))return send(400,{error:'Invalid status'});if(!db.prepare('SELECT id FROM enquiries WHERE id=?').get(id))return send(404,{error:'Not found'});db.prepare('INSERT INTO enquiry_status VALUES (?,?) ON CONFLICT(id) DO UPDATE SET status=excluded.status').run(id,input.status);return send(200,{ok:true});}
 return send(404,{error:'Not found'});
 }};
}
