require('dotenv').config();
var express = require('express');
var router = express.Router();
var queries = require('../db/api');
var auth = require('../db/auth');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


router.post('/', function(req, res, next){
  queries.findUserByUserName(req.query.userName)
  .then(function(user){
    if(user){
      res.json({
        error : "user already exist try another name"
      });
    }else {
      auth.createUser(req.query)
      .then(function(user){
        res.json({
          message : 'you are a new user yay'
        });
      });
    }
  });
});

module.exports = router;
