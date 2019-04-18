const db = require('../database/dbConfig');
const Jobs = require('./Jobs');

module.exports = {
	getMatchedJobs,
	getMatchedSeekers
};

async function getMatchedJobs(userId) {
	let { id } = await db('seekers')
		.where({ userId })
		.first()
		.returning('id');

	const matches = await db('matches').where({ seekerId: id });

	let jobs = matches.filter(job => job.matched);

	jobs = await Promise.all(
		jobs.map(async job => await Jobs.findById(job.jobId))
	);
	return jobs;
}

async function getMatchedSeekers(jobId) {
	let matches = await db('matches').where({ jobId });
	let seekers = matches.filter(match => match.matched);

	seekers = await Promise.all(
		seekers.map(
			async seeker =>
				await db('seekers')
					.where({
						id: seeker.seekerId
					})
					.first()
		)
	);
	return seekers;
}
