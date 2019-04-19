const request = require('supertest');
const server = require('../server');
const db = require('../database/dbConfig');

describe('Job seeker experience endpoint tests', () => {
	beforeEach(async () => {
		await db('users').truncate();
		await db('seekers').truncate();
		await db('companies').truncate();
		await db('jobs').truncate();
		await db('matches').truncate();

		await db('users').insert({
			email: 'email@gmail.com',
			password: 'password'
		});

		await db('users').insert({
			email: 'email2@gmail.com',
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

		await db('companies').insert({
			userId: 2,
			companyName: 'Apple',
			companyPicture: '',
			companyDescription: 'An About me for the company',
			country: 'United States of America',
			state: 'California',
			city: 'Cupertino',
			zipcode: 4000
		});

		await db('jobs').insert({
			companyId: 1,
			jobName: 'Back-end Engineer',
			jobDescription: 'An About me for the job',
			jobExperienceRequired: 'jobExperienceRequired',
			jobExperiencePreferred: 'jobExperiencePreferred',
			jobApplyBy: 'jobApplyBy'
		});

		await db('matches').insert({
			id: '1',
			jobId: '1',
			seekerId: '1',
			seekerMatch: true,
			jobMatch: true,
			matched: true
		});
	});

	const auth = {
		Authorization:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJzZWVrZXIiOjAsImVtcGxveWVyIjoxLCJpYXQiOjE1NTU2NDQ3MjMsImV4cCI6MTU1NTczMTEyM30.T987Tz4dOsio_EXIt6th2_vq1yULBHQ0Jw8Zl0rJ4dE'
	};

	describe('GET /api/matches/seeker/:id', () => {
		it('should return 200 (OK) status if provided seeker has potential matches', async () => {
			const response = await request(server)
				.get('/api/matches/seeker/1')
				.set(auth);

			await expect(response.status).toEqual(200);
		});

		it('should return 404 (Not Found) status if provided seeker profile does not exist', async () => {
			const response = await request(server)
				.get('/api/matches/seeker/5')
				.set(auth);

			await expect(response.status).toEqual(404);
		});
	});
});
