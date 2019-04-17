const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// Create a job skill
async function add({ jobId, jobSkill }) {
	//console.log(jobId, jobSkill);
	const updatedSkills = jobSkill.map(skill => {
		return { jobId, jobSkill: skill };
	});
	console.log(updatedSkills);

	await db('jobs_skills')
		.insert(updatedSkills)
		.returning('id');
	return findBy(jobId);
}

// Get all job skills
function find() {
	return db('jobs_skills');
}

// Get job skills by filter
function findBy(filter) {
	return db('jobs_skills').where({ jobId: filter });
}

// Get job skill by Id
function findById(id) {
	return db('jobs_skills')
		.where({ id })
		.first();
}

// Update a job skill
async function update(id, updated) {
	await db('jobs_skills')
		.where({ id })
		.update(updated);

	return findById(id);
}

// Delete a job skill
function remove(id) {
	return db('jobs_skills')
		.where({ id })
		.del();
}
