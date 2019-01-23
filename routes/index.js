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

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/',
  failureFlash: true,
}), function (req, res) {
    
    res.redirect('/home');
});

router.get('/logout', (req, res)=>{
  req.logout();
  res.redirect('/');
});


module.exports = router;
