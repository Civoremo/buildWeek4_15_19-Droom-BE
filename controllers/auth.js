const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../models/Users');
const { generateToken } = require('../helpers/generateToken');

router.post('/register', async (req, res) => {
	try {
		const user = req.body;

		if (!user.email || !user.password) {
			return res.status(400).json({
				message:
					'Submit both an email and password when registering.'
			});
		}

		user.password = await bcrypt.hashSync(user.password, 10);
		let newUser = await Users.add(user);
		token = await generateToken(newUser);

		res.status(201).json({
			message: 'Registration is successful',
			token
		});
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

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				message:
					'Submit both an email and password when trying to login.'
			});
		}

		const user = await Users.findBy({ email }).first();

		if (user && bcrypt.compareSync(password, user.password)) {
			const token = generateToken(user);
			return res.status(200).json(token);
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
