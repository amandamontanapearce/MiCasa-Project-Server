var express = require('express');
var router = express.Router();
var db = require('../db/api')

router.get('/', function(req, res, next) {
	db.findBusinessesAndOwners().then(function(data) {
		res.json(data)
	});
});

router.get('/cities', function(req, res, next) {
	db.getAllCities().then(function(data) {
		res.json(data)
	});
});

router.get('/industries', function(req, res, next) {
	db.getAllIndustries().then(function(data) {
		res.json(data)
	});
});

router.get('/classes', function(req, res, next) {
	db.getAllClasses().then(function(data) {
		res.json(data)
	});
});

router.get('/:id', function(req, res, next) {
	return Promise.all([
			db.getCommentsById(req.params.id),
			db.findBusinessesAndOwnersById(req.params.id)
		])
		.then(function(data) {
			res.json(data);
		})
})

router.put('/:id', function(req, res, next) {
	db.updateBusiness(req.body).then(function() {
		res.json({
			message: "Business Updated"
		})
	})
})

router.post('/:id/addNote', function(req, res, next) {
	db.addNote(req.body).then(function() {
		console.log('body', req.body)
		res.json({
			message: "Note Added"
		})
	})
})

router.post('/add', function(req, res, next) {
	var businessData = req.body[0];
	var ownerData = req.body[1];
	var classData = req.body[2];
	return Promise.all([
			db.addBusiness(businessData),
			db.addOwner(ownerData)
		])
		.then(function(data) {
			var ownerId = data[1][0]
			var businessId = data[0][0]
			db.addBusinessOwner(businessId, ownerId)
				.then(function() {
					db.addClassOwner(ownerId, classData).then(function() {
						res.json({
							business_id: businessId
						})
					})
				})
		})
})

module.exports = router;
