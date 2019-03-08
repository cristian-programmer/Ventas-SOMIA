mysql = require('mysql');

function connectDB(){
    connection = mysql.createConnection({
        host:'testdb.cwzv9cavcy23.us-east-1.rds.amazonaws.com',
        user: 'testdb',
        password:'12345678.',
        database: 'sales'
    });

    return connection;
}

function db(query){
    return new Promise((resolve, reject)=>{
        db= connectDB();
        db.query(query, (error, result)=>{
            if(error) reject(error);
            resolve(result);
        });
    });
}

module.exports ={connectDB, db};
