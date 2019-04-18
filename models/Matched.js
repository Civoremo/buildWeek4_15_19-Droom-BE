const db = require('../database/dbConfig');

module.exports = {
	get,
	add,
	getById,
	seekerMatch,
	jobMatch
};

async function add(userid, jobId) {
	let seeker = await db('seekers')
		.where({ userId: userid })
		.first();

	let matchedJob = {
		jobId,
		seekerId: seeker.id
	};

	let [id] = await db('matches')
		.insert(matchedJob)
		.returning('id');

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

async function seekerMatch(userId, jobId) {
	let { id } = await db('seekers')
		.where({ userId })
		.first()
		.returning('id');

	let matched = await db('matches')
		.where({ seekerId: id, jobId })
		.first();

	if (matched && matched.jobMatch) {
		const updateMatched = {
			jobId,
			seekerId: id,
			seekerMatch: true,
			jobMatch: true,
			matched: true
		};
		return await db('matches')
			.where({ seekerId: id, jobId })
			.update(updateMatched);
	} else if (matched && matched.seekerMatch) {
		return 'match already exists';
	} else {
		const createMatch = {
			jobId,
			seekerId: id,
			seekerMatch: true,
			jobMatch: false,
			matched: false
		};
		return await db('matches')
			.where({ seekerId: id, jobId })
			.insert(createMatch);
	}
}

async function jobMatch(jobId, seekerId) {
	let matched = await db('matches')
		.where({ jobId, seekerId })
		.first();

	if (matched && matched.seekerMatch) {
		const updateMatched = {
			jobId,
			seekerId,
			seekerMatch: true,
			jobMatch: true,
			matched: true
		};
		return await db('matches')
			.where({ jobId, seekerId })
			.update(updateMatched);
	} else if (matched && matched.jobMatch) {
		return 'match already exists';
	} else {
		const createMatch = {
			jobId,
			seekerId,
			seekerMatch: false,
			jobMatch: true,
			matched: false
		};
		return await db('matches')
			.where({ jobId, seekerId })
			.insert(createMatch);
	}
}
