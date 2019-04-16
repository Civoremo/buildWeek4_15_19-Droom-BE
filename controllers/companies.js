const router = require('express').Router();
const Companies = require('../models/Companies.js');
const Jobs = require('../models/Jobs.js');
const authenticate = require('../middleware/authenticate');
const { companyValidation } = require('../middleware/validation');

router.get('/', authenticate, async (req, res) => {
	try {
		const companies = await Companies.find();
		//const jobs = await Jobs.findBy(companyId);
		res.status(200).json(companies);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while retrieving the list of companies'
		});

		throw new Error(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const company = await Companies.findById(id);
		console.log(company);
		//const jobs = await Jobs.findBy(company.id);
		//console.log(jobs);
		//res.status(200).json({ ...companies, jobs });
		res.status(200).json({ ...companies, jobs });
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

	try {
		const newCompany = await Companies.add(company);
		const message = `${
			company.companyName
		} has successfully been added.`;
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
