const router = require('express').Router();
const Matches = require('../models/Matches');
const Matched = require('../models/Matched');

router.get('/seeker/:id', async (req, res) => {
	try {
		const matched = await Matched.getMatchedJobs(req.params.id);
		res.status(200).json(matched);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, there was an error getting the matches.',
			err
		});
	}

	throw new Error(err);
});

module.exports = router;
