express = require('express');
router = express.Router();

router.get('/', (req, res) =>{
    res.render('config');
});

router.post('/create-user', (req, res) =>{
    console.log(req.body);
    res.json({status: 'save'});
})


router.get('/get-users', (req, res) =>{
    console.log(req.body);
    res.json({status: 'data', data: req.body});
});


module.exports =  router;