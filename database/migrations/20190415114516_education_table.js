exports.up = function(knex) {
	return knex.schema.createTable('education', tbl => {
		tbl.increments();

		tbl.integer('seekerId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('seekers')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.string('eduSchool').notNullable();

		tbl.string('eduCredential').notNullable();

		tbl.string('eduDescription').notNullable();

		tbl.string('eduStart').notNullable();

		tbl.string('eduEnd').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('seekers');
};
