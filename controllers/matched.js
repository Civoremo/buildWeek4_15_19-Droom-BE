const router = require('express').Router();
const Matched = require('../models/Matched');

router.get('/', async (req, res) => {
	try {
		const matched = await Matched.get();
		res.status(200).json({
			message: 'The matches have been successfully retrieved',
			matched
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, there was an error getting the matched jobs.'
		});
	}
});

router.post('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { jobId } = req.body;
		const matched = await Matched.add(id, jobId);
		console.log({
			message: 'The job has been successfully matched.',
			matched
		});
		res.status(201).json({
			message: 'The job has been successfully matched.',
			matched
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, there was a problem confirming the match.'
		});
	}

	throw new Error(err);
});

module.exports = router;
