exports.seed = function(knex, Promise) {
	return knex('seekers').insert([
		{
			userId: 1,
			firstName: 'Sam',
			lastName: 'Smith',
			profilePicture:
				'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png',
			month: 10,
			day: 13,
			year: 1990,
			country: 'United States',
			state: 'California',
			city: 'San Francisco',
			zipcode: 94016
		},
		{
			userId: 2,
			firstName: 'John',
			lastName: 'Dough',
			profilePicture:
				'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png',
			month: 5,
			day: 21,
			year: 1994,
			country: 'United States',
			state: 'Washington',
			city: 'Redmond',
			zipcode: 98008
		},
		{
			userId: 3,
			firstName: 'Sally',
			lastName: 'Jones',
			profilePicture:
				'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png',
			month: 1,
			day: 2,
			year: 1992,
			country: 'United States',
			state: 'Michigan',
			city: 'Detroit',
			zipcode: 48127
		}
	]);
};
