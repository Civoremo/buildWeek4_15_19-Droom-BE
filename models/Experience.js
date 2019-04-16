const db = require('../database/dbConfig');

module.exports = {
	add,
	find
};

// Add experience to seeker profile
async function add({ userId, seekerExperience }) {
	let { id } = await findSeeker(userId);
	seekerId = id;

	// add seekerId prop to experience object
	const updatedExperience = seekerExperience.map(edu => {
		return { seekerId, ...edu };
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

// Find seekerId by userId
function findSeeker(id) {
	return db('seekers')
		.where({ userId: id })
		.select('id')
		.first();
}
