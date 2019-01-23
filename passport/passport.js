let localStrategy = require('passport-local').Strategy;
let db = require('../db/db').connectDB();
let bcrypt = require('bcryptjs');

module.exports = (passport)=>{
    console.log("hola");
    passport.use( new localStrategy((username, password, done)=>{
        console.log(username, password);
        database = 'ventas';
        db.query(`select * from ${database}.users where username=${username}`,(error, result)=>{
            if(error) return done(null, false,  'error form database');

            bcrypt.compare(password, result[0].password, (error, isMatch)=>{
                if(error) throw error;
                if(isMatch) return done(null, username);
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