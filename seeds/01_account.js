exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('account').insert({
			username: 'Lucas',
			password: '$2a$08$fN747a1qnFhBFNU/LGQ2JuLtZ7F1fhwk8tyy/.u1KPmr2b2GzIlAO',
			is_admin: true
		}),
		knex('account').insert({
			username: 'Laney',
			password: '123',
			is_admin: false
		})
	]);
};
