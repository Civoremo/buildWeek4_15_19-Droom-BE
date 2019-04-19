const request = require('supertest');
const server = require('../server');
const db = require('../database/dbConfig');

describe('Job seeker skills endpoint tests', () => {
	beforeEach(async () => {
		await db('users').truncate();
		await db('seekers').truncate();
		await db('seeker_skills').truncate();
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

	const seekerSkills = ['Express', 'Node', 'React'];

	const updatedSkill = {
		id: 1,
		seekerId: 1,
		seekerSkill: 'Python'
	};

	describe('GET /api/skills/:id', () => {
		it('should return status code 404 (Not Found) if skills does not exist based off of userId', async () => {
			const response = await request(server)
				.get('/api/skills/22')
				.set(auth);

			await expect(response.status).toEqual(404);
		});

		it('should return seeker profile skills', async () => {
			let expectedSkills = {
				skills: {
					userId: 1,
					seekerSkills
				}
			};

			let response = await request(server)
				.post('/api/skills')
				.send(expectedSkills)
				.set(auth);

			await expect(response.status).toBe(201);

			response = await request(server)
				.get('/api/skills/1')
				.set(auth);

			let id = 0;
			expectedSkills = seekerSkills.map(skill => {
				id++;
				return {
					id,
					seekerId: 1,
					seekerSkill: skill
				};
			});

			await expect(response.body).toEqual(expectedSkills);
		});
	});

	describe('POST /api/skills', () => {
		it('should return 404 (Not Found) status code if user id passed in the body does not have a profile', async () => {
			let expectedSkills = {
				skills: {
					userId: 5,
					seekerSkills
				}
			};

			let response = await request(server)
				.post('/api/skills')
				.send(expectedSkills)
				.set(auth);

			await expect(response.status).toBe(404);
		});

		it('should return 201 (Created) status code skills are successfully created', async () => {
			let expectedSkills = {
				skills: {
					userId: 1,
					seekerSkills
				}
			};

			let response = await request(server)
				.post('/api/skills')
				.send(expectedSkills)
				.set(auth);

			await expect(response.status).toBe(201);
		});
	});

	describe('UPDATE /api/skills/:id', () => {
		it('should return 400 (Bad Request) if fields are properly filled out', async () => {
			let response = await request(server)
				.put('/api/skills/1')
				.send()
				.set(auth);

			expect(response.status).toBe(400);
		});

		it('should return 404 (Not Found) if skill is not found', async () => {
			let response = await request(server)
				.put('/api/skills/50')
				.send({
					seekerSkill: 'Python'
				})
				.set(auth);

			expect(response.status).toBe(404);
		});

		it('should return updated skill object', async () => {
			let expectedSkill = {
				skills: {
					userId: 1,
					seekerSkills
				}
			};

			let response = await request(server)
				.post('/api/skills')
				.send(expectedSkill)
				.set(auth);

			await expect(response.status).toBe(201);

			expectedSkill = {
				seekerSkill: 'Python'
			};

			response = await request(server)
				.put('/api/skills/1')
				.send(expectedSkill)
				.set(auth);

			expectedSkill = updatedSkill;

			expect(response.body).toEqual(expectedSkill);
		});
	});

	describe('DELETE /api/skills/:id', () => {
		it('should return 404 (Not Found) status code if specified skill does not exist', async () => {
			response = await request(server)
				.delete('/api/skills/1')
				.set(auth);

			await expect(response.status).toBe(404);
		});

		it('should return 200 (OK) on successful deletion', async () => {
			let expectedSkill = {
				skills: {
					userId: 1,
					seekerSkills
				}
			};

			let response = await request(server)
				.post('/api/skills')
				.send(expectedSkill)
				.set(auth);

			await expect(response.status).toBe(201);

			response = await request(server)
				.delete('/api/skills/1')
				.set(auth);

			await expect(response.status).toBe(200);
		});
	});
});
