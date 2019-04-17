const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	update,
	remove
};

// Add experience to seeker profile
async function add({ userId, seekerExperience }) {
	let { id } = await findSeeker(userId);
	seekerId = id;

	// add seekerId prop to experience object
	const updatedExperience = seekerExperience.map(exp => {
		return { seekerId, ...exp };
	});

	// add experience to db
	await db('experience')
		.insert(updatedExperience)
		.returning('id');

	// return all experience related to seeker profile
	return db('experience').where({ seekerId });
}

// Find all experience for seeker
async function find(userId) {
	let { id } = await findSeeker(userId);
	seekerId = id;

	return db('experience').where({ seekerId });
}

async function update(id, experience) {
	await db('experience')
		.where({ id })
		.update(experience);

	return db('experience')
		.where({ id })
		.first();
}

async function remove(id) {
	await db('experience')
		.where({ id })
		.del();

	return parseInt(id, 10);
}

// Find seekerId by userId
function findSeeker(id) {
	return db('seekers')
		.where({ userId: id })
		.select('id')
		.first()
		.returning('id');
}
