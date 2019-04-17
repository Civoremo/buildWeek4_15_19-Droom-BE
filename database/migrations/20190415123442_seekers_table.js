exports.up = function(knex) {
	return knex.schema.createTable('seekers', tbl => {
		tbl.increments();

		tbl.integer('userId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.string('firstName', 128).notNullable();

		tbl.string('lastName', 128).notNullable();

		tbl.string('profilePicture', 255).notNullable();

		tbl.integer('month', 128).notNullable();

		tbl.integer('day', 128).notNullable();

		tbl.integer('year', 128).notNullable();

		tbl.string('country', 128).notNullable();

		tbl.string('state', 128).notNullable();

		tbl.string('city', 128).notNullable();

		tbl.integer('zipcode', 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('seekers');
};
