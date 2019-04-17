exports.up = function(knex) {
	return knex.schema.createTable('companies', tbl => {
		tbl.increments();

		tbl.integer('userId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.string('companyName', 128).notNullable();

		tbl.string('companyPicture', 255);

		tbl.text('companyDescription', 255).notNullable();

		tbl.string('country', 128).notNullable();

		tbl.string('state', 128).notNullable();

		tbl.string('city', 128).notNullable();

		tbl.integer('zipcode', 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('companies');
};
