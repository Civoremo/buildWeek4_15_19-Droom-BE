require('dotenv').config();
const express = require('express');
const Sentry = require('@sentry/node');

const middleware = require('./middleware/config');
const errorMiddleware = require('./middleware/errorReporting');

const authController = require('./controllers/auth');
const seekerController = require('./controllers/seekers');
const educationController = require('./controllers/education');
const experienceController = require('./controllers/experience');
const comController = require('./controllers/companies');

// initializations
const server = express();
Sentry.init({
	dsn: process.env.SENTRY_DSN
});

// middleware
middleware(server);

// controllers
server.use('/api/auth', authController);
server.use('/api/seekers', seekerController);
server.use('/api/education', educationController);
server.use('/api/experience', experienceController);
server.use('/api/companies', comController);

// error reporting middleware (Must be after all requests)
errorMiddleware(server);

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Sanity check' });
});

server.listen(process.env.PORT, () => {
	console.log('Server now up and running on http://localhost:5000');
});
