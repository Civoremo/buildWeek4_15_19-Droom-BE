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

		tbl.boolean('seekerMatch').defaultTo(false);
		tbl.boolean('jobMatch').defaultTo(false);
		tbl.boolean('matched').defaultTo(false);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('matches');
};
