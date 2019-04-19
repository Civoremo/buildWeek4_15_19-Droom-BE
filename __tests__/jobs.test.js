const request = require('supertest');
const server = require('../server');
const db = require('../database/dbConfig');

describe('Jobs endpoint tests', () => {
    beforeEach(async() => {
        await db('users').truncate();
        await db('seekers').truncate();
        await db('experience').truncate();
        await db('users').insert({
            email: 'email@gmail.com',
            password: 'password'
        });

        await db('companies').insert({
            userId: 1,
            companyName: 'Apple',
            companyPicture: '',
            companyDescription: 'An About me for the company',
            country: 'United States of America',
            state: 'California',
            city: 'Cupertino',
            zipcode: 40000
        });
    });

    const auth = {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJzZWVrZXIiOjAsImVtcGxveWVyIjoxLCJpYXQiOjE1NTU2NDQ3MjMsImV4cCI6MTU1NTczMTEyM30.T987Tz4dOsio_EXIt6th2_vq1yULBHQ0Jw8Zl0rJ4dE'
    };

    const job = [{
        jobName: 'Back-end Engineer 11',
        jobDescription: 'An About me for the job',
        jobExperienceRequired: 'jobExperienceRequired',
        jobExperiencePreferred: 'jobExperiencePreferred',
        jobApplyBy: 'jobApplyBy',
        jobSkills: ['React', 'Express']
    }];

    describe('GET /api/jobs/:id', () => {
        it('should return status code 404 (Not Found) if job does not exist based off of job id', async() => {
            const response = await request(server)
                .get('/api/jobs/200')
                .set(auth);

            await expect(response.status).toEqual(404);
        });
    });

    describe('POST /api/jobs/:id', () => {
        it('should return 404 (Not Found) status code if user id passed in the body does not have a profile', async() => {
            let expectedJob = {
                job
            };

            let response = await request(server)
                .post('/api/jobs')
                .send(expectedJob)
                .set(auth);

            await expect(response.status).toBe(404);
        });
    });
});