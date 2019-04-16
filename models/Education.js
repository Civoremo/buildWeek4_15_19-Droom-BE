const db = require('../database/dbConfig');

module.exports = {
	add
};

async function add(education) {
	let { id } = await db('seekers')
		.where({ userId: education.userId })
		.select('id')
		.first();
	seekerId = id;
	const updatedEducation = education.seekerEducation.map(edu => {
		return { seekerId, ...edu };
	});

	console.log(updatedEducation);

	return await db('education')
		.insert(updatedEducation)
		.returning('id');
}
