const express = require('express');

const server = express();

server.listen(process.env.PORT, () => {
	console.log('Server now up and running on http://localhost:5000');
});
