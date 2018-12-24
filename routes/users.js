var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var db = require('../db/db').connectDB();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/createUser', (req, res)=>{
  console.log("entre");
  let user = req.body;
  console.log(user);

  bcrypt.genSalt(10, (error, salt) =>{
    if(error) throw error;

    bcrypt.hash(user.password, salt, (error, hash) =>{
      if(error) throw error;

      database = 'ventas';
      db.query(`insert into ${database}.users (username, password)
       values ("${user.username}", "${hash}")`, (error, result)=>{
         if(error) console.log(error);
          res.json({status:'save'});
       });
    })
  });
});

module.exports = router;
