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

		tbl.string('companyDescription').notNullable();

		tbl.string('address').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('companies');
};
