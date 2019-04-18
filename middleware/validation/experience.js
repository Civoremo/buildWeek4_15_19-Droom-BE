module.exports = {
	experienceValidation,
	updateExperienceValidation
};

function experienceValidation(req, res, next) {
	const { userId, seekerExperience } = req.body;

	seekerExperience.map(exp => {
		const {
			jobTitle,
			jobCompany,
			jobDescription,
			jobStart,
			jobEnd
		} = exp;

		if (!userId) {
			return res.status(400).json({
				message: 'Please provide a user id'
			});
		}

		if (!jobTitle) {
			return res.status(400).json({
				message: 'Please provide a job title'
			});
		}

		if (!jobCompany) {
			return res.status(400).json({
				message: 'Please provide a company'
			});
		}

		if (!jobDescription) {
			return res.status(400).json({
				message: 'Please provide a job description'
			});
		}

		if (!jobStart) {
			return res.status(400).json({
				message: 'Please provide a start date'
			});
		}

		if (!jobEnd) {
			return res.status(400).json({
				message: 'Please provide a end date'
			});
		}
	});

	next();
}

function updateExperienceValidation(req, res, next) {
	const {
		jobTitle,
		jobCompany,
		jobDescription,
		jobStart,
		jobEnd
	} = req.body;

	if (!jobTitle) {
		return res.status(400).json({
			message: 'Please provide a job title'
		});
	}

	if (!jobCompany) {
		return res.status(400).json({
			message: 'Please provide a company'
		});
	}

	if (!jobDescription) {
		return res.status(400).json({
			message: 'Please provide a job description'
		});
	}

	if (!jobStart) {
		return res.status(400).json({
			message: 'Please provide a start date'
		});
	}

	if (!jobEnd) {
		return res.status(400).json({
			message: 'Please provide a end date'
		});
	}

	next();
}
