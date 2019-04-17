const db = require('../database/dbConfig');
const Jobs = require('./Jobs.js');

module.exports = {
	add
};

async function add(id, jobId) {
	let seeker = await db('seekers')
		.where({ userId: id })
		.first();

	let job = await Jobs.findById(jobId);

	let matchedJob = { jobId, seekerId: seeker.id };

	return matchedJob;
}
