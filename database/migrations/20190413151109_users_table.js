exports.up = function(knex) {
	knex.schema.createTable('users', tbl => {
		tbl.increments();

		tbl.string('email', 128)
			.notNullable()
			.unique();

		tbl.string('password', 128).notNullable();
	});
};

exports.down = function(knex) {
	knex.schema.dropTable('users');
};
