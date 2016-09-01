require('dotenv').config();
var express = require('express');
var router = express.Router();
var queries = require('../db/api');
var auth = require('../db/auth');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/', function(req, res, next){
  console.log('request body', req.body);
  queries.findUserByUserName(req.body.username)
  .then(function(user){
    var plainTextPassword = req.body.password;
    console.log('password', plainTextPassword);
    if(user && bcrypt.compareSync(plainTextPassword, user.password)){
      jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: '1d'}, function(err, token){
        if(err){
          res.json({
            message: 'error creating token'
          });
        }else{
          res.json({
            token : token,
            userId: user.id
          });
        }
      });
      }else{
      res.status(401);
      res.json({
        message : 'unauthorized'
      });
    }
  });
});

module.exports = router;