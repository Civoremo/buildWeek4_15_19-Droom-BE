const router = require('express').Router();
const Education = require('../models/Education');

router.post('/', async (req, res) => {
	try {
		const education = await Education.add(req.body);
		res.status(201).json(education);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message:
				'Sorry, but something went wrong while trying to add education'
		});

		throw new Error(err);
	}
});

module.exports = router;
