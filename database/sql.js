const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'bnwsr2lg8k4ehtqnmf5s-mysql.services.clever-cloud.com',
    user:'uf34oo5nc7zt79gw',
    password:'9GcYBCScBA8N9MGjoTcG',
    database:'bnwsr2lg8k4ehtqnmf5s',
    port:'3306',
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('Database connected');
})

module.exports={connection};