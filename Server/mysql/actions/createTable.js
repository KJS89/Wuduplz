const con = require('./connection')

function createTable(){

    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    });

}

module.exports=createTable;