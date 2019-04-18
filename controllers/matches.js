const router = require('express').Router();
const Matches = require('../models/Matches');
const Seekers = require('../models/Seekers');
const Jobs = require('../models/jobs');
const Companies = require('../models/Companies');
const Users = require('../models/Users');

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

router.post('/seeker/:id/match/job/:jobId', async (req, res) => {
	try {
		const { id, jobId } = req.params;

		const seeker = await Seekers.findById(id);

		if (!seeker)
			return res.status(404).json({
				message:
					'Sorry, but that profile does not exist'
			});

		const job = await Jobs.findById(jobId);

		if (!job)
			return res.status(404).json({
				message: 'Sorry, but that job does not exist'
			});

		const match = await Matches.seekerMatch(id, jobId);

		res.status(201).json({
			message:
				'Seeker has sent a match request successfully.',
			match
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while creating match',
			err
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

router.post('/job/:id/match/seeker/:seekerId', async (req, res) => {
	try {
		const { id, seekerId } = req.params;

		const job = await Jobs.findById(id);

		if (!job)
			return res.status(404).json({
				message: 'Sorry, but that job does not exist'
			});

		const seeker = await Users.findById(seekerId);

		if (!seeker)
			return res.status(404).json({
				message:
					'Sorry, but that profile does not exist'
			});

		const match = await Matches.jobMatch(id, seekerId);

		res.status(201).json({
			message: 'Job has sent a match request successfully.',
			match
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while creating match',
			err
		});

		throw new Error(err);
	}
});

module.exports = router;
