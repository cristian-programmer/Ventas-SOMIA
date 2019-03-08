express = require('express');
router = express.Router();
let db = require('./../db/db').db;
bcrypt = require('bcryptjs');
router.get('/', (req, res) =>{
    res.render('config');

});

router.post('/create-user', (req, res) =>{
      console.log(req.body);
        user = req.body;
        bcrypt.genSalt(10, (error, salt) => {
            if (error) throw error;
            bcrypt.hash(user.password, salt, (error, hash)=>{
                if(error) throw error;

                db(`insert into users (username, password)
                values ("${user.username}", "${user.password}");`).then(result =>{
                    console.log('insert', result);
                    res.json({status:'save'});  
                }).catch(error => console.log(error));
               
            });
        });      
});


router.post('/get-users', (req, res) =>{
    let users = [];
    db(`select * from ventas.users;`).then(result =>{
        console.log(result);
        for(let i =0; i < result.length; i++){
            users.push({ id: result[i].id,
            user: result[i].username });
        }
        res.json({data: users});
    }).catch(error => { console.log(error);});
});


module.exports =  router;