module.exports = {
	companyValidation,
	updateCompanyValidation,
	jobValidation,
	authValidation,
	seekerValidation,
	updateSeekerValidation,
	educationValidation,
	updateEducationValidation,
	experienceValidation,
	updateExperienceValidation
};

function companyValidation(req, res, next) {
	const { userId, company } = req.body;

	const {
		companyName,
		companyDescription,
		country,
		state,
		city,
		zipcode
	} = company;

	if (!userId) {
		return res.status(400).json({
			message: 'Please provide a user id for this company.'
		});
	}
	if (!companyName) {
		return res.status(400).json({
			message: 'Please provide a name for this company.'
		});
	}

	if (!companyDescription) {
		return res.status(400).json({
			message:
				'Please provide a description for this company.'
		});
	}

	if (!country) {
		return res.status(400).json({
			message: 'Please provide a country for this company.'
		});
	}

	if (!state) {
		return res.status(400).json({
			message: 'Please provide a state for this company.'
		});
	}

	if (!city) {
		return res.status(400).json({
			message: 'Please provide a city for this company.'
		});
	}

	if (!zipcode) {
		return res.status(400).json({
			message: 'Please provide a zip code for this company.'
		});
	}

	next();
}

function updateCompanyValidation(req, res, next) {
	const {
		userId,
		companyName,
		companyDescription,
		country,
		state,
		city,
		zipcode
	} = req.body;
	if (!userId) {
		return res.status(400).json({
			message: 'Please provide a user id for this company.'
		});
	}
	if (!companyName) {
		return res.status(400).json({
			message: 'Please provide a name for this company.'
		});
	}

	if (!companyDescription) {
		return res.status(400).json({
			message:
				'Please provide a description for this company.'
		});
	}

	if (!country) {
		return res.status(400).json({
			message: 'Please provide a country for this company.'
		});
	}

	if (!state) {
		return res.status(400).json({
			message: 'Please provide a state for this company.'
		});
	}

	if (!city) {
		return res.status(400).json({
			message: 'Please provide a city for this company.'
		});
	}

	if (!zipcode) {
		return res.status(400).json({
			message: 'Please provide a zip code for this company.'
		});
	}

	next();
}

function jobValidation(req, res, next) {
	const { userId, job } = req.body;
	const {
		jobName,
		jobDescription,
		jobExperienceRequired,
		jobExperiencePreferred,
		jobApplyBy
	} = job;
	if (!userId) {
		return res.status(400).json({
			message: 'Please provide a user id for this job.'
		});
	}
	if (!jobName) {
		return res.status(400).json({
			message: 'Please provide a name for this job.'
		});
	}

	if (!jobDescription) {
		return res.status(400).json({
			message: 'Please provide a description for this job.'
		});
	}

	if (!jobExperienceRequired) {
		return res.status(400).json({
			message: 'Please provide a country for this job.'
		});
	}

	if (!jobExperiencePreferred) {
		return res.status(400).json({
			message: 'Please provide a state for this job.'
		});
	}

	if (!jobApplyBy) {
		return res.status(400).json({
			message: 'Please provide a city for this job.'
		});
	}

	next();
}

function updateCompanyValidation(req, res, next) {
	const {
		userId,
		companyName,
		companyDescription,
		country,
		state,
		city,
		zipcode
	} = req.body;

	if (!userId) {
		return res.status(400).json({
			message: 'Please provide a user id for this company.'
		});
	}
	if (!companyName) {
		return res.status(400).json({
			message: 'Please provide a name for this company.'
		});
	}

	if (!companyDescription) {
		return res.status(400).json({
			message:
				'Please provide a description for this company.'
		});
	}

	if (!country) {
		return res.status(400).json({
			message: 'Please provide a country for this company.'
		});
	}

	if (!state) {
		return res.status(400).json({
			message: 'Please provide a state for this company.'
		});
	}

	if (!city) {
		return res.status(400).json({
			message: 'Please provide a city for this company.'
		});
	}

	if (!zipcode) {
		return res.status(400).json({
			message: 'Please provide a zip code for this company.'
		});
	}

	next();
}

function authValidation(req, res, next) {
	const { email, password } = req.body;

	// body validation
	if (!email || !password) {
		return res.status(400).json({
			message: 'Please make sure all fields are provided'
		});
	}

	next();
}

function seekerValidation(req, res, next) {
	const { userId, seeker } = req.body;

	const {
		firstName,
		lastName,
		month,
		day,
		year,
		country,
		state,
		city,
		zipcode
	} = seeker;

	if (!userId) {
		return res.status(400).json({
			message: 'Please provide a user id'
		});
	}

	if (!firstName) {
		return res.status(400).json({
			message: 'Please provide a first name'
		});
	}

	if (!lastName) {
		return res.status(400).json({
			message: 'Please provide a last name'
		});
	}

	if (!month) {
		return res.status(400).json({
			message: 'Please provide a birth month'
		});
	}

	if (!day) {
		return res.status(400).json({
			message: 'Please provide a birthday'
		});
	}

	if (!year) {
		return res.status(400).json({
			message: 'Please provide a birth year'
		});
	}

	if (!country) {
		return res.status(400).json({
			message: 'Please provide a country'
		});
	}

	if (!state) {
		return res.status(400).json({
			message: 'Please provide a state'
		});
	}

	if (!city) {
		return res.status(400).json({
			message: 'Please provide a city'
		});
	}

	if (!zipcode) {
		return res.status(400).json({
			message: 'Please provide a zip code'
		});
	}

	next();
}

function updateSeekerValidation(req, res, next) {
	const {
		firstName,
		lastName,
		month,
		day,
		year,
		country,
		state,
		city,
		zipcode
	} = req.body;

	if (!firstName) {
		return res.status(400).json({
			message: 'Please provide a first name'
		});
	}

	if (!lastName) {
		return res.status(400).json({
			message: 'Please provide a last name'
		});
	}

	if (!month) {
		return res.status(400).json({
			message: 'Please provide a birth month'
		});
	}

	if (!day) {
		return res.status(400).json({
			message: 'Please provide a birthday'
		});
	}

	if (!year) {
		return res.status(400).json({
			message: 'Please provide a birth year'
		});
	}

	if (!country) {
		return res.status(400).json({
			message: 'Please provide a country'
		});
	}

	if (!state) {
		return res.status(400).json({
			message: 'Please provide a state'
		});
	}

	if (!city) {
		return res.status(400).json({
			message: 'Please provide a city'
		});
	}

	if (!zipcode) {
		return res.status(400).json({
			message: 'Please provide a zip code'
		});
	}

	next();
}

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
