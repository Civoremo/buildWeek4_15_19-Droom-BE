const router = require('express').Router();
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');
const Users = require('../models/Users');
const { generateToken } = require('../helpers/generateToken');

router.post('/register', async (req, res) => {
<<<<<<< HEAD
	const creds = req.body;
	const { email, password } = creds;
	const hash = bcrypt.hashSync(password, 10);
	req.body.password = hash;
=======
	try {
		let user = req.body;
>>>>>>> a18aa206a39835a57c7da98a25e3246729f74299

		if (!user.email || !user.password) {
			return res.status(400).json({
				message:
					'Submit both an email and password when registering.'
			});
		}

<<<<<<< HEAD
	try {
		const [id] = await db('users').insert(creds);
		console.log(id);
		const user = await db('users')
			.where({ id })
			.first();

		const token = generateToken(user);
		res.status(201).json({ user, token });
=======
		user.password = await bcrypt.hashSync(user.password, 10);
		console.log(user.password);
		console.log(user);
		let newUser = await Users.add(user);
		console.log(newUser);
		token = await generateToken(newUser);
		console.log(token);

		res.status(201).json({ token });
>>>>>>> a18aa206a39835a57c7da98a25e3246729f74299
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
