exports.seed = function(knex, Promise) {
	return knex('users').insert([
		{
			email: 'microsoft@gmail.com',
			password: 'password'
		},
		{
			email: 'apple@gmail.com',
			password: 'password'
		},
		{
			email: 'github@gmail.com',
			password: 'password'
		},
		{
			email: 'nexient@gmail.com',
			password: 'password'
		},
		{
			email: 'netflix@gmail.com',
			password: 'password'
		},
		{
			email: 'twitter@gmail.com',
			password: 'password'
		},
		{
			email: 'spotify@gmail.com',
			password: 'password'
		},
		{
			email: 'facebook@gmail.com',
			password: 'password'
		},
		{
			email: 'reddit@gmail.com',
			password: 'password'
		},
		{
			email: 'google@gmail.com',
			password: 'password'
		},
		{
			email: 'sam@gmail.com',
			password: 'password'
		},
		{
			email: 'john@gmail.com',
			password: 'password'
		},
		{
			email: 'sally@gmail.com',
			password: 'password'
		}
	]);
};
