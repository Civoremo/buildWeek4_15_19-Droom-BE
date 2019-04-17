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

		tbl.string('jobName', 128).notNullable();

		tbl.text('jobDescription').notNullable();

		tbl.text('jobExperienceRequired').notNullable();

		tbl.text('jobExperiencePreferred').notNullable();

		tbl.string('jobApplyBy', 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('jobs');
};
