const db = require('../database/dbConfig');
const Jobs = require('./Jobs.js');
const Seekers = require('./Seekers');
const Skills = require('./Skills');
const Companies = require('./Companies');

module.exports = {
	seekerMatches,
	companyMatches
};

async function seekerMatches(id) {
	// Find seeker based on userId
	let seeker = await Seekers.findById(id);

	// Get all seeker skills
	let seekerSkills = await db('seeker_skills').where({
		seekerId: seeker.id
	});

	// Map through seeker skills and push them to arraySkills
	let arraySkills = await seekerSkills.map(skill => {
		return skill.seekerSkill;
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

async function companyMatches(id) {
	// Find company based on user Id
	let company = await Companies.findById(id);
	//console.log(company);

	let arrayJobSkills = await company.jobs.map(job => {
		let mappedSkills = job.jobSkills.map(skill => {
			return skill.jobSkill;
		});
		return { skills: mappedSkills, jobId: job.id };
	});
	console.log(arrayJobSkills);

	let seekers = await Seekers.find();
	//console.log(seekers);

	let profiles = await Promise.all(
		seekers.map(async seeker => {
			const seekerSkills = await db('seeker_skills').where({
				seekerId: seeker.id
			});
			return { ...seeker, seekerSkills };
		})
	);
	//console.log(profiles);

	let arraySeekerSkills = await profiles.map(profile => {
		let mappedSkills = profile.seekerSkills.map(skill => {
			return skill.seekerSkill;
		});
		return { skills: mappedSkills, seekerId: profile.id };
	});

	//console.log(arraySeekerSkills);

	let updatedProfiles = await arrayJobSkills.map(job => {
		let updatedSeekerCount = arraySeekerSkills.map(seeker => {
			let count = 0;
			seeker.skills.forEach(skill => {
				if (job.skills.includes(skill)) {
					count++;
				}
			});
			let updatedUser = {
				...seeker,
				jobId: job.jobId,
				count
			};
			//console.log(updatedUser);
			return updatedUser;
		});
		return updatedSeekerCount;
		//console.log(countedUsers);
	});

	//console.log(updatedProfiles[0]);

	let stitchedProfiles = await Promise.all(
		updatedProfiles[0].map(async countProfile => {
			//console.log(countProfile);
			let profile = await Seekers.findById(
				countProfile.seekerId
			);
			let stitched = {
				...countProfile,
				profile
			};
			//console.log(stitched);
			return stitched;
		})
	);
	console.log(stitchedProfiles);

	let sortedProfiles = stitchedProfiles.sort((a, b) => b.count - a.count);

	return sortedProfiles;
}
