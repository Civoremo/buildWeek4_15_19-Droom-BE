const router = require('express').Router();
const Companies = require('../models/Companies.js');
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, async (req, res) => {
	try {
		const companies = await Companies.find();

		res.status(200).json(companies);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while retrieving the list of companies'
		});

		throw new Error(err);
	}
});

router.post('/', async (req, res) => {
	const company = req.body;
	const { userId, companyName, companyDescription, address } = company;

	if (!userId) {
		return res.status(400).json({
			message: 'Please provide a user id for this company.'
		});
	}
	if (!companyName || !companyDescription || !address) {
		return res.status(400).json({
			message:
				'Please provide a name, description, and address for this company.'
		});
	}
	try {
		const newCompany = await Companies.add(company);
		const message = `${companyName} has successfully been added.`;
		res.status(201).json({ message, newCompany });
	} catch (error) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while adding the company.'
		});

		throw new Error(err);
	}
});

module.exports = router;
