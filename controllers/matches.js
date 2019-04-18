const router = require('express').Router();
const Matches = require('../models/Matches');
const Seekers = require('../models/Seekers');

router.get('/seeker/:id', async (req, res) => {
	try {
		const profile = await Seekers.findById(req.params.id);

		if (!profile)
			return res.status(404).json({
				message:
					"Sorry, but that user doesn't have a profile"
			});

		const matches = await Matches.seekerMatches(req.params.id);
		res.status(200).json(matches);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while getting matches'
		});

		throw new Error(err);
	}
});

router.get('/company/:id', async (req, res) => {
	try {
		const company = await Companies.findById(req.params.id);

		if (!company)
			return res.status(404).json({
				message:
					"Sorry, but that user doesn't have a company"
			});

		const matches = await Matches.companyMatches(req.params.id);
		res.status(200).json(matches);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while getting matches'
		});

		throw new Error(err);
	}
});

module.exports = router;
