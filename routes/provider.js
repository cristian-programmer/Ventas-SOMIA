var express = require('express');
var router = express.Router();
var db = require('../db/db').db;
router.get('/', (req, res)=>{
    res.render('./ProviderComponent/provider');
});

router.post('/addProvider', (req, res)=>{
    console.log(req.body);

    db(`insert into ventas.providers (name, enterprise, email, cellphone) values
     ("${req.body.name}", "${req.body.enterprise}", "${req.body.email}", "${req.body.cellphone}");`)
     .then(result=>{
         if(result)
            res.json({status:'save'});

     })
     .catch(error =>{
        err(error, res);
    });   
});

router.post('/getProviders', (req, res)=>{
    let providers = [];
    db(`select * from ventas.providers`).then(result =>{
        console.log(result);
        if(result) 
            for(let i=0; i < result.length; i++){
                providers.push({
                    name: result[i].name,
                    enterprise: result[i].enterprise,
                    email: result[i].email,
                    cellphone: result[i].cellphone,
                    id: result[i].id
                });
            }   
            res.json({data: providers});
    }).catch(error=>{
        err(error, res);
    });
});

router.get('/getProvider/:id', (req, res)=>{
    let id = req.params.id;
    console.log('id',id);
    db(`select * from ventas.providers where id=${id};`).then(result=>{
        console.log(result);
        if(result){
            res.json({status:'received', data: result});
        }
    }).catch(error =>{
        err(error, res);
    })

})

function err(error, res){
    console.warn(error);
    res.json({status:'error'});
}
module.exports = router;