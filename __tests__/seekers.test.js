const request = require('supertest');
const server = require('../server');
const db = require('../database/dbConfig');

// const auth = ['Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMiwiaWF0IjoxNTU1NjE2OTUxLCJleHAiOjE1NTU3MDMzNTF9.T6KAX9pLI9o7LgWsPwJKD - qBTlDzdys17RHNXVQIp98']

describe('Job seeker endpoint tests', () => {
    beforeEach(async() => {
        await db('users').truncate();
        await db('seekers').truncate();
        await db('users').truncate();
        await db('users').insert({
            email: 'email@gmail.com',
            password: 'password'
        });
    });

    afterAll(async() => {
        await db('users').truncate();
        await db('seekers').truncate();
        await db('users').truncate();
    });

    it('should run in a test environment', () => {
        expect(process.env.DB_ENV).toEqual('testing');
    });

    describe('GET /api/seekers/:id', () => {
        it('should return job seeker profile', async() => {
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

            let response = await request(server).set(auth)
                .post('/api/seekers')
                .send(seeker).set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMiwiaWF0IjoxNTU1NjE2OTUxLCJleHAiOjE1NTU3MDMzNTF9.T6KAX9pLI9o7LgWsPwJKD-qBTlDzdys17RHNXVQIp98');

            expect(response.status).toBe(201);

            // response = await request(server)
            //     .get('/api/seekers/1')
            //     .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMiwiaWF0IjoxNTU1NjE2OTUxLCJleHAiOjE1NTU3MDMzNTF9.T6KAX9pLI9o7LgWsPwJKD-qBTlDzdys17RHNXVQIp98');

            // const seekerResponse = {
            //     id: 1,
            //     userId: 1,
            //     firstName: 'John',
            //     lastName: 'Dough',
            //     profilePicture: '',
            //     month: 2,
            //     day: 4,
            //     year: 1994,
            //     country: 'US',
            //     state: 'California',
            //     city: 'San Francisco',
            //     zipcode: 93552
            // };

            // expect(response.body).toEqual(seekerResponse);
        });

        it('should return 404 (Not Found) status code if the provided user id does not exist', async() => {
            const response = await request(server).get(
                '/api/seekers/1'
            ).set(auth);

            expect(response.status).toBe(404);
        });
    });

    describe('POST /api/seekers', () => {
        it('should return status code of 400 (Bad Request) if there are any missing fields', async() => {
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
                .send(seeker).set(auth);

            expect(response.status).toBe(400);
        });

        it('should return status code of 201 (Created) after creating job seeker profile', async() => {
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

        it('should return the newly created job seeker profile', async() => {
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
        it('should return status code of 400 (Bad Request) if there are any missing fields', async() => {
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

        it('should return status code of 201 (Created) after creating job seeker profile', async() => {
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

        it('should return the newly created job seeker profile', async() => {
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
});