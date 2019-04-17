module.exports = {
	companyValidation,
	updateCompanyValidation,
	jobValidation,
	authValidation
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
