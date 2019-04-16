module.exports = {
	companyValidation
};

function companyValidation(req, res, next) {
	const { userId, companyName, companyDescription, address } = req.body;

	if (!userId) {
		return res.status(400).json({
			message: 'Please provide a user id for this company.'
		});
	}
	if (!companyName || !companyDescription || !address) {
		return res.status(400).json({
			message:
				'Please provide a name, description, and address for this company.'
		});
	}

	next();
}
