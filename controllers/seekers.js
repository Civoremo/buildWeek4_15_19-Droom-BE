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
				'Sorry, but something went wrong while trying to create that profile'
		});
		console.log(err);
		throw new Error(err);
	}
});

// Find seeker profile
router.get('/', async (req, res) => {});

module.exports = router;
