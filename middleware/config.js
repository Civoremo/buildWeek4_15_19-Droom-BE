const Sentry = require('@sentry/node');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

module.exports = server => {
	server.use(Sentry.Handlers.requestHandler()); // needs to be before all request middleware
	server.use(express.json());
	server.use(bodyParser.json());
	server.use(helmet());
	server.use(morgan('dev'));
	server.use(cors());
};
