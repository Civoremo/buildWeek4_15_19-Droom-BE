require('dotenv').config();
const express = require('express');
const Sentry = require('@sentry/node');

const middleware = require('./middleware/config');
const errorMiddleware = require('./middleware/errorReporting');

const usersController = require('./controllers/users');

// initializations
const server = express();
Sentry.init({
	dsn: process.env.SENTRY_DSN
});

// middleware
middleware(server);

// controllers
server.use('/api/auth', usersController);

// error reporting middleware (Must be after all requests)
errorMiddleware(server);

server.listen(process.env.PORT, () => {
	console.log('Server now up and running on http://localhost:5000');
});
