const router = require('express').Router();
const Companies = require('../models/Companies.js');
const Jobs = require('../models/Jobs.js');

router.get('/', async (req, res) => {
	try {
		const jobs = await Jobs.find();
		//const jobs = await Jobs.findBy(companyId);
		res.status(200).json(jobs);
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
		//const jobs = await Jobs.findBy(companyId);
		res.status(200).json(jobs);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while retrieving the job.'
		});

		throw new Error(err);
	}
});

router.post('/', async (req, res) => {
	const { userId, job, jobSkills } = req.body;
	//console.log(userId, job);
	try {
		const newJob = await Jobs.add(userId, job, jobSkills);

		const message = `${job.jobName} has successfully been added.`;
		res.status(201).json({ message, newJob });
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
		console.log(count);
		if (count > 0) {
			res.status(204).json({
				message:
					'The job has been successfully deleted.'
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
		console.log(updatedJob);
		if (updatedJob.id) {
			res.status(200).json(updatedJob);
		} else {
			res.status(200).json({
				message: 'Job could not be found.'
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
