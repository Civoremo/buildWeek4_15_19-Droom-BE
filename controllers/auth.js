const router = require('express').Router();
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');
const Users = require('../models/Users');
const { generateToken } = require('../helpers/generateToken');

const { authValidation } = require('../middleware/validation');

router.post('/register', authValidation, async (req, res) => {
	try {
		let user = req.body;

		let existingUser = await Users.findBy({ email: user.email });
		if (existingUser.length)
			return res.status(409).json({
				message: 'Sorry, but that email already exists'
			});

		user.password = await bcrypt.hashSync(user.password, 10);
		let newUser = await Users.add(user);
		token = await generateToken(newUser);

		res.status(201).json({ newUser, token });
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message:
				'Sorry, but something went wrong while registering',
			err
		});

		throw new Error(err);
	}
});

router.post('/login', authValidation, async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await Users.findBy({ email }).first();

		if (user && bcrypt.compareSync(password, user.password)) {
			const token = generateToken(user);
			return res.status(200).json({ token: token });
		}

		return res.status(401).json({
			message: 'Sorry, incorrect username or password'
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while logging in'
		});

		throw new Error(err);
	}
});

module.exports = router;
