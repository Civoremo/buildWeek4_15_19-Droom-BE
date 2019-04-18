const router = require('express').Router();
const Skills = require('../models/JobSkills.js');
const {
	jobSkillsValidation,
	updateJobSkillsValidation
} = require('../middleware/validation/index');

router.get('/', async (req, res) => {
	try {
		const skills = await Skills.find();
		const message = 'The job skills were found in the database.';
		if (!skills.length) {
			res.status(404).json({
				skills: [],
				message:
					'The jobs could not be found in the database.'
			});
		}
		res.status(200).json({ message, skills });
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while retrieving the list of skills.'
		});

		throw new Error(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const skills = await Skills.findById(id);
		const message = 'The job skill was retrieved successfully.';
		if (!skills.length) {
			res.status(404).json({
				skills: [],
				message:
					'The job skill could not be found in the database.'
			});
		}
		res.status(200).json({ message, skills });
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while retrieving the job skill.'
		});

		throw new Error(err);
	}
});

router.post('/', jobSkillsValidation, async (req, res) => {
	const skill = req.body;
	console.log('skill', skill);
	try {
		const newSkill = await Skills.add(skill);

		const message = `${
			skill.jobSkill
		} has successfully been added.`;
		res.status(201).json({ message, skills: newSkill });
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while adding the job skill.'
		});

		throw new Error(err);
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const count = await Skills.remove(id);
		console.log(count);
		if (count > 0) {
			res.status(204).json({
				message:
					'The job skill has been successfully deleted.'
			});
		} else {
			res.status(404).json({
				message: 'The skill could not be found.'
			});
		}
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while deleting the job skill.'
		});

		throw new Error(err);
	}
});

router.put('/:id', updateJobSkillsValidation, async (req, res) => {
	try {
		const { id } = req.params;
		const updated = req.body;

		const updatedSkill = await Skills.update(id, updated);

		if (updatedSkill.id) {
			res.status(200).json(updatedSkill);
		} else {
			res.status(200).json({
				message: 'The job skill could not be found.'
			});
		}
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while updating the job skill.'
		});

		throw new Error(err);
	}
});

module.exports = router;
