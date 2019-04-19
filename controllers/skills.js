const router = require('express').Router();
const Skills = require('../models/Skills');

const {
	skillsValidation,
	updateSkillsValidation
} = require('../middleware/validation/index');

// Create skills
router.post('/', skillsValidation, async (req, res) => {
	try {
		const profile = await Skills.findSeeker(req.body.skills.userId);

		if (!profile)
			return res.status(404).json({
				message:
					"Sorry, but that user doesn't have a profile"
			});

		const skills = await Skills.add(req.body.skills);
		res.status(201).json(skills);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while trying to add skills'
		});
		console.log(err);
		throw new Error(err);
	}
});

// Get skills by id
router.get('/:id', async (req, res) => {
	try {
		const profile = await Skills.findSeeker(req.params.id);

		if (!profile)
			return res.status(404).json({
				message:
					"Sorry, but that user doesn't have a profile"
			});

		const skills = await Skills.find(req.params.id);

		if (!skills.length)
			return res.status(404).json({
				message:
					"Sorry, but that profile doesn't have any skills"
			});

		res.status(200).json(skills);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while trying to get skills'
		});

		throw new Error(err);
	}
});

// Update skill
router.put('/:id', updateSkillsValidation, async (req, res) => {
	try {
		const skill = await Skills.findById(req.params.id);

		if (!skill)
			return res.status(404).json({
				message: "Sorry, but that skill doesn't exist"
			});

		const updatedSkills = await Skills.update(
			req.params.id,
			req.body
		);

		res.status(200).json(updatedSkills);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message:
				'Sorry, but something went wrong while updating skill'
		});

		throw new Error(err);
	}
});

// Delete skill
router.delete('/:id', async (req, res) => {
	try {
		const skill = await Skills.findById(req.params.id);
		if (!skill)
			return res.status(404).json({
				message: "Sorry, but that skill doesn't exist"
			});

		await Skills.remove(req.params.id);
		res.status(200).json({
			message: 'Skill successfully deleted'
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while deleting that skill'
		});
	}
});

module.exports = router;
