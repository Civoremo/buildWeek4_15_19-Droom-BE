const request = require('supertest');
const server = require('../server');
const db = require('../database/dbConfig');

describe('Company endpoint tests', () => {
    beforeEach(async() => {
        await db('users').truncate();
        await db('companies').truncate();
        await db('users').insert({
            email: 'email@gmail.com',
            password: 'password'
        });
    });

    const auth = {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJzZWVrZXIiOjAsImVtcGxveWVyIjoxLCJpYXQiOjE1NTU2NDQ3MjMsImV4cCI6MTU1NTczMTEyM30.T987Tz4dOsio_EXIt6th2_vq1yULBHQ0Jw8Zl0rJ4dE'
    };

    const companyProfile = {
        companyName: 'Apple',
        companyPicture: '',
        companyDescription: 'An About me for the company',
        country: 'United States of America',
        state: 'California',
        city: 'Cupertino',
        zipcode: 40000
    };

    describe('GET /api/companies/:id', () => {
        it('should return company by user id', async() => {
            const company = {
                userId: 1,
                company: companyProfile
            };
            let response = await request(server)
                .post('/api/companies')
                .send(company)
                .set(auth);

            await expect(response.status).toBe(201);

            const companyResponse = {
                id: 1,
                userId: 1,
                ...companyProfile
            };

            await expect(response.body).toEqual(companyResponse);
        });

        it('should return 404 (Not Found) status code if the provided user id does not exist', async() => {
            const response = await request(server)
                .get('/api/companies/4')
                .set(auth);

            await expect(response.status).toBe(404);
        });
    });

    describe('POST /api/companies', () => {
        it('should return status code of 400 (Bad Request) if there are any missing fields', async() => {
            const company = {
                userId: 1,
                companies: {
                    companyPicture: '',
                    companyDescription: 'An About me for the company',
                    country: 'United States of America',
                    state: 'California',
                    city: 'Cupertino',
                    zipcode: 4000
                }
            };

            const response = await request(server)
                .post('/api/companies')
                .send(company)
                .set(auth);

            expect(response.status).toBe(400);
        });

        it('should return status code of 201 (Created) after creating a company', async() => {
            const company = {
                userId: 1,
                company: companyProfile
            };

            const response = await request(server)
                .post('/api/companies')
                .send(company)
                .set(auth);

            expect(response.status).toBe(201);
        });

        it('should return the newly created company', async() => {
            const company = {
                userId: 1,
                company: companyProfile
            };

            const response = await request(server)
                .post('/api/companies')
                .send(company)
                .set(auth);

            const newCompany = {
                id: 1,
                userId: 1,
                ...companyProfile
            };

            expect(response.body).toEqual(newCompany);
        });
    });

    describe('PUT /api/companies/:id', () => {
        it('should return a 404 status if company not found', async() => {
            const company = companyProfile;
            const response = await request(server)
                .put('/api/companies/500')
                .send(company)
                .set(auth);

            expect(response.status).toBe(404);
        });
    });

    describe('DELETE /api/companies/:id', () => {
        it('should return a 200 (OK) status if company not found', async() => {
            const company = {
                userId: 1,
                companies: companyProfile
            };

            let response = await request(server)
                .put('/api/companies')
                .send(company)
                .set(auth);

            expect(response.status).toBe(201);

            response = await request(server)
                .delete('/api/companies/1')
                .set(auth);

            expect(response.status).toBe(200);
        });
    });
});