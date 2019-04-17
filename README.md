# Droom BACK-END

Back-end build week project for droom

### Deployed Backend

- https://droom-buildweek-4-15-19.herokuapp.com/

## Table of Contents

- [Test User Accounts](#test-user-accounts)
- [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
- [Auth Routes](#auth-routes)
- [Company Routes](#company-routes)
     - [Get Companies](##get-companies)
     - [Get Company](##get-company)
     - [Add Company](##add-company)
     - [Update Company](##update-company)
     - [Delete Company](##delete-company)
- [Job Routes](#job-routes)
     - [Get Jobs](##get-jobs)
     - [Get Job](##get-job)
     - [Add Job](##add-job)
     - [Update Job](##update-job)
     - [Delete Job](##delete-job)

# SUMMARY TABLE OF API ENDPOINTS

| Table | Method | Endpoint           | Description                                                                                                                                                                                    |
| ----- | ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auth  | POST   | /api/auth/register | Creates a new `user` profile using the information sent inside the `body` of the request and returns a message along with the new `user` and a JSON Web Token in the `body` of the response.   |
| auth  | POST   | /api/auth/login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the `user` profile and a JSON Web Token token in the `body` of the response. |

# AUTH ROUTES

## **REGISTER**

### **Registers a user**

_Method Url:_ `/api/auth/register`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description    |
| ---------- | ------ | -------- | -------------- |
| `email`    | String | Yes      | Must be unique |
| `password` | String | Yes      |                |

_example:_

```
{
  "email": "email@gmail.com"
  "password": "password123",
}
```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI3IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ0MzM1NjUxLCJleHAiOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xFXoX"
}
```

##### 400 (Bad Request)

> If you are missing a email or password for registration, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
    "message": "Submit both an email and password when registering"
}
```

##### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": "Sorry, but something went wrong while registering"
}
```

---

## **LOGIN**

### **Logs a user in**

_Method Url:_ `/api/auth/login`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description                                                        |
| ---------- | ------ | -------- | ------------------------------------------------------------------ |
| `email`    | String | Yes      | Must match a email in the database                                 |
| `password` | String | Yes      | Must match a password in the database corresponding to email above |

_example:_

```
{
    "email": "email@gmail.com"
    "password": "password123",
}
```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MDwiaWF0IjoxNTQ0MzM1NjUxLCJleHAuOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xGXnE",
}
```

##### 400 (Bad Request)

> If you are missing a email or password for login, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
    "message": "Submit both an email and password when registering"
}
```

##### 401 (Unauthorized)

> If you failt to login, the endpoint will return an HTTP response with a status code `401` which indicates the email and or password entered is not valid.

```
{
  message: "Sorry, incorrect email or password"
}
```

##### 500 (Bad Request)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": "Sorry, but something went wrong while logging in"
}
```

# SEEKER ROUTES

## **GET SEEKER**

### **Get seeker profile by user id**

_Method Url:_ `/api/seekers/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If the user profile is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
    "id": 1,
    "userId": 1,
    "firstName": "John",
    "lastName": "Dough",
    "profilePicture": "",
    "month": 2,
    "day": 4,
    "year": 1994,
    "country": "US",
    "state": "California",
    "city": "San Francisco",
    "zipcode": 93552
}
```

#### 404 (Not Found)

> If the provided `userId` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
    "message": "Sorry, but that profile doesn't exist"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    "message": "Sorry, but something went wrong while getting that profile"
}
```

## **ADD SEEKER**

### **Add a seeker**

_Method Url:_ `/api/seekers`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name             | type    | required | description                            |
| ---------------- | ------- | -------- | -------------------------------------- |
| `userId`         | Integer | Yes      | Must match a user's id in the database |
| `firstName`      | String  | Yes      | Cannot be an empty field               |
| `lastName`       | String  | Yes      | Cannot be an empty field               |
| `profilePicture` | String  | No       | Can be an empty field                  |
| `month`          | Integer | Yes      | Cannot be an empty field               |
| `day`            | Integer | Yes      | Cannot be an empty field               |
| `year`           | Integer | Yes      | Cannot be an empty field               |
| `country`        | String  | Yes      | Cannot be an empty field               |
| `state`          | String  | Yes      | Cannot be an empty field               |
| `city`           | String  | Yes      | Cannot be an empty field               |
| `zipcode`        | Integer | Yes      | Cannot be an empty field               |

_example:_

```
{
  "userId": 1,
  "seeker": {
    "firstName": "John",
    "lastName": "Dough",
    "profilePicture": "",
    "month":2,
    "day":4,
    "year": 1994,
    "country": "US",
    "state": "California",
    "city": "San Francisco",
    "zipcode": 93552
  }
}
```

#### Response

##### 201 (Created)

> If you successfully create a seeker profile, the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "id": 1,
    "userId": 6,
    "firstName": "John",
    "lastName": "Dough",
    "profilePicture": "",
    "month": 2,
    "day": 4,
    "year": 1994,
    "country": "US",
    "state": "California",
    "city": "San Francisco",
    "zipcode": 93552
}
```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

```
{
  "message": "Please provide a first name"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    "message": "Sorry, but something went wrong while creating that profile"
}
```

## **UPDATE SEEKER**

### **Update a seeker by user id**

_Method Url:_ `/api/seekers/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description             |
| ---- | ------- | -------- | ----------------------- |
| id   | Integer | Yes      | ID of a specific seeker |

#### Body

| name             | type    | required | description              |
| ---------------- | ------- | -------- | ------------------------ |
| `firstName`      | String  | Yes      | Cannot be an empty field |
| `lastName`       | String  | Yes      | Cannot be an empty field |
| `profilePicture` | String  | No       | Can be an empty field    |
| `month`          | Integer | Yes      | Cannot be an empty field |
| `day`            | Integer | Yes      | Cannot be an empty field |
| `year`           | Integer | Yes      | Cannot be an empty field |
| `country`        | String  | Yes      | Cannot be an empty field |
| `state`          | String  | Yes      | Cannot be an empty field |
| `city`           | String  | Yes      | Cannot be an empty field |
| `zipcode`        | Integer | Yes      | Cannot be an empty field |

_example:_

```
{
    "firstName": "John Updated",
    "lastName": "Dough",
    "profilePicture": "",
    "month":2,
    "day":4,
    "year": 1994,
    "country": "US",
    "state": "California",
    "city": "San Francisco",
    "zipcode": 93552
}
```

#### Response

##### 200 (OK)

> If a seeker with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "id": 1,
    "userId": 1,
    "firstName": "John Updated",
    "lastName": "Dough",
    "profilePicture": "",
    "month": 2,
    "day": 4,
    "year": 1994,
    "country": "US",
    "state": "California",
    "city": "San Francisco",
    "zipcode": 93552
}
```

#### 404 (Not Found)

> If the seeker profile for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": "Sorry, but that profile doesn't exist"
}
```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

```
{
   "message": "Please provide a first name"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    "message": "Sorry, but something went wrong while updating that profile"
}
```

## DELETE SEEKER

### **Delete a seeker by user id**

_Method Url:_ `/api/seekers/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description             |
| ---- | ------- | -------- | ----------------------- |
| id   | Integer | Yes      | ID of a specific seeker |

#### Response

##### 200 (OK)

> If a seeker with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "message": "Profile successfully deleted"
}
```

#### 404 (Not Found)

> If the seeker profile for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": "Sorry, but that profile doesn't exist"
}
```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": "Sorry, but something went wrong while deleting that profile"
}
```

# COMPANY ROUTES

## **GET COMPANIES**

### **Get all companies**

_Method Url:_ `/api/companies`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If companies are found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The companies were found in the database.",
  "companies": [
    {
        "id": 1,
        "companyName": "",
        "companyPicture": "",
        "companyDescription": "",
        "location": {
            "country": "",
            "state": "",
            "city": "",
            "zipcode": "",
        "jobs": []
    }
  ]
}
```

#### 404 (Not Found)

> If there are no companies in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "companies": [],
  "message": "The companies could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while retrieving the jobs.'
}
```

## **GET COMPANY**

### **Get a company by ID**

_Method Url:_ `/api/companies/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description              |
| ---- | ------- | -------- | ------------------------ |
| id   | Integer | Yes      | ID of a specific company |

#### Response

##### 200 (OK)

> If a company with the specified ID in the URL parameters is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The company was retrieved successfully.",
  "company": {
        "id": 1,
        "companyName": "",
        "companyPicture": "",
        "companyDescription": "",
        "location": {
            "country": "",
            "state": "",
            "city": "",
            "zipcode": "",
        "jobs": []
    }
}
```

#### 404 (Not Found)

> If the requested company does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "company": [],
  "message": "The company could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while retrieving the company.'
}
```

## **ADD COMPANY**

### **Add a Company**

_Method Url:_ `/api/companies`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name                 | type    | required | description                            |
| -------------------- | ------- | -------- | -------------------------------------- |
| `userId`             | Integer | Yes      | Must match a user's id in the database |
| `companyName`        | String  | Yes      | Cannot be an empty field               |
| `companyPicture`     | String  | Yes      | Can be an empty field                  |
| `companyDescription` | String  | Yes      | Cannot be an empty field               |
| `country`            | String  | Yes      | Cannot be an empty field               |
| `state`              | String  | Yes      | Cannot be an empty field               |
| `city`               | String  | Yes      | Cannot be an empty field               |
| `zipcode`            | Integer | Yes      | Cannot be an empty field               |

_example:_

```
{
  "userId": 1,
    "company": {
        "companyName": "Apple 2",
        "companyPicture": "",
        "companyDescription": "An About me for the company",
        "country": "United States of America",
        "state": "California",
        "city": "Cupertino",
        "zipcode": 4000
    }
}
```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "company": {
        "companyName": "Apple",
        "companyPicture": "url",
        "companyDescription": "An About me for the company",
        "location": {
            "country": "United States of America",
            "state": "California",
            "city": "Cupertino",
            "zipcode": "40000"
        }
    },
    "jobs": []
}
```

#### 400 (Bad Request)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
    message: 'Please submit a company with all of the required fields.'
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while adding the company.'
}
```

## **UPDATE COMPANY**

### **Update a Company by user ID**

_Method Url:_ `/api/companies/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description              |
| ---- | ------- | -------- | ------------------------ |
| id   | Integer | Yes      | ID of a specific company |

#### Body

| name                 | type    | required | description                            |
| -------------------- | ------- | -------- | -------------------------------------- |
| `userId`             | Integer | Yes      | Must match a user's id in the database |
| `companyName`        | String  | Yes      | Cannot be an empty field               |
| `companyPicture`     | String  | No       | Can be an empty field                  |
| `companyDescription` | String  | Yes      | Cannot be an empty field               |
| `country`            | String  | Yes      | Cannot be an empty field               |
| `state`              | String  | Yes      | Cannot be an empty field               |
| `city`               | String  | Yes      | Cannot be an empty field               |
| `zipcode`            | Integer | Yes      | Cannot be an empty field               |

_example:_

```
{
  "userId": 1,
  "companyName": "Apple Inc",
  "companyPicture": "url string (exclude for MVP)",
  "companyDescription": "An About me for the company",
  "country": "United States of America",
  "state": "California",
  "city": "Cupertino",
  "zipcode": "40000",
}
```

#### Response

##### 200 (OK)

> If a company with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "company": {
        "companyName": "Apple updated",
        "companyPicture": "url",
        "companyDescription": "An About me for the company",
        "location": {
            "country": "United States of America",
            "state": "California",
            "city": "Cupertino",
            "zipcode": "40000"
        }
    },
    "jobs": []
}
```

#### 406 (Not Acceptable)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `406` and a body as below.

```
{
    message: 'Please submit a company with all of the required fields.'
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while updating the company.'
}
```

## DELETE COMPANY

### **Update a Company by user ID**

_Method Url:_ `/api/companies/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description              |
| ---- | ------- | -------- | ------------------------ |
| id   | Integer | Yes      | ID of a specific company |

#### Response

##### 200 (OK)

> If a company with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "message": "The journal was deleted from the database."
}
```

#### 404 (Not Found)

> If no companies for the specified id can be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": 'The company could not be found.'
}
```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": "Sorry, but something went wrong while deleting the company."
}
```

# JOB ROUTES

## **GET JOBS**

### **Get all jobs**

_Method Url:_ `/api/jobs`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If jobs are found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The jobs were found in the database.",
  "jobs": [
    {
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
    },
    {
        "id": 2,
        "companyId": 1,
        "jobName": "Front-end Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
    },
    {
        "id": 4,
        "companyId": 1,
        "jobName": "Back-end Engineer 4",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
    }
  ]
}
```

#### 404 (Not Found)

> If there are no jobs in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "companies": [],
  "message": "The jobs could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while retrieving the jobs.'
}
```

## **GET JOB**

### **Get a job by ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description          |
| ---- | ------- | -------- | -------------------- |
| id   | Integer | Yes      | ID of a specific job |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The job was retrieved successfully.",
  "job": {
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy",
        "jobSkills": []
    }
  }
}
```

#### 404 (Not Found)

> If the requested job does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "job": [],
  "message": "The job could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while retrieving the job.'
}
```

## **ADD JOB**

### **Add a job**

_Method Url:_ `/api/jobs`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name                     | type    | required | description                               |
| ------------------------ | ------- | -------- | ----------------------------------------- |
| `companyId`              | Integer | Yes      | Must match a company's id in the database |
| `jobName`                | String  | Yes      | Cannot be an empty field                  |
| `jobDescription`         | String  | Yes      | Cannot be an empty field                  |
| `jobExperienceRequired`  | String  | Yes      | Cannot be an empty field                  |
| `jobExperiencePreferred` | String  | Yes      | Cannot be an empty field                  |
| `jobApplyBy`             | String  | Yes      | Cannot be an empty field                  |

_example:_

```
{
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
}
```

#### Response

##### 201 (Created)

> If you successfully register a job the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "job": {
        "jobName": "Apple",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy",
    },
    "jobSkills": []
}
```

#### 400 (Bad Request)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
    message: 'Please submit a job with all of the required fields.'
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while adding the job.'
}
```

## **UPDATE JOB**

### **Update a Job by company ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description          |
| ---- | ------- | -------- | -------------------- |
| id   | Integer | Yes      | ID of a specific job |

#### Body

| name                     | type    | required | description                            |
| ------------------------ | ------- | -------- | -------------------------------------- |
| `companyId`              | Integer | Yes      | Must match a user's id in the database |
| `jobName`                | String  | Yes      | Cannot be an empty field               |
| `jobDescription`         | String  | Yes      | Cannot be an empty field               |
| `jobExperienceRequired`  | String  | Yes      | Cannot be an empty field               |
| `jobExperiencePreferred` | String  | Yes      | Cannot be an empty field               |
| `jobApplyBy`             | String  | Yes      | Cannot be an empty field               |

_example:_

```
{
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
}
```

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "job": {
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
    },
    "jobSkills": []
}
```

#### 406 (Not Acceptable)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `406` and a body as below.

```
{
    message: 'Please submit a job with all of the required fields.'
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while updating the job.'
}
```

## DELETE JOB

### **Delete a Job by company ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description              |
| ---- | ------- | -------- | ------------------------ |
| id   | Integer | Yes      | ID of a specific company |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "message": "The job was deleted from the database."
}
```

