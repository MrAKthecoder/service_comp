import { DatabaseSync } from 'node:sqlite';
import { randomBytes,scryptSync } from 'node:crypto';
import { mkdirSync,writeFileSync } from 'node:fs';
import { installAdmin } from './admin.mjs';
mkdirSync('server/data',{recursive:true});
const db=new DatabaseSync('server/data/enquiries.sqlite');installAdmin(db);
if(!db.prepare('SELECT username FROM admins LIMIT 1').get()) {const password=randomBytes(18).toString('base64url');const salt=randomBytes(16).toString('hex');db.prepare('INSERT INTO admins VALUES (?,?,?)').run('admin',salt,scryptSync(password,salt,64).toString('hex'));writeFileSync('server/data/admin-access.txt',`Local admin access\nURL: http://127.0.0.1:5176/admin\nID: admin\nPassword: ${password}\nKeep this file private.\n`);console.log('Created admin. Credentials saved in server/data/admin-access.txt');}else console.log('Admin already exists; credentials unchanged.');db.close();
