const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'huyu1314',
    database:'mydb'
});

module.exports=connection


//connection.end();
