module.exports = {
	educationValidation,
	updateEducationValidation
};

function educationValidation(req, res, next) {
	const { userId, seekerEducation } = req.body;

	seekerEducation.map(edu => {
		const {
			eduSchool,
			eduCredential,
			eduDescription,
			eduStart,
			eduEnd
		} = edu;

		if (!userId) {
			return res.status(400).json({
				message: 'Please provide a user id'
			});
		}

		if (!eduSchool) {
			return res.status(400).json({
				message: 'Please provide a school'
			});
		}

		if (!eduCredential) {
			return res.status(400).json({
				message: 'Please provide a credential'
			});
		}

		if (!eduDescription) {
			return res.status(400).json({
				message: 'Please provide a description'
			});
		}

		if (!eduStart) {
			return res.status(400).json({
				message: 'Please provide a start date'
			});
		}

		if (!eduEnd) {
			return res.status(400).json({
				message: 'Please provide a end date'
			});
		}
	});

	next();
}

function updateEducationValidation(req, res, next) {
	const {
		eduSchool,
		eduCredential,
		eduDescription,
		eduStart,
		eduEnd
	} = req.body;

	if (!eduSchool) {
		return res.status(400).json({
			message: 'Please provide a school'
		});
	}

	if (!eduCredential) {
		return res.status(400).json({
			message: 'Please provide a credential'
		});
	}

	if (!eduDescription) {
		return res.status(400).json({
			message: 'Please provide a description'
		});
	}

	if (!eduStart) {
		return res.status(400).json({
			message: 'Please provide a start date'
		});
	}

	if (!eduEnd) {
		return res.status(400).json({
			message: 'Please provide a end date'
		});
	}

	next();
}
