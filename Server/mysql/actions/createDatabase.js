const mysql = require('mysql')
const con = require('./connection')

con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

