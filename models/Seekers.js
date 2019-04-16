const db = require('../database/dbConfig');

module.exports = {
	add
};

async function add(profile) {
	const { information, education, experience, skills } = profile;
	const { userId, firstName, lastName, profilePicture } = information;

	let seeker = {
		userId,
		firstName,
		lastName,
		profilePicture,
		...information.dob,
		...information.location
	};

	const [id] = await db('seekers').insert(seeker); // .returning('id');

	const updatedEducation = education.map(edu => {
		return { seekerId: id, ...edu };
	});

	const updatedExperience = experience.map(exp => {
		return { seekerId: id, ...exp };
	});

	const updatedSkills = skills.map(skill => {
		return { seekerId: id, seekerSkill: skill };
	});

	await db('education').insert(updatedEducation);
	await db('experience').insert(updatedExperience);
	await db('seeker_skills').insert(updatedSkills);
}
