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

		tbl.string('firstName', 255).notNullable();

		tbl.string('lastName').notNullable();

		tbl.string('profilePicture').notNullable();

		tbl.integer('month').notNullable();

		tbl.integer('day').notNullable();

		tbl.integer('year').notNullable();

		tbl.string('country').notNullable();

		tbl.string('state').notNullable();

		tbl.string('city').notNullable();

		tbl.integer('zipcode').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('seekers');
};
