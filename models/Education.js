const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	update,
	remove
};

// Add education to seeker profile
async function add({ userId, seekerEducation }) {
	let id = db('seekers')
		.where({ userId: userId })
		.select('id')
		.first()
		.returning('id');

	let seekerId = id;

	// add seekerId prop to education object
	const updatedEducation = seekerEducation.map(edu => {
		return { seekerId, ...edu };
	});

	// add education to db
	await db('education').insert(updatedEducation);

	// return all education related to seeker profile
	return db('education').where({ seekerId });
}

// Find all education for seeker
async function find(userId) {
	let { id } = await findSeeker(userId);
	seekerId = id;

	return db('education').where({ seekerId });
}

async function update(id, education) {
	await db('education')
		.where({ id })
		.update(education);

	return db('education')
		.where({ id })
		.first();
}

async function remove(id) {
	await db('education')
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