#### 404 (Not Found)

> If no companies for the specified id can be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": 'The job could not be found.'
}
```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": "Sorry, but something went wrong while deleting the job."
}
```

# JOB SKILLS ROUTES

## **GET JOB SKILLS**

### **Get all job skills**

_Method Url:_ `/api/jobs`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If jobs are found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The jobs were found in the database.",
  "jobs": [
    {
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
    },
    {
        "id": 2,
        "companyId": 1,
        "jobName": "Front-end Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
    },
    {
        "id": 4,
        "companyId": 1,
        "jobName": "Back-end Engineer 4",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
    }
  ]
}
```

#### 404 (Not Found)

> If there are no jobs in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "companies": [],
  "message": "The jobs could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while retrieving the jobs.'
}
```

## **GET JOB**

### **Get a job by ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description          |
| ---- | ------- | -------- | -------------------- |
| id   | Integer | Yes      | ID of a specific job |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The job was retrieved successfully.",
  "job": {
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy",
        "jobSkills": []
    }
  }
}
```

#### 404 (Not Found)

> If the requested job does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "job": [],
  "message": "The job could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while retrieving the job.'
}
```

## **ADD JOB**

### **Add a job**

_Method Url:_ `/api/jobs`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name                     | type    | required | description                               |
| ------------------------ | ------- | -------- | ----------------------------------------- |
| `companyId`              | Integer | Yes      | Must match a company's id in the database |
| `jobName`                | String  | Yes      | Cannot be an empty field                  |
| `jobDescription`         | String  | Yes      | Cannot be an empty field                  |
| `jobExperienceRequired`  | String  | Yes      | Cannot be an empty field                  |
| `jobExperiencePreferred` | String  | Yes      | Cannot be an empty field                  |
| `jobApplyBy`             | String  | Yes      | Cannot be an empty field                  |

