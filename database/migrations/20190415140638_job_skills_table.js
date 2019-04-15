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

		tbl.string('jobSkill').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('jobs_skills');
};
