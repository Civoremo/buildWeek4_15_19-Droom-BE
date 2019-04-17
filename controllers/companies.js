const router = require('express').Router();
const Companies = require('../models/Companies.js');
const Jobs = require('../models/Jobs.js');
const Skills = require('../models/JobSkills');

const {
	companyValidation,
	updateCompanyValidation
} = require('../middleware/validation');

router.get('/', async (req, res) => {
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
		const message = 'The company was retrieved successfully.';
		res.status(200).json({ message, company });
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while retrieving the list of companies'
		});

		throw new Error(err);
	}
});

router.post('/', companyValidation, async (req, res) => {
	const { userId, company } = req.body;

	try {
		const newCompany = await Companies.add(userId, company);
		const message = `${
			company.companyName
		} has successfully been added.`;

		res.status(201).json({ message, newCompany });
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while adding the company.'
		});

		throw new Error(err);
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const count = await Companies.remove(id);

		if (count > 0) {
			res.status(204).json({
				message:
					'The company has been successfully deleted.'
			});
		} else {
			res.status(404).json({
				message: 'The company could not be found.'
			});
		}
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while deleting the company.'
		});

		throw new Error(err);
	}
});

router.put('/:id', updateCompanyValidation, async (req, res) => {
	try {
		const { id } = req.params;
		const updated = req.body;

		const updatedCompany = await Companies.update(id, updated);

		if (updatedCompany.id) {
			res.status(200).json(updatedCompany);
		} else {
			res.status(200).json({
				message: 'Company could not be found.'
			});
		}
	} catch (error) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while updating the company.'
		});

		throw new Error(err);
	}
});

module.exports = router;
