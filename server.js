require('dotenv').config();
const express = require('express');

const middleware = require('./middleware/config');
const usersController = require('./controllers/users');

const server = express();

// middleware
middleware(server);

// controllers
server.use('/api/auth', usersController);

server.listen(process.env.PORT, () => {
	console.log('Server now up and running on http://localhost:5000');
});
