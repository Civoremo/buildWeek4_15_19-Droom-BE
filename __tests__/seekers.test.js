const request = require('supertest');
const server = require('../server');
const db = require('../database/dbConfig');

describe('Job seeker endpoint tests', () => {
	beforeEach(async () => {
		await db('users').truncate();
		await db('seekers').truncate();
		await db('users').insert({
			email: 'email@gmail.com',
			password: 'password'
		});
	});

	describe('GET /api/seekers/:id', () => {
		it('should return job seeker profile', async () => {
			const seeker = {
				userId: 1,
				seeker: {
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
				}
			};

			let response = await request(server)
				.post('/api/seekers')
				.send(seeker);

			expect(response.status).toBe(201);

			response = await request(server).get('/api/seekers/1');

			const seekerResponse = {
				id: 1,
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
			};

			expect(response.body).toEqual(seekerResponse);
		});

		it('should return 404 (Not Found) status code if the provided user id does not exist', async () => {
			const response = await request(server).get(
				'/api/seekers/1'
			);

			expect(response.status).toBe(404);
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
				.send(seeker);

			expect(response.status).toBe(400);
		});

		it('should return status code of 201 (Created) after creating job seeker profile', async () => {
			const seeker = {
				userId: 1,
				seeker: {
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
				}
			};

			const response = await request(server)
				.post('/api/seekers')
				.send(seeker);

			expect(response.status).toBe(201);
		});

		it('should return the newly created job seeker profile', async () => {
			const seeker = {
				userId: 1,
				seeker: {
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
				}
			};

			const response = await request(server)
				.post('/api/seekers')
				.send(seeker);

			const newSkeer = {
				id: 1,
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
			};

			expect(response.body).toEqual(newSkeer);
		});
	});

	describe('PUT /api/seekers/:id', () => {
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
				.put('/api/seekers/1')
				.send(seeker);

			expect(response.status).toBe(400);
		});

		// it('should return status code of 201 (Created) after creating job seeker profile', async () => {
		//     const seeker = {
		//         userId: 1,
		//         seeker: {
		//             firstName: 'John',
		//             lastName: 'Dough',
		//             profilePicture: '',
		//             month: 2,
		//             day: 4,
		//             year: 1994,
		//             country: 'US',
		//             state: 'California',
		//             city: 'San Francisco',
		//             zipcode: 93552
		//         }
		//     };

		//     const response = await request(server)
		//         .post('/api/seekers')
		//         .send(seeker);

		//     expect(response.status).toBe(201);
		// });

		// it('should return the newly created job seeker profile', async () => {
		//     const seeker = {
		//         userId: 1,
		//         seeker: {
		//             firstName: 'John',
		//             lastName: 'Dough',
		//             profilePicture: '',
		//             month: 2,
		//             day: 4,
		//             year: 1994,
		//             country: 'US',
		//             state: 'California',
		//             city: 'San Francisco',
		//             zipcode: 93552
		//         }
		//     };

		//     const response = await request(server)
		//         .post('/api/seekers')
		//         .send(seeker);

		//     const newSkeer = {
		//         id: 1,
		//         userId: 1,
		//         firstName: 'John',
		//         lastName: 'Dough',
		//         profilePicture: '',
		//         month: 2,
		//         day: 4,
		//         year: 1994,
		//         country: 'US',
		//         state: 'California',
		//         city: 'San Francisco',
		//         zipcode: 93552
		//     };

		//     expect(response.body).toEqual(newSkeer);
		// });
	});
});
