const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
	return knex('users').insert([
		{
			email: 'microsoft@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'apple@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'github@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'nexient@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'netflix@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'twitter@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'spotify@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'facebook@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'reddit@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'google@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'sam@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'john@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'sally@gmail.com',
			password: bcrypt.hashSync('password', 10)
		}
	]);
};
