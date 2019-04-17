const db = require('../database/dbConfig');
const Jobs = require('./Jobs.js');

module.exports = {
	get,
	add,
	getById
};

async function add(userid, jobId) {
	let seeker = await db('seekers')
		.where({ userId: userid })
		.first();
	//console.log(seeker);
	//console.log(jobId);
	let matchedJob = {
		jobId,
		seekerId: seeker.id
	};

	let [id] = await db('matches')
		.insert(matchedJob)
		.returning('id');
	//console.log(id);

	return getById(id);
}

function get() {
	return db('matches');
}

// Get matched by Id
function getById(id) {
	return db('matches')
		.where({ id })
		.first();
}
