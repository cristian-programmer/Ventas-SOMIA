let localStrategy = require('passport-local').Strategy;
let db = require('../db/db').connectDB();
let bcrypt = require('bcryptjs');

module.exports = (passport)=>{
    console.log("hola");
    passport.use( new localStrategy((username, password, done)=>{
        console.log(username, password);
        database = 'ventas';
        db.query(`select * from ${database}.users where username="${username}";`,(error, result)=>{
            if(error) return done(null, false,  'error form database');
            console.log("result", result);
            
            bcrypt.compare(password, result[0].password, (error, isMatch)=>{
                if(error) throw error;
                console.log(' here.. ',username);
                if(isMatch) return done(null, {user : username, type : 'admin'});
                else return done(null, false,  'wrong password');
            });
        });  
    }));

    
    passport.serializeUser((user, done)=>{
        console.log('serializable', user);
        done(null, user);
    });

    passport.deserializeUser((user, done)=>{
        console.log('deserializeUser', user);
        done(null, user);
    });

}