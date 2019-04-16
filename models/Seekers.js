const db = require('../database/dbConfig');

module.exports = {
	add,
	findById,
	update
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

// Update job seeker profile
async function update(id, profile) {
	await db('seekers')
		.where({ userId: id })
		.update(profile);

	return db('seekers')
		.where({ userId: id })
		.first();
}

async function remove(id) {
	await db('seekers')
		.where({ userId: id })
		.del();

	return 'Successfully deleted';
}
