const db = require('../database/dbConfig');

module.exports = {
	add,
	findById
};

// Add job seeker profile
async function add(profile) {
	let { userId, seeker } = profile;

	let newSeeker = {
		userId,
		...seeker
	};

	await db('seekers')
		.insert(newSeeker)
		.returning('id');

	return db('seekers')
		.where({ userId })
		.first();
}

// Find job seeker profile by id
function findById(id) {
	return db('seekers')
		.where({ userId: id })
		.first();
}
