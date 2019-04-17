exports.seed = function(knex, Promise) {
	return knex('education').insert([
		{
			skills: {
				userId: 1,
				seekerSkills: [
					'Java',
					'JavaScript',
					'jQuery',
					'HTML',
					'CSS',
					'Bootstrap',
					'Git'
				]
			}
		},
		{
			skills: {
				userId: 2,
				seekerSkills: [
					'Golang',
					'Python',
					'JavaScript',
					'Node',
					'Express',
					'C++',
					'C#',
					'MySQL',
					'PostgreSQL',
					'Git',
					'HTML',
					'React',
					'CSS',
					'Django'
				]
			}
		},
		{
			skills: {
				userId: 3,
				seekerSkills: [
					'Java',
					'Spring Framework',
					'React',
					'MySQL',
					'PostgreSQL'
				]
			}
		}
	]);
};
