const router = require('express').Router();
const Experience = require('../models/Experience');

// Add seeker experience
router.post('/', async (req, res) => {
	try {
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
		const experience = await Experience.find(req.params.id);
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
router.put('/:id', async (req, res) => {
	try {
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
		const deletedExperience = await Experience.remove(
			req.params.id
		);
		res.status(200).json(deletedExperience);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while deleting experience'
		});

		throw new Error(err);
	}
});

module.exports = router;
