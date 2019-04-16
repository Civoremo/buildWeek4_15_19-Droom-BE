const db = require('../database/dbConfig');

module.exports = {
	add
};

async function add({ userId, seekerEducation }) {
	// Find seeker profile based on user id
	let { id } = await db('seekers')
		.where({ userId })
		.select('id')
		.first();

	// assign seeker id
	seekerId = id;

	// add seekerId prop to education object
	const updatedEducation = seekerEducation.map(edu => {
		return { seekerId, ...edu };
	});

	// add education to db
	await db('education')
		.insert(updatedEducation)
		.returning('id');

	// return all education related to seeker profile
	return db('education').where({ seekerId });
}
