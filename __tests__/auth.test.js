const request = require('supertest');
const server = require('../server');
const db = require('../database/dbConfig');

describe('Authentication endpoint tests', () => {
	beforeEach(async () => {
		await db('users').truncate();
	});

	describe('POST /register', () => {
		it('should return status code of 400 (Bad Request) if there are any missing fields', async () => {
			const user = {
				password: 'password'
			};

			const response = await request(server)
				.post('/api/auth/register')
				.send(user);

			expect(response.status).toBe(400);
		});

		it('should return status code of 200 (OK) after registering user', async () => {
			const user = {
				email: 'john@gmail.com',
				password: 'password'
			};

			const response = await request(server)
				.post('/api/auth/register')
				.send(user);

			expect(response.status).toBe(201);
		});

		it('should return a token after a user is successfully registered', async () => {
			const user = {
				email: 'john@gmail.com',
				password: 'password'
			};

			const response = await request(server)
				.post('/api/auth/register')
				.send(user);

			expect(response.body.token).toBe(response.body.token);
		});
	});

	describe('POST /login', () => {
		it('should return status code of 400 (Bad Request) if there are any missing fields', async () => {
			const user = {
				password: 'password'
			};

			const response = await request(server)
				.post('/api/auth/login')
				.send(user);

			expect(response.status).toBe(400);
		});

		it('should return status code of 200 (OK) after logging in a user', async () => {
			const user = {
				email: 'john@gmail.com',
				password: 'password'
			};

			let response = await request(server)
				.post('/api/auth/register')
				.send(user);

			expect(response.status).toBe(201);

			response = await request(server)
				.post('/api/auth/login')
				.send(user);

			expect(response.status).toBe(200);
		});

		it('should return a token after a user is successfully logged in', async () => {
			const user = {
				email: 'john@gmail.com',
				password: 'password'
			};

			const response = await request(server)
				.post('/api/auth/login')
				.send(user);

			expect(response.body.token).toBe(response.body.token);
		});
	});
});
