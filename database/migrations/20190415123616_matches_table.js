exports.up = function(knex) {
	return knex.schema.createTable('matches', tbl => {
		tbl.increments();

		tbl.integer('jobId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('jobs')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.integer('seekerId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('seekers')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema
		.cascade()
		.cascade()
		.dropTable('matches');
};
