const db = require('../database/dbConfig');
const Jobs = require('./Jobs.js');
const Seekers = require('./Seekers');
const Companies = require('./Companies');

module.exports = {
    seekerMatches,
    companyMatches,
    seekerMatch,
    jobMatch
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
        return {...job, count };
    });

    let matches = await db('matches').where({
        seekerId: seeker.id,
        matched: true
    });

    let mappedMatches = matches.map(match => match.jobId);

    let filteredJobs = updatedJobs.filter(job => {
        return !mappedMatches.includes(job.id);
    });

    // sort updated jobs based on count
    return filteredJobs.sort((a, b) => b.count - a.count);
}

async function companyMatches(id) {
    // Find company based on user Id
    let company = await Companies.findById(id);

    // Find all skills for all jobs and make a new array for each job
    let arrayJobSkills = await company.jobs.map(job => {
        let mappedSkills = job.jobSkills.map(skill => {
            return skill.jobSkill;
        });
        return { skills: mappedSkills, jobId: job.id };
    });

    // Find all seekers
    let seekers = await Seekers.find();

    // Find all seeker skills based on seekerId and stitch the skills in with the rest of the seeker object
    let profiles = await Promise.all(
        seekers.map(async seeker => {
            const seekerSkills = await db('seeker_skills').where({
                seekerId: seeker.id
            });
            return {...seeker, seekerSkills };
        })
    );

    // Find all seeker skills in an array of strings and stitch them with the profile id
    let arraySeekerSkills = await profiles.map(profile => {
        let mappedSkills = profile.seekerSkills.map(skill => {
            return skill.seekerSkill;
        });
        return { skills: mappedSkills, seekerId: profile.id };
    });

    // For each job's skills, search the array of seeker skills and increment the count if it is included in the job skills
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
            return updatedUser;
        });
        return updatedSeekerCount;
    });

    // Finds seeker based on seekerId then stitches in the profile
    let stitchedProfiles = await Promise.all(
        updatedProfiles[0].map(async countProfile => {
            let profile = await Seekers.findById(
                countProfile.seekerId
            );
            let stitched = {
                ...countProfile,
                profile
            };
            return stitched;
        })
    );

    let matches = await db('matches').where({ matched: true });

    // For each match check if matches any profile, if it does match, filter it out
    for (let i = 0; i < matches.length; i++) {
        let unmatched = [];
        for (let j = 0; j < stitchedProfiles.length; j++) {
            if (
                matches[i].jobId !==
                stitchedProfiles[j].jobId ||
                matches[i].seekerId !==
                stitchedProfiles[j].seekerId
            ) {
                unmatched.push(stitchedProfiles[j]);
            }
        }
        // Sort the seeker profiles in descending order
        let sortedProfiles = unmatched.sort(
            (a, b) => b.count - a.count
        );
        return sortedProfiles;
    }
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