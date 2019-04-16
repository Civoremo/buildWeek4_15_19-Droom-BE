const router = require('express').Router();
const Seekers = require('../models/Seekers');

// Create seeker profile
router.post('/', async (req, res) => {
	try {
		const profile = await Seekers.add(req.body);
		res.status(201).json(profile);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while creating that profile'
		});
		console.log(err);
		throw new Error(err);
	}
});

// Find seeker profile
router.get('/:id', async (req, res) => {
	try {
		const profile = await Seekers.findById(req.params.id);
		res.status(200).json(profile);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while fetching'
		});

		throw new Error(err);
	}
});

module.exports = router;
