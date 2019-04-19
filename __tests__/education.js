const request = require('supertest');
const server = require('../server');
const db = require('../database/dbConfig');

describe('Job seeker endpoint tests', () => {
	beforeAll(async () => {
		await db('users').truncate();
		await db('seekers').truncate();
		await db('education').truncate();
		await db('users').insert({
			email: 'email@gmail.com',
			password: 'password'
		});
		await db('seekers').insert({
			userId: 1,
			firstName: 'John',
			lastName: 'Dough',
			profilePicture: '',
			month: 2,
			day: 4,
			year: 1994,
			country: 'US',
			state: 'California',
			city: 'San Francisco',
			zipcode: 93552
		});
	});

	const auth = {
		Authorization:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJzZWVrZXIiOjAsImVtcGxveWVyIjoxLCJpYXQiOjE1NTU2NDQ3MjMsImV4cCI6MTU1NTczMTEyM30.T987Tz4dOsio_EXIt6th2_vq1yULBHQ0Jw8Zl0rJ4dE'
	};

	const seekerEducation = [
		{
			eduSchool: 'San Francisco State University',
			eduCredential:
				'Bachelor of Science in Computer Engineering',
			eduDescription:
				'Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.',
			eduStart: '1-1-2019',
			eduEnd: '1-1-2023'
		},
		{
			eduSchool: 'San Francisco State University',
			eduCredential:
				'Bachelor of Science in Electrical Engineering',
			eduDescription:
				'Electrical Engineering is a profession that makes creative use of mathematics and science to solve practical problems in electricity, electronics and related areas. The goal of the Electrical Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.',
			eduStart: '1-1-2014',
			eduEnd: '1-1-2018'
		}
	];

	describe('GET /api/education/:id', () => {
		it('should return status code 404 (Not Found) if education does not exist based off of userId', async () => {
			const response = await request(server)
				.get('/api/education/22')
				.set(auth);

			await expect(response.status).toEqual(404);
		});

		it('should return seeker profile education', async () => {
			let expectedEducation = {
				userId: 1,
				seekerEducation
			};

			response = await request(server)
				.post('/api/education')
				.send(expectedEducation)
				.set(auth);

			await expect(response.status).toBe(201);

			response = await request(server)
				.get('/api/education/1')
				.set(auth);

			let id = 0;
			expectedEducation = seekerEducation.map(edu => {
				id++;
				return {
					id,
					seekerId: 1,
					...edu
				};
			});

			await expect(response.body).toEqual(expectedEducation);
		});
	});
});
