var find = require('../helper.js');

exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('class').select(),
		knex('owner').select()
	]).then(function(result) {
		var className = result[0];
		var owner = result[1];
		return Promise.all([
			knex('class_owner').insert({
				owner_id: find.findFromList('Kristie', owner, 'first_name'),
				class_id: find.findFromList('Business Breakthrough', className, 'name'),
				did_graduate: true,
				year:2015,
				semester:"Fall"
			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Alex', owner, 'first_name'),
				class_id: find.findFromList('Business Success', className, 'name'),
				did_graduate: true,
				year:2015,
				semester:"Summer"
			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Laurence', owner, 'first_name'),
				class_id: find.findFromList('Business Breakthrough', className, 'name'),
				did_graduate: true,
				year:2015,
				semester:"Spring"
			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Piggot', owner, 'first_name'),
				class_id: find.findFromList('Dreambuilder', className, 'name'),
				did_graduate: false,
				year:2015,
				semester:"Winter"

			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Alex', owner, 'first_name'),
				class_id: find.findFromList('Dreambuilder', className, 'name'),
				did_graduate: false,
				year:2013,
				semester:"Summer"
			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Jeremy', owner, 'first_name'),
				class_id: find.findFromList('Business Success', className, 'name'),
				did_graduate: true,
				year:2015,
				semester:"Spring"
			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Ron', owner, 'first_name'),
				class_id: find.findFromList('Dreambuilder', className, 'name'),
				did_graduate: true,
				year:2012,
				semester:"Winter"
			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Samantha', owner, 'first_name'),
				class_id: find.findFromList('Business Success', className, 'name'),
				did_graduate: false,
				year:2015,
				semester:"Fall"
			}),
			knex('class_owner').insert({
				owner_id: find.findFromList('Sizzle', owner, 'first_name'),
				class_id: find.findFromList('Business Breakthrough', className, 'name'),
				did_graduate: true,
				year:2014,
				semester:"Summer"
			})
		]);
	});
};
