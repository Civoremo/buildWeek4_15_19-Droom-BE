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

		tbl.string('companyName', 255).notNullable();

		tbl.string('companyPicture');

		tbl.string('companyDescription').notNullable();

		tbl.string('country').notNullable();

		tbl.string('state').notNullable();

		tbl.string('city').notNullable();

		tbl.integer('zipcode').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.cascade().dropTable('companies');
};
