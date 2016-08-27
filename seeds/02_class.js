exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('class').insert({
			name: 'Business Success'
		}),
		knex('class').insert({
			name: 'Business Breakthrough'
		}),
		knex('class').insert({
			name: 'Dreambuilder'
		}),
		knex('class').insert({
			name: 'Consulting'
		}),
		knex('class').insert({
			name: 'Exito Para Negocios'
		}),
		knex('class').insert({
			name: 'Listening to your Business'
		}),
		knex('class').insert({
			name: 'Considering a Business?'
		})
	]);
};
