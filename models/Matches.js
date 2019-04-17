const db = require('../database/dbConfig');
const Jobs = require('./Jobs.js');

module.exports = {
	get
};

async function get(id) {
	let seeker = await db('seekers')
		.where({ id })
		.first();

	let seekerSkills = await db('seeker_skills').where({
		seekerId: seeker.id
	});

	let arraySkills = [];

	await seekerSkills.map(skill => {
		return arraySkills.push(skill.seekerSkill);
	});

	let jobs = await Jobs.find();
	//console.log(jobs);
	let updatedJobs = await Promise.all(
		jobs.map(async job => {
			let count = 0;
			await job.jobSkills.map(skill => {
				if (seeker.skill.includes(skill.jobSkill)) {
					count++;
				}
			});
			return { ...updatedJobs, count };
		})
	);
}

/*

QUERYING:
    Get a seekers profile skills (query)
    Get an array of all job(s) and compare the skills between seeker and job

SORTING PART:
    add count property to job based on matched skills
    jobSkill === seekerSkill add 1 to count
    [jobs]
    sort job skill count limit 100 potential jobs

POTENTIAL OUTCOME TO SORT:

    const jobs = [
        {
            "job": "Mobile Engineer",
            "count": 1
        },
        {
            "job": "Software Engineer",
            "count": 45645363456435
        },  {
            "job": "Full-Stack Software Engineer",
            "count": 4545
        }
    ]

const sortedJobs = jobs.sort((a,b) => b.count - a.count)

console.log(sortedJobs)
*/
