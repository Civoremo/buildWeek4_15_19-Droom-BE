const router = require('express').Router();
const Companies = require('../models/Companies.js');
const Jobs = require('../models/Jobs.js');
const {
	getValidation,
	jobValidation,
	updateJobValidation
} = require('../middleware/validation');

router.get('/', async (req, res) => {
	try {
		const jobs = await Jobs.find();
		const message = 'The jobs were found in the database.';
		res.status(200).json({ message, jobs });
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while retrieving the list of jobs'
		});

		throw new Error(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const jobs = await Jobs.findById(id);
		const message = 'The job was retrieved successfully.';
		if (!jobs.length) {
			res.status(404).json({
				jobs: [],
				message:
					'The job could not be found in the database.'
			});
		} else {
			res.status(200).json({ message, jobs });
		}
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while retrieving the job.'
		});

		throw new Error(err);
	}
});

router.post('/', jobValidation, async (req, res) => {
	const { userId, job, jobSkills } = req.body;

	try {
		const newJob = await Jobs.add(userId, job, jobSkills);

		const message = `${job.jobName} has successfully been added.`;
		res.status(201).json({ message, jobs: newJob });
	} catch (error) {
		res.status(500).json({
			err,
			message:
				'Sorry, but something went wrong while adding the job.'
		});

		throw new Error(err);
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const count = await Jobs.remove(id);

		if (count > 0) {
			res.status(204).json({
				message:
					'The job was deleted from the database.'
			});
		} else {
			res.status(404).json({
				message: 'The job could not be found.'
			});
		}
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while deleting the job.'
		});

		throw new Error(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const updated = req.body;

		const updatedJob = await Jobs.update(id, updated);
		const message = 'The job was updated successfully';
		if (updatedJob.id) {
			res.status(200).json({ message, jobs: updatedJob });
		} else {
			res.status(404).json({
				message:
					'The job could not be found in the database.'
			});
		}
	} catch (error) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while updating the job.'
		});

		throw new Error(err);
	}
});

module.exports = router;
