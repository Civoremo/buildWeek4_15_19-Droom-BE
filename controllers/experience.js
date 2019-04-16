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
router.put('/', async (req, res) => {});

// Delete individual experience
router.delete('/', async (req, res) => {});

module.exports = router;
