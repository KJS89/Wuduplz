const connection = require('./connection')

class Crud{


    insert(post,table){
        let sql = `INSERT INTO ${table} SET ?`;

        connection.query(sql,post,(err,result)=>{
            if(err){
                console.log(err);
            }else{
                console.log(result);
                //res.send("added successfully")
            }
        })
    }


    find(table){
        let sql = `SELECT * FROM ${table}`;

        connection.query(sql,(err,result)=>{
            if(err){
                console.log(err);
            }else{
                console.log(result)
                //res.json(result)
            }
        })
    }


    del(table, id){
        let sql = `DELETE FROM ${table} WHERE id=${id}`;
        if(err){
            console.log(err);
        }else{
            console.log(result);
            //res.send('delete successfully')
        }
    }
}

module.exports=Crud