_example:_

```
{
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
}
```

#### Response

##### 201 (Created)

> If you successfully register a job the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "job": {
        "jobName": "Apple",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy",
    },
    "jobSkills": []
}
```

#### 400 (Bad Request)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
    message: 'Please submit a job with all of the required fields.'
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while adding the job.'
}
```

## **UPDATE JOB**

### **Update a Job by company ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description          |
| ---- | ------- | -------- | -------------------- |
| id   | Integer | Yes      | ID of a specific job |

#### Body

| name                     | type    | required | description                            |
| ------------------------ | ------- | -------- | -------------------------------------- |
| `companyId`              | Integer | Yes      | Must match a user's id in the database |
| `jobName`                | String  | Yes      | Cannot be an empty field               |
| `jobDescription`         | String  | Yes      | Cannot be an empty field               |
| `jobExperienceRequired`  | String  | Yes      | Cannot be an empty field               |
| `jobExperiencePreferred` | String  | Yes      | Cannot be an empty field               |
| `jobApplyBy`             | String  | Yes      | Cannot be an empty field               |

_example:_

```
{
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
}
```

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "job": {
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
    },
    "jobSkills": []
}
```

#### 406 (Not Acceptable)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `406` and a body as below.

```
{
    message: 'Please submit a job with all of the required fields.'
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
    message: 'Sorry, but something went wrong while updating the job.'
}
```

## DELETE JOB

### **Delete a Job by company ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description              |
| ---- | ------- | -------- | ------------------------ |
| id   | Integer | Yes      | ID of a specific company |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "message": "The job was deleted from the database."
}
```

#### 404 (Not Found)

> If no companies for the specified id can be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": 'The job could not be found.'
}
```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": "Sorry, but something went wrong while deleting the job."
}
```
