const db = require('../database/dbConfig');
const Jobs = require('./Jobs.js');

module.exports = {
	get
};

async function get(id) {
	// Find seeker based on userId
	let seeker = await db('seekers')
		.where({ userId: id })
		.first();

	// Get all seeker skills
	let seekerSkills = await db('seeker_skills').where({
		seekerId: seeker.id
	});

	// Map through seeker skills and push them to arraySkills
	let arraySkills = [];
	await seekerSkills.map(skill => {
		return arraySkills.push(skill.seekerSkill);
	});

	// Find all jobs
	let jobs = await Jobs.find();

	// Return recommended jobs based off count
	let updatedJobs = jobs.map(job => {
		let count = 0;

		// Compare job skill with skills,
		// if skill matches add 1 to count
		job.jobSkills.forEach(skill => {
			if (arraySkills.includes(skill.jobSkill)) {
				count++;
			}
		});

		// stitch together job properties with count
		return { ...job, count };
	});

	// sort updated jobs based on count
	return updatedJobs.sort((a, b) => b.count - a.count);
}
