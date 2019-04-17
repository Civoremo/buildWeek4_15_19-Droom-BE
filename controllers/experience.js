const router = require('express').Router();
const Experience = require('../models/Experience');

const {
	experienceValidation,
	updateExperienceValidation
} = require('../middleware/validation');

// Add seeker experience
router.post('/', experienceValidation, async (req, res) => {
	try {
		const profile = await Experience.findSeeker(req.body.userId);

		if (!profile)
			return res.status(404).json({
				message:
					"Sorry, but that user doesn't have a profile"
			});

		const experience = await Experience.add(req.body);
		res.status(201).json(experience);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while trying to add experience'
		});

		throw new Error(err);
	}
});

// Get all seeker experiences
router.get('/:id', async (req, res) => {
	try {
		const profile = await Experience.findSeeker(req.params.id);

		if (!profile)
			return res.status(404).json({
				message:
					"Sorry, but that user doesn't have a profile"
			});

		const experience = await Experience.find(req.params.id);

		if (!experience.length)
			return res.status(404).json({
				message:
					"Sorry, but that profile doesn't have any experience"
			});

		res.status(200).json(experience);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while trying to get experience'
		});

		throw new Error(err);
	}
});

// Update individual experience
router.put('/:id', updateExperienceValidation, async (req, res) => {
	try {
		const experience = await Experience.findById(req.params.id);

		if (!experience)
			return res.status(404).json({
				message:
					"Sorry, but that experience doesn't exist"
			});

		const updatedExperience = await Experience.update(
			req.params.id,
			req.body
		);
		res.status(200).json(updatedExperience);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while updating experience'
		});

		throw new Error(err);
	}
});

// Delete individual experience
router.delete('/:id', async (req, res) => {
	try {
		const experience = await Experience.findById(req.params.id);

		if (!experience)
			return res.status(404).json({
				message:
					"Sorry, but that experience doesn't exist"
			});

		await Experience.remove(req.params.id);
		res.status(200).json({
			message: 'Experience successfully deleted'
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while deleting experience'
		});

		throw new Error(err);
	}
});

module.exports = router;
