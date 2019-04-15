exports.up = function(knex) {
	return knex.schema.createTable('jobs', tbl => {
		tbl.increments();

		tbl.integer('companyId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('companies')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.string('jobName', 255).notNullable();

		tbl.string('jobDescription').notNullable();

		tbl.string('jobExperienceRequired').notNullable();

		tbl.string('jobExperiencePreferred').notNullable();

		tbl.string('jobApplyBy').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('jobs');
};
