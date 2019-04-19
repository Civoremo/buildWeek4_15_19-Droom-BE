const router = require('express').Router();
const Education = require('../models/Education');

const {
	educationValidation,
	updateEducationValidation
} = require('../middleware/validation/index');

// Create job seeker education
router.post('/', educationValidation, async (req, res) => {
	try {
		const profile = await Education.findSeeker(req.body.userId);

		if (!profile)
			return res.status(404).json({
				message:
					"Sorry, but that user doesn't have a profile"
			});

		const education = await Education.add(req.body);
		res.status(201).json(education);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while trying to add education'
		});

		throw new Error(err);
	}
});

// Get job seeker education
router.get('/:id', async (req, res) => {
	try {
		const profile = await Education.findSeeker(req.params.id);

		if (!profile)
			return res.status(404).json({
				message:
					"Sorry, but that user doesn't have a profile"
			});

		const education = await Education.find(req.params.id);
		if (!education.length)
			return res.status(404).json({
				message:
					"Sorry, but that profile doesn't have any education"
			});

		res.status(200).json(education);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while trying to get education'
		});

		throw new Error(err);
	}
});

// Update a single education object by education id
router.put('/:id', updateEducationValidation, async (req, res) => {
	try {
		const education = await Education.findById(req.params.id);

		if (!education)
			return res.status(404).json({
				message:
					"Sorry, but that education doesn't exist"
			});

		const updatedEducation = await Education.update(
			req.params.id,
			req.body
		);
		res.status(200).json(updatedEducation);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while updating education'
		});

		throw new Error(err);
	}
});

// Delete a single education object by education id
router.delete('/:id', async (req, res) => {
	try {
		const education = await Education.findById(req.params.id);

		if (!education)
			return res.status(404).json({
				message:
					"Sorry, but that education doesn't exist"
			});

		await Education.remove(req.params.id);
		res.status(200).json({
			message: 'Education successfully deleted'
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while deleting education'
		});

		throw new Error(err);
	}
});

module.exports = router;
