exports.seed = function(knex, Promise) {
	return knex('education').insert([
		{
			seekerId: 1,
			jobTitle: 'Junior Software Engineer',
			jobCompany: 'Nitro, Inc.',
			jobDescription:
				'Responsibilities include Front-end UI development, Back-end management. Technologies used include HTML5, CSS3 (including Bootstrap), JavaScript (jQuery, custom JS library), Java (Play 1.26). Scrum planning, agile development. Continuous Integration with Jenkins. Version control with Git.',
			jobStart: '5-23-2016',
			jobEnd: '4-23-2017'
		},
		{
			seekerId: 2,
			jobTitle: 'Senior Software Engineer',
			jobCompany: 'Netflix',
			jobDescription:
				'Lead a team of engineers creating scalable APIs',
			jobStart: '1-15-2018',
			jobEnd: '4-23-2022'
		},
		{
			seekerId: 3,
			jobTitle: 'Software Engineer',
			jobCompany: 'Oracle',
			jobDescription:
				'Software Engineer at Oracle Cloud Database team.',
			jobStart: '2-2-2018',
			jobEnd: 'Present'
		}
	]);
};
