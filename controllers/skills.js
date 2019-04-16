const router = require('express').Router();
const Skills = require('../models/Skills');

// Create skills
router.post('/', async (req, res) => {
	try {
		const skills = await Skills.add(req.body.skills);
		res.status(201).json(skills);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while trying to add skills'
		});
		throw new Error(err);
	}
});

// Get skills by id
router.get('/:id', async (req, res) => {
	try {
		const skills = await Skills.find(req.params.id);
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
router.put('/:id', async (req, res) => {
	try {
		const updatedSkills = await Skills.update(
			req.params.id,
			req.body
		);
		res.status(200).json(updatedSkills);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while updating skill'
		});

		throw new Error(err);
	}
});

// Delete skill
router.put('/:id', async (req, res) => {});

module.exports = router;
