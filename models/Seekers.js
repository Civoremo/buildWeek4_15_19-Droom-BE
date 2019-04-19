const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findById,
	update,
	remove,
	findSeeker
};

async function setSeeker() {
	let { email, password, seeker, employer } = await db('users')
		.where({ id: userId })
		.first()
		.returning('id');

	seeker = true;

	user = { email, password, seeker, employer };

	await db('users')
		.where({ id: userId })
		.update(user);
}

// Add job seeker profile
async function add(profile) {
	setSeeker(profile.userId);

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

// Find all seekers
function find() {
	return db('seekers');
}

// Find job seeker profile by id
function findById(userId) {
	return db('seekers')
		.where({ userId })
		.first()
		.returning('id');
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

// Delete seeker profile
async function remove(id) {
	await db('seekers')
		.where({ userId: id })
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
