exports.up = function(knex) {
	return knex.schema.createTable('jobs_skills', tbl => {
		tbl.increments();

		tbl.integer('jobId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('jobs')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.string('jobSkill', 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('jobs_skills');
};
