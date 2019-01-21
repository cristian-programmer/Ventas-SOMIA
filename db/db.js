mysql = require('mysql');

function connectDB(){
    connection = mysql.createConnection({
        host:'localhost' ,
        user: 'root',
        password:'1234',
        database: 'ventas' 
    });

    return connection;
}

function db(query){
    return new Promise((resolve, reject)=>{
        db= connectDB();
        db.query(query, (error, result)=>{
            if(error) reject(error);            
            db.end();
            resolve(result);
        });
    });
}

module.exports ={connectDB, db};