var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res, next) =>{
  res.render('home', {title: 'home'});
});

router.post('/login', (req, res, next) =>{
    console.log("llege aqui");

    passport.authenticate('local', {
      successRedirect: '/home',
      failureRedirect:'/',
      failureFlash:true 
    })(req, res, next);
});

module.exports = router;
