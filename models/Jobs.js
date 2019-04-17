const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// Create a job
async function add(userId, job, jobSkills) {
	const company = await db('companies')
		.where({ userId })
		.select('id')
		.first();
	console.log(company);
	let newJob = {
		companyId: company.id,
		...job
	};
	//console.log(newJob);
	const [id] = await db('jobs')
		.insert(newJob)
		.returning('id');

	//console.log(id);
	let newJobSkills = jobSkills.map(skill => {
		//console.log({ jobId: id, skill });
		return { jobId: id, jobSkill: skill };
	});

	await db('jobs_skills').insert(newJobSkills);

	const jobWithSkills = {
		...newJob,
		jobSkills
	};

	console.log(jobWithSkills);
	return jobWithSkills;
}

// Get all jobs
async function find() {
	const jobs = await db('jobs');

	const updatedJobs = await Promise.all(
		jobs.map(async job => {
			const skills = await db('jobs_skills').where({
				jobId: job.id
			});
			return { ...job, jobSkills: skills };
		})
	);
	return updatedJobs;
}

// Get jobs by filter
function findBy(filter) {
	return db('jobs').where({ companyId: filter });
}

// Get job by Id
function findById(id) {
	return db('jobs')
		.where({ id })
		.first();
}

// Update a job
async function update(id, updated) {
	await db('jobs')
		.where({ id })
		.update(updated);

	return findById(id);
}

// Delete a job
function remove(id) {
	return db('jobs')
		.where({ id })
		.del();
}
