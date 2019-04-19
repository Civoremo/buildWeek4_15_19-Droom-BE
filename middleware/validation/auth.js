module.exports = { authValidation };

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
