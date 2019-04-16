const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// Create a company
async function add(company) {
	const [id] = await db('companies')
		.insert(company)
		.returning('id');
	console.log(id);
	return findById(id);
}

// Get all companies
function find() {
	return db('companies');
}

// Get companies by filter
function findBy(filter) {
	return db('companies').where({ filter: filter });
}

// Get company by Id
function findById(id) {
	return db('companies')
		.where({ id })
		.first();
}

// Update a company
async function update(id, updated) {
	await db('companies')
		.where({ id })
		.update(updated);

	return findById(id);
}

// Delete a company
function remove(id) {
	return db('companies')
		.where({ id })
		.del();
}
