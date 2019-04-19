const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
	return knex('users').insert([
		{
			email: 'microsoft@microsoft.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'apple@apple.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'github@github.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'nexient@nexient.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'netflix@netflix.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'twitter@twitter.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'spotify@spotify.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'facebook@facebook.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'reddit@reddit.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'google@google.com',
			password: bcrypt.hashSync('password', 10),
			seeker: false,
			employer: true
		},
		{
			email: 'sam@gmail.com',
			password: bcrypt.hashSync('password', 10),
			seeker: true,
			employer: false
		},
		{
			email: 'john@gmail.com',
			password: bcrypt.hashSync('password', 10),
			seeker: true,
			employer: false
		},
		{
			email: 'sally@gmail.com',
			password: bcrypt.hashSync('password', 10),
			seeker: true,
			employer: false
		}
	]);
};
