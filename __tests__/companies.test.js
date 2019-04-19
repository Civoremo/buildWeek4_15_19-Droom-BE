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
        userId: 1,
        companies: {
            companyName: 'Apple',
            companyPicture: '',
            companyDescription: 'An About me for the company',
            country: 'United States of America',
            state: 'California',
            city: 'Cupertino',
            zipcode: 40000
        }
    };

    describe('GET /api/companies/:id', () => {
        it('should return company by user id', async() => {
            let response = await request(server)
                .post('/api/companies')
                .send(companyProfile);
            console.log(response);
            expect(response.status).toBe(201);
        });
    });
});