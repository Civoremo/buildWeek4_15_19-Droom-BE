const request = require('supertest');
const server = require('../server');
const db = require('../database/dbConfig');

describe('Job seeker endpoint tests', () => {
	beforeAll(async () => {
		await db('users').truncate();
		await db('seekers').truncate();
		await db('users').insert({
			email: 'email@gmail.com',
			password: 'password'
		});
	});

	const auth = {
		Authorization:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJzZWVrZXIiOjAsImVtcGxveWVyIjoxLCJpYXQiOjE1NTU2NDQ3MjMsImV4cCI6MTU1NTczMTEyM30.T987Tz4dOsio_EXIt6th2_vq1yULBHQ0Jw8Zl0rJ4dE'
	};

	const seekerProfile = {
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
	};

	describe('GET /api/seekers/:id', () => {
		it('should return job seeker profile', async () => {
			const seeker = {
				userId: 1,
				seeker: seekerProfile
			};

			let response = await request(server)
				.post('/api/seekers')
				.send(seeker)
				.set(auth);

			await expect(response.status).toBe(201);

			const seekerResponse = {
				id: 1,
				userId: 1,
				...seekerProfile
			};

			await expect(response.body).toEqual(seekerResponse);
		});

		it('should return 404 (Not Found) status code if the provided user id does not exist', async () => {
			const response = await request(server)
				.get('/api/seekers/4')
				.set(auth);

			await expect(response.status).toBe(404);
		});
	});

	describe('POST /api/seekers', () => {
		it('should return status code of 400 (Bad Request) if there are any missing fields', async () => {
			const seeker = {
				userId: 1,
				seeker: {
					firstName: 'John',
					lastName: 'Dough',
					profilePicture: '',
					month: 2,
					day: 4
				}
			};

			const response = await request(server)
				.post('/api/seekers')
				.send(seeker)
				.set(auth);

			expect(response.status).toBe(400);
		});

		it('should return status code of 201 (Created) after creating job seeker profile', async () => {
			const seeker = {
				userId: 1,
				seeker: seekerProfile
			};

			const response = await request(server)
				.post('/api/seekers')
				.send(seeker)
				.set(auth);

			expect(response.status).toBe(201);
		});

		it('should return the newly created job seeker profile', async () => {
			const seeker = {
				userId: 1,
				seeker: seekerProfile
			};

			const response = await request(server)
				.post('/api/seekers')
				.send(seeker)
				.set(auth);

			const newSkeer = {
				id: 1,
				userId: 1,
				...seekerProfile
			};

			expect(response.body).toEqual(newSkeer);
		});
	});

	describe('PUT /api/seekers/:id', () => {
		it('should return a 404 status if profile not found', async () => {
			const seeker = seekerProfile;
			const response = await request(server)
				.put('/api/seekers/5')
				.send(seeker)
				.set(auth);

			expect(response.status).toBe(404);
		});

		it('should return status code of 400 (Bad Request) if there are any missing fields', async () => {
			const seeker = {
				seeker: {
					firstName: 'John',
					lastName: 'Dough',
					profilePicture: '',
					month: 2,
					day: 4
				}
			};

			const response = await request(server)
				.put('/api/seekers/1')
				.send(seeker)
				.set(auth);

			expect(response.status).toBe(400);
		});

		it('should return status code of 200 (OK) after updating job seeker profile', async () => {
			const seeker = seekerProfile;

			const response = await request(server)
				.put('/api/seekers/1')
				.send(seeker)
				.set(auth);

			expect(response.status).toBe(200);
		});

		it('should return updated seeker profile', async () => {
			const seeker = seekerProfile;

			const response = await request(server)
				.put('/api/seekers/1')
				.send(seeker)
				.set(auth);

			const updatedSeeker = {
				id: 1,
				userId: 1,
				...seekerProfile
			};

			expect(response.body).toEqual(updatedSeeker);
		});
	});

	describe('DELETE /api/seekers/:id', () => {
		it('should return 200 (OK) status on successful deletion', async () => {
			const seeker = {
				userId: 1,
				seeker: seekerProfile
			};

			let response = await request(server)
				.post('/api/seekers')
				.send(seeker)
				.set(auth);

			expect(response.status).toBe(201);

			response = await request(server)
				.delete('/api/seekers/1')
				.set(auth);

			expect(response.status).toBe(200);
		});

		it('should return 404 (Not Found) status when the provided job seeker profile does not exist', async () => {
			const response = await request(server)
				.delete('/api/seekers/1')
				.set(auth);

			expect(response.status).toBe(404);
		});
	});
});
