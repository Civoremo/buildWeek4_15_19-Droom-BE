exports.up = function(knex) {
	return knex.schema.createTable('seeker_skills', tbl => {
		tbl.increments();

		tbl.integer('seekerId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('seekers')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.string('seekerSkill').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('seeker_skills');
};
