var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Ventas POS' });
});

router.get('/home', (req, res, next) =>{
  res.render('home', {title: 'Inicio'});
});


router.get('/menufood', (req, res)=>{
  res.render('menufood')
});

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/',
  failureFlash: true,
}), function (req, res) {
    
    res.redirect('/home');
});

router.post('/movil/login', passport.authenticate('local',{
  failureRedirect: '/',
  failureFlash: true}),(req, res) =>{
    console.log("movil login", req.body['username']);
    res.json({auth: 'auth', type: 'admin', username: req.body['username']});
})

router.get('/logout', (req, res)=>{
  req.logout();
  res.redirect('/');
});


module.exports = router;
