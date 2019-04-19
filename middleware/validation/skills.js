module.exports = {
	skillsValidation,
	updateSkillsValidation
};

function skillsValidation(req, res, next) {
	const { userId, seekerSkills } = req.body.skills;

	if (!userId) {
		return res.status(400).json({
			message: 'Please provide a user id'
		});
	}

	if (!seekerSkills.length)
		return res.status(400).json({
			message: 'Please provide some skills'
		});

	next();
}

function updateSkillsValidation(req, res, next) {
	const { seekerSkill } = req.body;

	if (!seekerSkill) {
		return res.status(400).json({
			message: 'Please provide a skill'
		});
	}
	next();
}
