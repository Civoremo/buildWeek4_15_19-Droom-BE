const router = require('express').Router();
const Seekers = require('../models/Seekers');

const {
	seekerValidation,
	updateSeekerValidation
} = require('../middleware/validation/index');

// Create seeker profile
router.post('/', seekerValidation, async (req, res) => {
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

		if (!profile)
			return res.status(404).json({
				message: "Sorry, but that profile doesn't exist"
			});

		res.status(200).json(profile);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while getting that profile'
		});

		throw new Error(err);
	}
});

// Update seeker profile
router.put('/:id', updateSeekerValidation, async (req, res) => {
	try {
		const profile = await Seekers.findById(req.params.id);

		if (!profile)
			return res.status(404).json({
				message: "Sorry, but that profile doesn't exist"
			});

		const updatedProfile = await Seekers.update(
			req.params.id,
			req.body
		);

		res.status(200).json(updatedProfile);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while updating that profile'
		});
		console.log(err);
		throw new Error(err);
	}
});

// Delete seeker profile
router.delete('/:id', async (req, res) => {
	try {
		const profile = await Seekers.findById(req.params.id);

		if (!profile)
			return res.status(404).json({
				message: "Sorry, but that profile doesn't exist"
			});

		await Seekers.remove(req.params.id);
		res.status(200).json({
			message: 'Profile successfully deleted'
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while deleting that profile'
		});
	}
});

module.exports = router;
