require('dotenv').config();
const express = require('express');

const middleware = require('./middleware/config');
const authController = require('./controllers/auth');

const server = express();

// middleware
middleware(server);

// controllers
server.use('/api/auth', authController);

server.listen(process.env.PORT, () => {
	console.log('Server now up and running on http://localhost:5000');
});
