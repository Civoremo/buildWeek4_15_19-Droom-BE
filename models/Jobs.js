const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// Create a job
async function add(job) {
	const [id] = await db('jobs')
		.insert(job)
		.returning('id');
	return findById(id);
}

// Get all jobs
function find() {
	return db('jobs');
}

// Get jobs by filter
function findBy(filter) {
	return db('jobs').where({ filter });
}

// Get job by Id
function findById(id) {
	return db('jobs')
		.where({ id })
		.first();
}

// Update a job
async function update(id, updated) {
	await db('jobs')
		.where({ id })
		.update(updated);

	return findById(id);
}

// Delete a job
function remove(id) {
	return db('jobs')
		.where({ id })
		.del();
}
