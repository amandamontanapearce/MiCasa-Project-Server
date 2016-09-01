var express = require('express');
var router = express.Router();
var db = require('../db/api');
var path = require('path');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   db.findAllBusinesses().then(function(data) {
//     console.log(data);
//     res.render('index', { businesses: data });
//   })
// });

// router.get('/', function(req, res, next) {
//   db.findAllBusinesses().then(function(data) {
//   console.log(data);
//   res.json(data)
// });
// });


var businesses = require('./businesses');
router.use('/businesses', businesses);

var entrepreneurs = require('./entrepreneurs');
router.use('/entrepreneurs', entrepreneurs);

var login = require('./login');
router.use('/login', login);


module.exports = router;
