exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', function(table) {
    table.increments();
    table.string('username');
    table.string('password');
    table.boolean('is_admin');
  }).then(function() {
    return knex.schema.createTable('class', function(table) {
      table.increments();
      table.string('name');
    });
  }).then(function() {
    return knex.schema.createTable('industry', function(table) {
      table.increments();
      table.string('type');
    });
  }).then(function() {
    return knex.schema.createTable('owner', function(table) {
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('phone');
      table.string('gender');
    });
  }).then(function(){
    return knex.schema.createTable('business', function(table) {
      table.increments();
      table.string('name');
      table.text('address1');
      table.text('city');
      table.string('state');
      table.integer('zip');
      table.string('email');
      table.string('phone');
      table.integer('industry_id').references('id').inTable('industry').onDelete('cascade');
      table.date('date_opened');
      table.date('date_closed');
      table.boolean('good_standing'); // Secretary of State
      table.text('description');
      table.text('website');
    });
  }).then(function(){
    return knex.schema.createTable('business_owner', function(table) {
      table.integer('owner_id').references('id').inTable('owner').onDelete('cascade');
      table.integer('business_id').references('id').inTable('business').onDelete('cascade');
    });
  }).then(function(){
    return knex.schema.createTable('class_owner', function(table) {
      table.integer('owner_id').references('id').inTable('owner').onDelete('cascade');
      table.integer('class_id').references('id').inTable('class').onDelete('cascade');
      table.boolean('did_graduate');
      table.integer('year');
      table.string('semester');
    });
  }).then(function(){
    return knex.schema.createTable('internal_notes', function(table) {
      table.increments();
      table.integer('business_id').references('id').inTable('business').onDelete('cascade');
      table.integer('account_id').references('id').inTable('account').onDelete('cascade');
      table.date('date');
      table.text('notes');
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('internal_notes')
  .then(function(){
    return knex.schema.dropTableIfExists('class_owner');
  }).then(function(){
    return knex.schema.dropTableIfExists('business_owner');
  }).then(function(){
    return knex.schema.dropTableIfExists('business');
  }).then(function(){
    return knex.schema.dropTableIfExists('owner');
  }).then(function(){
    return knex.schema.dropTableIfExists('industry');
  }).then(function(){
    return knex.schema.dropTableIfExists('class');
  }).then(function(){
    return knex.schema.dropTableIfExists('account');
  });
};
