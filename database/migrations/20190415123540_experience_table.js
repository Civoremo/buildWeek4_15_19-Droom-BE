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

		tbl.string('jobTitle').notNullable();

		tbl.string('jobCompany').notNullable();

		tbl.string('jobDescription').notNullable();

		tbl.string('jobStart').notNullable();

		tbl.string('jobEnd').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.cascade().dropTable('experience');
};
