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
       
 




module.exports ={connectDB};