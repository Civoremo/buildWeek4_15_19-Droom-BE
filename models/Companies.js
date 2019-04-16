const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// Create a company
async function add(userId, company) {
	const newCompany = {
		userId,
		...company
	};
	const [id] = await db('companies')
		.insert(newCompany)
		.returning('id');

	return findById(id);
}

// Get all companies
function find() {
	return db('companies');
}

// Get companies by filter
function findBy(filter) {
	return db('companies').where({ filter: filter });
}

// Get company by Id
async function findById(id) {
	//console.log(id);
	const company = await db('companies')
		.where({ id })
		.first();
	//console.log(company);
	const companyJobs = await db('jobs').where({ companyId: id });
	//console.log(companyJobs);
	const mappedJobs = await companyJobs.map(async job => {
		//console.log(job);
		//return { ...job };
		const jobSkills = await db('jobs_skills').where({
			jobId: job.id
		});
		console.log(jobSkills);
		return { ...job, jobSkills };
	});
	const stitchedCompany = await {
		...company,
		jobs: mappedJobs
	};

	console.log(stitchedCompany);
	return stitchedCompany;
}

// Update a company
async function update(id, updated) {
	await db('companies')
		.where({ id })
		.update(updated);

	return findById(id);
}

// Delete a company
function remove(id) {
	return db('companies')
		.where({ id })
		.del();
}
