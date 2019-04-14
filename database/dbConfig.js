const knex = require('knex');
const config = require('../knexfile');
const enviornment = process.env.DB_ENV;

module.exports = knex(config[enviornment]);
