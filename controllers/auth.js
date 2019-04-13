const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../models/Users');

router.post('/register', async (req, res) => {
	try {
		let user = req.body;
		user.password = await bcrypt.hashSync(user.password, 10);

		const newUser = Users.add(user);
		res.status(201).json(newUser);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while registering'
		});

		throw new Error('/register', err);
	}
});

module.exports = router;
