const router = require('express').Router();
const Matched = require('../models/Matched');

router.post('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const jobId = req.body;
		const matched = await Matched.add(id, jobId);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, there was a problem confirming the match.'
		});
	}

	throw new Error(err);
});

module.exports = router;
