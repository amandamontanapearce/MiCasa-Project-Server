var express = require('express');
var router = express.Router();
var db = require('../db/api');
var path = require('path');

var businesses = require('./businesses');
router.use('/businesses', businesses);

var entrepreneurs = require('./entrepreneurs');
router.use('/entrepreneurs', entrepreneurs);

var login = require('./login');
router.use('/login', login);


module.exports = router;
