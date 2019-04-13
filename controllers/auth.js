const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../models/Users');
const { generateToken } = require('../helpers/generateToken');

router.post('/register', async (req, res) => {
	try {
		let user = req.body;

		user.password = await bcrypt.hashSync(user.password, 10);
		let newUser = await Users.add(user);
		user = await generateToken(newUser);

		res.status(201).json(user);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while registering'
		});

		throw new Error(err);
	}
});

module.exports = router;
