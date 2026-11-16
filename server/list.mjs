import { DatabaseSync } from 'node:sqlite';
const db=new DatabaseSync('server/data/enquiries.sqlite',{readOnly:true});
console.log(JSON.stringify(db.prepare('SELECT * FROM enquiries ORDER BY created_at DESC').all().map(row=>({...row,payload:JSON.parse(row.payload)})),null,2));
db.close();
