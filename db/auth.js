var queries = require('./api');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var knex = require('./knex');
var express = require('express');

module.exports = {
  createUser : function(body){
    var hash = bcrypt.hashSync(body.password, 8);
    body.password = hash;
    return queries.addAccount(body)
    .then(function(user){
      return user.id;
    });
  },
  authMiddleWare : function(req, res, next){
    var token = req.get('Authorization');

    if(token){
      token = token.substring(7);
      jwt.verify(token, process.env.TOKEN_SECRET, function(error, decoded){
        if(error){
          next();
        }else{
          req.user = decoded;
          next();
        }
      });
    }else{
      next();
    }
  },
  ensureauthenticated : function(req, res, next){
    if(req.user){
      next();
    }else{
      res.json({
        message : "you cant come here buddy"
      });
    }
  }
};
