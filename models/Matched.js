const db = require('../database/dbConfig');

module.exports = {
	getMatchedJobs
};

async function getMatchedJobs(id) {
	const seekerId = db('seekers')
		.where({ userId: id })
		.first()
		.returning('id');
	console.log(seekerId);
	const matches = await db('matches').where({ seekerId });

	return seekerId;
}

/* 

query database to get all matches related to seekerId

hold on to jobId from matches table

query database for jobs based on jobId








*/
