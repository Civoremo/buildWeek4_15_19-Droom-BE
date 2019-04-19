exports.up = function(knex) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments();

		tbl.string('email', 128)
			.notNullable()
			.unique();

		tbl.string('password', 128).notNullable();

		tbl.boolean('seeker').defaultTo(false);
		tbl.boolean('employer').defaultTo(false);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('users');
};
