require('dotenv').config();

const express = require('express');

const middleware = require('./middleware/config');

const server = express();

middleware(server);

server.listen(process.env.PORT, () => {
	console.log('Server now up and running on http://localhost:5000');
});
