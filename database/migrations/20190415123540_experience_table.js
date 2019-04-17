exports.up = function(knex) {
	return knex.schema.createTable('experience', tbl => {
		tbl.increments();

		tbl.integer('seekerId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('seekers')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.string('jobTitle', 128).notNullable();

		tbl.string('jobCompany', 128).notNullable();

		tbl.text('jobDescription').notNullable();

		tbl.string('jobStart', 128).notNullable();

		tbl.string('jobEnd', 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('experience');
};
