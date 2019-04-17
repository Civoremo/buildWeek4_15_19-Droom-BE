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

		tbl.text('eduSchool').notNullable();

		tbl.text('eduCredential').notNullable();

		tbl.text('eduDescription').notNullable();

		tbl.string('eduStart', 128).notNullable();

		tbl.string('eduEnd', 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('seekers');
};
