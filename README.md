# **DROOM API**

Back-end build week project for droom

# **Maintainers**

[@Fractured2K](https://github.com/fractured2k)
[@AAsriyan](https://github.com/AAsriyan)

# **Deployed Backend**

- https://droom-buildweek-4-15-19.herokuapp.com/

# **Technologies**

#### Production

- [Express](https://www.npmjs.com/package/express): `Fast, unopinionated, minimalist web framework for Node.js`
- [Body parser](https://www.npmjs.com/package/body-parser): `Parse incoming request bodies in a middleware before your handlers`
- [Bcryptjs](https://www.npmjs.com/package/body-parser): `Allows you to store passwords securely in your database`
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): `Generate and verify json web tokens to maintain a stateless api`
- [Knex](https://www.npmjs.com/package/knex): `Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use`
- [Knex-cleaner](https://www.npmjs.com/package/knex-cleaner): `Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex`
- [Pg](https://www.npmjs.com/package/pg): `Non-blocking PostgreSQL client for Node.js.`
- [Sqlite3](https://www.npmjs.com/package/sqlite3): `Asynchronous, non-blocking SQLite3 bindings for Node.js.`
- [Sentry](https://www.npmjs.com/package/@sentry/node): `Open-source error tracking that helps developers monitor and fix crashes in real time. Iterate continuously. Boost workflow efficiency. Improve user experience.`
- [Morgan](https://www.npmjs.com/package/morgan): `HTTP request logger middleware for Node.js`
- [Cors](https://www.npmjs.com/package/cors): `CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS`
- [Helmet](https://www.npmjs.com/package/helmet): `Helmet helps you secure your Express apps by setting various HTTP headers`
- [Dotenv](https://www.npmjs.com/package/dotenv): `Dotenv is a zero-dependency module that loads environment variables from a .env file`

#### Developer

- [Nodemon](https://www.npmjs.com/package/nodemon): `nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected`

# **Setup**

(# <--- signifies comment)

In your terminal run:

```
# Install dependencies
npm install

# Starts express server using nodemon
npm run server
```

# **Table of Contents**

- [Test User Accounts](#test-user-accounts)
- [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
- [Auth Routes](#auth-routes)
     - [Login User](#login)
     - [Register User](#register)
- [Seeker Routes](#seeker-routes)
     - [Get Seeker](#get-seeker)
     - [Add Seeker](#add-seeker)
     - [Update Seeker](#update-seeker)
     - [Delete Seeker](#delete-seeker)
- [Education Routes](#education-routes)
     - [Get Education](#get-education)
     - [Add Education](#add-education)
     - [Update Education](#update-education)
     - [Delete Education](#delete-education)
- [Experience Routes](#experience-routes)
     - [Get Experience](#get-experience)
     - [Add Experience](#add-experience)
     - [Update Experience](#update-experience)
     - [Delete Experience](#delete-experience)
- [Skills Routes](#skills-routes)
     - [Get Skills](#get-skills)
     - [Add Skills](#add-skills)
     - [Update Skills](#update-skill)
     - [Delete Skills](#delete-skill)
- [Company Routes](#company-routes)
     - [Get Companies](#get-companies)
     - [Get Company](#get-company)
     - [Add Company](#add-company)
     - [Update Company](#update-company)
     - [Delete Company](#delete-company)
- [Job Routes](#job-routes)
     - [Get Jobs](#get-jobs)
     - [Get Job](#get-job)
     - [Add Job](#add-job)
     - [Update Job](#update-job)
     - [Delete Job](#delete-job)
- [Job Skills Routes](#job-skills-routes)
     - [Get Job Skills](#get-job-skills)
     - [Get Job Skill](#get-job-skill)
     - [Add Job Skill](#add-job-skill)
     - [Update Job Skill](#update-job-skill)
     - [Delete Job Skill](#update-job-skill)
- [Match Routes](#match-routes)
     - [Get Matches](#get-matches)
       - [Get Company Matches For Seeker](##get-matches-for-seeker)
       - [Get Seeker Matches For Company](##get-matches-for-company-for-all-jobs)
     - [Get Matched](#get-matched)
     - [Add Match](#add-match)

# **Test User Accounts**

## Job Seeker Accounts

#### Github

```
email: sam@gmail.com
password: password
```

#### John Dough

```
email: john@gmail.com
password: password
```

#### Sally Jones

```
  email: sally@gmail.com
  password: password
```

## Company Accounts

#### Microsoft

```
  email: microsoft@microsoft.com
  password: password
```

#### Apple

```
email: apple@apple.com
password: password
```

#### Github

```
email: github@github.com
password: password
```

#### Nexient

```
email: nexient@nexient.com
password: password
```

#### Netflix

```
email: netflix@netflix.com
password: password
```

#### Twitter

```
email: twitter@twitter.com
password: password
```

#### Spotify

```
email: spotify@spotify.com
password: password
```

#### Facebook

```
email: facebook@facebook.com
password: password
```

#### Reddit

```
email: reddit@reddit.com
password: password
```

#### Google

```
email: google@gmail.com
password: password
```

# **SUMMARY TABLE OF API ENDPOINTS**

| Table | Method | Endpoint           | Description                                                                                                                                                                                    |
| ----- | ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users | POST   | /api/auth/register | Creates a new `user` profile using the information sent inside the `body` of the request and returns a message along with the new `user` and a JSON Web Token in the `body` of the response.   |
| users | POST   | /api/auth/login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the `user` profile and a JSON Web Token token in the `body` of the response. |

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

_example:_

```

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI3IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ0MzM1NjUxLCJleHAiOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xFXoX"
}

```

##### 400 (Bad Request)

> If you are missing a email or password for registration, the endpoint will return an HTTP response with a status code `400` and a body as below.

_example:_

```

{
  "message": "Submit both an email and password when registering"
}

```

##### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

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

_example:_

```

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MDwiaWF0IjoxNTQ0MzM1NjUxLCJleHAuOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xGXnE",
}

```

##### 400 (Bad Request)

> If you are missing a email or password for login, the endpoint will return an HTTP response with a status code `400` and a body as below.

_example:_

```

{
  "message": "Submit both an email and password when registering"
}

```

##### 401 (Unauthorized)

> If you failt to login, the endpoint will return an HTTP response with a status code `401` which indicates the email and or password entered is not valid.

_example:_

```

{
  message: "Sorry, incorrect email or password"
}

```

##### 500 (Bad Request)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

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

_example:_

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

_example:_

```

{
  "message": "Sorry, but that profile doesn't exist"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

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

_example:_

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

_example:_

```

{
  "message": "Please provide a first name"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

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

_example:_

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

_example:_

```

{
  "message": "Sorry, but that profile doesn't exist"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a first name"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while updating that profile"
}

```

## **DELETE SEEKER**

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

_example:_

```

{
  "message": "Profile successfully deleted"
}

```

#### 404 (Not Found)

> If the seeker profile for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that profile doesn't exist"
}

```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while deleting that profile"
}

```

# EDUCATION ROUTES

## **GET EDUCATION**

### **Get education by user id**

_Method Url:_ `/api/education/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If seeker education is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

_example:_

```

[
  {
    "id": 1,
    "seekerId": 1,
    "eduSchool": "San Francisco State University",
    "eduCredential": "Bachelor of Science in Electrical Engineering",
    "eduDescription": "Electrical Engineering is a profession that makes creative use of mathematics and science to solve practical problems in electricity, electronics and related areas. The goal of the Electrical Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
    "eduStart": "1-1-2014",
    "eduEnd": "1-1-2018"
  },
  {
    "id": 2,
    "seekerId": 1,
    "eduSchool": "San Francisco State University",
    "eduCredential": "Bachelor of Science in Computer Engineering",
    "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
    "eduStart": "1-1-2019",
    "eduEnd": "1-1-2023"
  }
]

```

#### 404 (Not Found)

> A `404` (Not Found) response has `two` possible outcomes one if the `user` profile doesn't have any education or if the provided `user` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that profile doesn't have any education"
}

```

or

```

{
  "message": "Sorry, but that user doesn't have a profile"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while trying to get education"
}

```

## **ADD EDUCATION**

### **Add education for a seeker profile by user id**

_Method Url:_ `/api/education`

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
| `eduSchool`      | String  | Yes      | Cannot be an empty field               |
| `eduCredential`  | String  | Yes      | Cannot be an empty field               |
| `eduDescription` | String  | Yes      | Cannot be an empty field               |
| `eduStart`       | String  | Yes      | Cannot be an empty field               |
| `eduEnd`         | String  | Yes      | Cannot be an empty field               |

_example:_

```

{
  "userId": 1,
  "seekerEducation": [
    {
      "eduSchool":"San Francisco State University",
      "eduCredential": "Bachelor of Science in Computer Engineering",
      "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
      "eduStart":"1-1-2019",
      "eduEnd": "1-1-2023"
    },
    {
      "eduSchool":"San Francisco State University",
      "eduCredential": "Bachelor of Science in Electrical Engineering",
      "eduDescription": "Electrical Engineering is a profession that makes creative use of mathematics and science to solve practical problems in electricity, electronics and related areas. The goal of the Electrical Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
      "eduStart":"1-1-2014",
      "eduEnd": "1-1-2018"
    }
  ]
}

```

#### Response

##### 201 (Created)

> If you successfully create seeker education, the endpoint will return an HTTP response with a status code `201` and a body as below.

_example:_

```

[
  {
    "id": 1,
    "seekerId": 1,
    "eduSchool": "San Francisco State University",
    "eduCredential": "Bachelor of Science in Computer Engineering",
    "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
    "eduStart": "1-1-2019",
    "eduEnd": "1-1-2023"
  },
  {
    "id": 2,
    "seekerId": 1,
    "eduSchool": "San Francisco State University",
    "eduCredential": "Bachelor of Science in Electrical Engineering",
    "eduDescription": "Electrical Engineering is a profession that makes creative use of mathematics and science to solve practical problems in electricity, electronics and related areas. The goal of the Electrical Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
    "eduStart": "1-1-2014",
    "eduEnd": "1-1-2018"
  }
]

```

#### 404 (Not Found)

> If the seeker profile for the specified `userId` can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that user doesn't have a profile"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a school"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while trying to add education"
}

```

## **UPDATE EDUCATION**

### **Update individual education objects using education id**

_Method Url:_ `/api/education/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                       |
| ---- | ------- | -------- | --------------------------------- |
| id   | Integer | Yes      | ID of a specific education object |

#### Body

| name             | type   | required | description              |
| ---------------- | ------ | -------- | ------------------------ |
| `eduSchool`      | String | Yes      | Cannot be an empty field |
| `eduCredential`  | String | Yes      | Cannot be an empty field |
| `eduDescription` | String | Yes      | Cannot be an empty field |
| `eduStart`       | String | Yes      | Cannot be an empty field |
| `eduEnd`         | String | Yes      | Cannot be an empty field |

_example:_

```

{
  "eduSchool": "San Francisco State University Updated",
  "eduCredential": "Bachelor of Science in Computer Engineering",
  "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
  "eduStart": "1-1-2019",
  "eduEnd": "1-1-2023"
}

```

#### Response

##### 200 (OK)

> If the education object with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "id": 53,
  "seekerId": 23,
  "eduSchool": "San Francisco State Universit y",
  "eduCredential": "Bachelor of Science in Computer Engineering",
  "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
  "eduStart": "1-1-2019",
  "eduEnd": "1-1-2023"
}

```

#### 404 (Not Found)

> If the education object for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that education doesn't exist"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a school"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while updating education"
}

```

## **DELETE EDUCATION**

### **Delete education by education id**

_Method Url:_ `/api/education/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description            |
| ---- | ------- | -------- | ---------------------- |
| id   | Integer | Yes      | ID of education object |

#### Response

##### 200 (OK)

> If the education object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "message": "Education successfully deleted"
}

```

#### 404 (Not Found)

> If the education object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that education doesn't exist"
}

```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while deleting education"
}

```

# EXPERIENCE ROUTES

## **GET EXPERIENCE**

### **Get experience by user id**

_Method Url:_ `/api/experience/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If seeker experience is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

_example:_

```

[
  {
    "id": 1,
    "seekerId": 1,
    "jobTitle": "Front-end Developer",
    "jobCompany": "Facebook",
    "jobDescription": "Built out facebook market place with react",
    "jobStart": "1-25-2018",
    "jobEnd": "9-2-2019"
  },
  {
    "id": 2,
    "seekerId": 1,
    "jobTitle": "Back-end Developer",
    "jobCompany": "Nexient",
    "jobDescription": "Created apis and servers with golang",
    "jobStart": "10-31-2019",
    "jobEnd": "6-31-2020"
  }
]

```

#### 404 (Not Found)

> A `404` (Not Found) response has `two` possible outcomes one if the `user` profile doesn't have any education or if the provided `user` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that profile doesn't have any experience"
}

```

or

```

{
  "message": "Sorry, but that user doesn't have a profile"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while trying to get experience"
}

```

## **ADD EXPERIENCE**

### **Add experience by user id**

_Method Url:_ `/api/experience`

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
| `jobTitle`       | String  | Yes      | Cannot be an empty field               |
| `jobCompany`     | String  | Yes      | Cannot be an empty field               |
| `jobDescription` | String  | Yes      | Cannot be an empty field               |
| `jobStart`       | String  | Yes      | Cannot be an empty field               |
| `jobEnd`         | String  | Yes      | Cannot be an empty field               |

_example:_

```

{
  "userId":1,
  "seekerExperience": [
    {
      "jobTitle":"Back-end Developer",
      "jobCompany": "Nexient",
      "jobDescription": "Created apis and servers with golang",
      "jobStart": "10-31-2019",
      "jobEnd": "6-31-2020"
    },
    {
      "jobTitle":"Front-end Developer",
      "jobCompany": "Facebook",
      "jobDescription": "Built out facebook market place with react",
      "jobStart": "1-25-2018",
      "jobEnd": "9-2-2019"
    }
  ]
}

```

#### Response

##### 201 (Created)

> If you successfully create seeker experience, the endpoint will return an HTTP response with a status code `201` and a body as below.

_example:_

```

[
  {
    "id": 1,
    "seekerId": 1,
    "jobTitle": "Back-end Developer",
    "jobCompany": "Nexient",
    "jobDescription": "Created apis and servers with golang",
    "jobStart": "10-31-2019",
    "jobEnd": "6-31-2020"
  },
  {
    "id": 2,
    "seekerId": 1,
    "jobTitle": "Front-end Developer",
    "jobCompany": "Facebook",
    "jobDescription": "Built out facebook market place with react",
    "jobStart": "1-25-2018",
    "jobEnd": "9-2-2019"
  }
]

```

#### 404 (Not Found)

> If the seeker profile for the specified `userId` can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that user doesn't have a profile"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a job title"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while updating experience"
}

```

## **UPDATE EXPERIENCE**

### **Update individual experience objects using experience id**

_Method Url:_ `/api/experience/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                       |
| ---- | ------- | -------- | --------------------------------- |
| id   | Integer | Yes      | ID of a specific education object |

#### Body

| name             | type   | required | description              |
| ---------------- | ------ | -------- | ------------------------ |
| `jobTitle`       | String | Yes      | Cannot be an empty field |
| `jobCompany`     | String | Yes      | Cannot be an empty field |
| `jobDescription` | String | Yes      | Cannot be an empty field |
| `jobStart`       | String | Yes      | Cannot be an empty field |
| `jobEnd`         | String | Yes      | Cannot be an empty field |

_example:_

```

{
  "jobTitle":"Front-end Developer Updated",
  "jobCompany": "Facebook",
  "jobDescription": "Built out facebook market place with react",
  "jobStart": "1-25-2018",
  "jobEnd": "9-2-2019"
}

```

#### Response

##### 200 (OK)

> If the experience object with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "id": 21,
  "seekerId": 23,
  "jobTitle": "Front-end Developer Updated",
  "jobCompany": "Facebook",
  "jobDescription": "Built out facebook market place with react",
  "jobStart": "1-25-2018",
  "jobEnd": "9-2-2019"
}

```

#### 404 (Not Found)

> If the education object for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that experience doesn't exist"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a job title"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while updating experience"
}

```

## **DELETE EXPERIENCE**

### **Delete experience by experience id**

_Method Url:_ `/api/experience/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description             |
| ---- | ------- | -------- | ----------------------- |
| id   | Integer | Yes      | ID of experience object |

#### Response

##### 200 (OK)

> If the experience object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "message": "Education successfully deleted"
}

```

#### 404 (Not Found)

> If the experience object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that experience doesn't exist"
}

```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while deleting experience"
}

```

# SKILLS ROUTES

## **GET SKILLS**

### **Get skills by user id**

_Method Url:_ `/api/skills/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If seeker skills are found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

_example:_

```

[
  {
    "id": 1,
    "seekerId": 1,
    "seekerSkill": "Express"
  },
  {
    "id": 2,
    "seekerId": 1,
    "seekerSkill": "Node"
  },
  {
    "id": 3,
    "seekerId": 1,
    "seekerSkill": "React"
  }
]

```

#### 404 (Not Found)

> A `404` (Not Found) response has `two` possible outcomes one if the `user` profile doesn't have any education or if the provided `user` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that profile doesn't have any skills"
}

```

or

```

{
  "message": "Sorry, but that user doesn't have a profile"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while trying to get skills"
}

```

## **ADD SKILLS**

### **Add skills by user id**

_Method Url:_ `/api/skills`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name           | type    | required | description                                 |
| -------------- | ------- | -------- | ------------------------------------------- |
| `userId`       | Integer | Yes      | Must match a user's id in the database      |
| `jobTitle`     | String  | Yes      | Cannot be an empty field                    |
| `seekerSkills` | String  | Yes      | (Array of strings) Cannot be an empty field |

_example:_

```

{
  "skills": {
    "userId": 2,
    "seekerSkills": ["Express", "Node", "React"]
  }
}

```

#### Response

##### 201 (Created)

> If you successfully create seeker skills, the endpoint will return an HTTP response with a status code `201` and a body as below.

_example:_

```

[
  {
    "id": 1,
    "seekerId": 1,
    "seekerSkill": "Express"
  },
  {
    "id": 2,
    "seekerId": 1,
    "seekerSkill": "Node"
  },
  {
    "id": 3,
    "seekerId": 1,
    "seekerSkill": "React"
  }
]

```

#### 404 (Not Found)

> If the seeker profile for the specified `userId` can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that user doesn't have a profile"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide some skills"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while trying to get skills"
}

```

## **UPDATE SKILL**

### **Update skill by skill id**

_Method Url:_ `/api/skills/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                   |
| ---- | ------- | -------- | ----------------------------- |
| id   | Integer | Yes      | ID of a specific skill object |

#### Body

| name          | type   | required | description              |
| ------------- | ------ | -------- | ------------------------ |
| `seekerSkill` | String | Yes      | Cannot be an empty field |

_example:_

```

{
  "seekerSkill": "Python"
}

```

#### Response

##### 200 (OK)

> If the skill object with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "id": 1,
  "seekerId": 1,
  "seekerSkill": "Python"
}

```

#### 404 (Not Found)

> If the education object for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that skill doesn't exist"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a skill"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while updating skill"
}

```

## **DELETE SKILL**

### **Delete skill by skill id**

_Method Url:_ `/api/skill/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description        |
| ---- | ------- | -------- | ------------------ |
| id   | Integer | Yes      | ID of skill object |

#### Response

##### 200 (OK)

> If the skill object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "message": "Skill successfully deleted"
}

```

#### 404 (Not Found)

> If the skill object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that skill doesn't exist"
}

```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while deleting that skill"
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

> If companies are found in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```

{
  "message": "The companies were found in the database.",
  "companies": [
    {
      "id": 1,
      "userId": 1,
      "companyName": "Apple",
      "companyPicture": "",
      "companyDescription": "An About me for the company",
      "country": "South Korea",
      "state": "NA",
      "city": "Seoul",
      "zipcode": 4000
    },
    {
      "id": 2,
      "userId": 2,
      "companyName": "Apple 2",
      "companyPicture": "",
      "companyDescription": "An About me for the company",
      "country": "South Korea",
      "state": "NA",
      "city": "Seoul",
      "zipcode": 4000
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
  message: 'Sorry, but something went wrong while retrieving the list of companies'
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

> If a company with the specified ID in the URL parameters is found in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```

{
  "message": "The company was retrieved successfully.",
  "company": {
    "id": 1,
    "userId": 1,
    "companyName": "Apple 2",
    "companyPicture": "",
    "companyDescription": "An About me for the company",
    "country": "South Korea",
    "state": "NA",
    "city": "Seoul",
    "zipcode": 4000,
    "jobs": [
      {
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy",
        "jobSkills": [
            {
              "id": 1,
              "jobId": 1,
              "jobSkill": "Reactjs"
            },
            {
              "id": 3,
              "jobId": 1,
              "jobSkill": "Expressjs updated"
            }
          ]
        },
        {
        "id": 2,
        "companyId": 1,
        "jobName": "Front-end Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy",
        "jobSkills": []
      }
    ]
  }
}

```

#### 404 (Not Found)

> If the requested company does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```

{
  "companies": [],
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
  "companies": {
    "companyName": "Apple",
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
  "companies": {
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
  "companyPicture": "url string",
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
  "id": 1,
  "userId": 1,
  "companyName": "Apple Inc",
  "companyPicture": "",
  "companyDescription": "An About me for the company",
  "country": "South Korea",
  "state": "NA",
  "city": "Seoul",
  "zipcode": 4000
}

```

#### 406 (Not Acceptable)

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
  message: 'Sorry, but something went wrong while updating the company.'
}

```

## **DELETE COMPANY**

### **Delete a Company by user ID**

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
  "message": "The company has been successfully deleted."
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

> If jobs are found in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

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
  "jobs": [],
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
"userId": 1,
"job": {
  "jobName": "Back-end Engineer 11",
  "jobDescription": "An About me for the job",
  "jobExperienceRequired": "jobExperienceRequired",
  "jobExperiencePreferred": "jobExperiencePreferred",
  "jobApplyBy": "jobApplyBy"
},
"jobSkills": ["Skill4", "Skill5"]
}

```

#### Response

##### 201 (Created)

> If you successfully register a job the endpoint will return an HTTP response with a status code `201` and a body as below.

```

{
  "message": "Back-end Engineer 11 has successfully been added.",
  "newJob": {
    "companyId": 10,
    "jobName": "Back-end Engineer 11",
    "jobDescription": "An About me for the job",
    "jobExperienceRequired": "jobExperienceRequired",
    "jobExperiencePreferred": "jobExperiencePreferred",
    "jobApplyBy": "jobApplyBy",
    "jobSkills": [
      "Skill4",
      "Skill5"
    ]
  }
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
  "companyId": 1,
  "jobName": "Back-end Engineer updated",
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
  "message": "The job was updated successfully",
  "jobs": {
  "id": 2,
  "companyId": 1,
  "jobName": "Back-end Engineer updated",
  "jobDescription": "An About me for the job",
  "jobExperienceRequired": "jobExperienceRequired",
  "jobExperiencePreferred": "jobExperiencePreferred",
  "jobApplyBy": "jobApplyBy"
}

```

#### 406 (Not Acceptable)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
  message: 'Please submit a job with all of the required fields.'
}
```

#### 404 (Not Found)

> If the requested job does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": "The job could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  message: 'Sorry, but something went wrong while updating the job.'
}
```

## **DELETE JOB**

### **Delete a Job by company ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[DELETE]**

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

_Method Url:_ `/api/job-skills`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If jobs are found in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "message": "The job skills were found in the database.",
  "skills": [
    {
      "id": 1,
      "jobId": 1,
      "jobSkill": "Reactjs"
    },
    {
      "id": 3,
      "jobId": 1,
      "jobSkill": "Expressjs"
    }
  ]
}
```

#### 404 (Not Found)

> If there are no jobs in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "skills": [],
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

## **GET JOB SKILL**

### **Get a job skill by ID**

_Method Url:_ `/api/job-skills/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                |
| ---- | ------- | -------- | -------------------------- |
| id   | Integer | Yes      | ID of a specific job skill |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The job skill was retrieved successfully.",
  "skills": {
    "id": 1,
    "jobId": 1,
    "jobSkill": "Reactjs"
  }
}
```

#### 404 (Not Found)

> If the requested job does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "skills": [],
  "message": "The job skill could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  message: 'Sorry, but something went wrong while retrieving the job skill.'
}
```

## **ADD JOB SKILL**

### **Add a job skill**

_Method Url:_ `/api/job-skills`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name       | type             | required | description                               |
| ---------- | ---------------- | -------- | ----------------------------------------- |
| `jobId`    | Integer          | Yes      | Must match a company's id in the database |
| `jobSkill` | Array of strings | Yes      | Cannot be an empty field                  |

_example:_

```
{
  "jobId": 1,
  "jobSkill": ["Reactjs", "Expressjs"]
}
```

#### Response

##### 201 (Created)

> If you successfully register a job the endpoint will return an HTTP response with a status code `201` and a body as below (returns all job skills fo r the jobId, not just the created jobs).

```
{
  "message": "Reactjs,Expressjs has successfully been added.",
  "skills": [
    {
      "id": 1,
      "jobId": 1,
      "jobSkill": "Reactjs"
    },
    {
      "id": 3,
      "jobId": 1,
      "jobSkill": "Expressjs updated"
    },
    {
      "id": 16,
      "jobId": 1,
      "jobSkill": "Reactjs"
    },
    {
      "id": 17,
      "jobId": 1,
      "jobSkill": "Expressjs"
    }
  ]
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
  message: 'Sorry, but something went wrong while adding the job skill.'
}
```

## **UPDATE JOB SKILL**

### **Update a Job Skill by company ID**

_Method Url:_ `/api/job-skills/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                |
| ---- | ------- | -------- | -------------------------- |
| id   | Integer | Yes      | ID of a specific job skill |

#### Body

| name       | type   | required | description              |
| ---------- | ------ | -------- | ------------------------ |
| `jobSkill` | String | Yes      | Cannot be an empty field |

_example:_

```
{
  "jobSkill": "This was updated 2"
}
```

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "id": 1,
  "jobId": 1,
  "jobSkill": "This was updated 2"
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

## **DELETE JOB SKILL**

### **Delete a Job Skill by company ID**

_Method Url:_ `/api/job-skills/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                |
| ---- | ------- | -------- | -------------------------- |
| id   | Integer | Yes      | ID of a specific job skill |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "message": "The job skill has been successfully deleted."
}
```

#### 404 (Not Found)

> If no companies for the specified id can be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": 'The job skill could not be found.'
}
```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": "Sorry, but something went wrong while deleting the job skill."
}

```

# MATCH ROUTES

## **GET MATCHES**

### **Get matches for seeker**

_Method Url:_ `/api/matches/seeker/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description |
| ---- | ------- | -------- | ----------- |
| id   | Integer | Yes      | seeker id   |

#### Response

##### 200 (OK)

> If there are recommended matches, the endpoint will return an HTTP response with a status code 200 and a body as below.

_example:_

```
[
    {
        "id": 1,
        "companyId": 1,
        "jobName": "Frontend Software Engineer",
        "jobDescription": "Are you excited by the prospect of creating simple, intuitive experiences that delight users? Do you like building services that will be used by hundreds of millions of users across the world? Microsoft Developer Center Norway is growing, and we’re looking for developers with a strong passion for building delightful and smart experiences that will be used on a global scale. Come join our team!",
        "jobExperienceRequired": "<ul><li>Masters or Bachelor’s degree or equivalent in computer science or related technical disciplines.</li><li>Experience with software engineering best practices (code quality, repo hygiene, code reviews, unit testing, design documentation, continuous integration, deployment).</li><li>Experience in the JavaScript ecosystem and related technologies such as React, React Native, TypeScript, Redux, HTML5, CSS.</li></ul>",
        "jobExperiencePreferred": "<ul><li>Experience in building performant experiences using technologies such as webpack and npm to optimize bundles and package dependencies.</li><li>Experience in experimentation framework and understanding how to measure end user success.</li><li>Thrives in dynamic, fast-paced environments where passion for customer engagement and great experience are at the forefront of all design & development.</li></ul>",
        "jobApplyBy": "30 May 2019",
        "jobSkills": [
            {
                "id": 1,
                "jobId": 1,
                "jobSkill": "React"
            },
            {
                "id": 2,
                "jobId": 1,
                "jobSkill": "HTML"
            },
            {
                "id": 3,
                "jobId": 1,
                "jobSkill": "CSS"
            },
            {
                "id": 4,
                "jobId": 1,
                "jobSkill": "Bootstrap"
            },
            {
                "id": 5,
                "jobId": 1,
                "jobSkill": "Git"
            }
        ],
        "count": 4
    },
    {
        "id": 2,
        "companyId": 2,
        "jobName": "Frontend Software Engineer",
        "jobDescription": "As a Front End Engineer you will be responsible for building the next generation of client side user experiences for our industry leading Music Subscription service. We are a team that conceptualizes, iterates, and executes new features on an ongoing basis, which contributes to an overall dynamic and creative atmosphere.We need a highly motivated and skillful engineer with JavaScript programming proficiency, plus a solid grasp of the performance and compatibility issues that arise when delivering a comprehensive web solution. Attention to detail and a dedication to deliver a high-quality, stable delivery is essential. To be successful you are self-motivated; driven to achieve and exceed commitments. You also need to exude strong collaboration skills, including the ability to mentor and be mentored. Possess a strong passion to work in a growing, energizing environment of innovation. If you want to be part of this amazing team, this position is for you.",
        "jobExperienceRequired": "<ul><li>Proficient JavaScript programmer</li><li>Experience with JS frameworks is highly desirable: React, Angular, etc.</li><li>Experience with CSS3 and Less/Sass in large scale applications</li></ul>",
        "jobExperiencePreferred": "<ul><li>Knowledge of media streaming, HTML5 MSE/EME, encryption standards a plus</li><li>Strong problem solving and critical thinking skills</li><li>Passion for quality and close attention to details</li></ul>",
        "jobApplyBy": "30 May 2019",
        "jobSkills": [
            {
                "id": 6,
                "jobId": 2,
                "jobSkill": "React"
            },
            {
                "id": 7,
                "jobId": 2,
                "jobSkill": "jQuery"
            },
            {
                "id": 8,
                "jobId": 2,
                "jobSkill": "HTML"
            },
            {
                "id": 9,
                "jobId": 2,
                "jobSkill": "CSS"
            },
            {
                "id": 10,
                "jobId": 2,
                "jobSkill": "Git"
            }
        ],
        "count": 4
    }
]

```

#### 404 (Not Found)

> If the provided `userId` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
   "message": "Sorry, but that user doesn't have a profile"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while getting matches"
}

```

### **Get matches for company for all jobs**

_Method Url:_ `/api/matches/company/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description |
| ---- | ------- | -------- | ----------- |
| id   | Integer | Yes      | company id  |

#### Response

##### 200 (OK)

> If there are recommended matches, the endpoint will return an HTTP response with a status code `200` and a body as below. This will show a list of all profiles matched with all jobs for that company. Filter by jobId if you want to see it only for each job.

_example:_

```
[
    {
        "skills": [
            "Golang",
            "Python",
            "JavaScript",
            "Node",
            "Express",
            "C++",
            "C#",
            "MySQL",
            "PostgreSQL",
            "HTML",
            "Git",
            "React",
            "CSS",
            "Django",
            "Redux",
            "Webpack",
            "Git"
        ],
        "seekerId": 2,
        "jobId": 3,
        "count": 3,
        "profile": {
            "id": 2,
            "userId": 2,
            "firstName": "John",
            "lastName": "Dough",
            "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
            "month": 5,
            "day": 21,
            "year": 1994,
            "country": "United States",
            "state": "Washington",
            "city": "Redmond",
            "zipcode": 98008
        }
    },
    {
        "skills": [
            "Java",
            "JavaScript",
            "Kafka",
            "jQuery",
            "HTML",
            "CSS",
            "Bootstrap",
            "Git"
        ],
        "seekerId": 1,
        "jobId": 3,
        "count": 2,
        "profile": {
            "id": 1,
            "userId": 1,
            "firstName": "Sam",
            "lastName": "Smith",
            "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
            "month": 10,
            "day": 13,
            "year": 1990,
            "country": "United States",
            "state": "California",
            "city": "San Francisco",
            "zipcode": 94016
        }
    },
    {
        "skills": [
            "Java",
            "Spring Framework",
            "React",
            "MySQL",
            "PostgreSQL",
            "Ruby"
        ],
        "seekerId": 3,
        "jobId": 3,
        "count": 1,
        "profile": {
            "id": 3,
            "userId": 3,
            "firstName": "Sally",
            "lastName": "Jones",
            "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
            "month": 1,
            "day": 2,
            "year": 1992,
            "country": "United States",
            "state": "Michigan",
            "city": "Detroit",
            "zipcode": 48127
        }
    }
]
```

#### 404 (Not Found)

> If the provided `userId` doesn't have a company, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
   "message": "Sorry, but that user doesn't have a company"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while getting matches"
}

```


## **GET MATCHED**

### **Get matched jobs by user id**

_Method Url:_ `/api/matched/seeker/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description |
| ---- | ------- | -------- | ----------- |
| id   | Integer | Yes      | user id     |

#### Response

##### 200 (OK)

> If the user has matched with any jobs, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
[
    {
        "id": 1,
        "companyId": 1,
        "jobName": "Frontend Software Engineer",
        "jobDescription": "Are you excited by the prospect of creating simple, intuitive experiences that delight users? Do you like building services that will be used by hundreds of millions of users across the world? Microsoft Developer Center Norway is growing, and we’re looking for developers with a strong passion for building delightful and smart experiences that will be used on a global scale. Come join our team!",
        "jobExperienceRequired": "<ul><li>Masters or Bachelor’s degree or equivalent in computer science or related technical disciplines.</li><li>Experience with software engineering best practices (code quality, repo hygiene, code reviews, unit testing, design documentation, continuous integration, deployment).</li><li>Experience in the JavaScript ecosystem and related technologies such as React, React Native, TypeScript, Redux, HTML5, CSS.</li></ul>",
        "jobExperiencePreferred": "<ul><li>Experience in building performant experiences using technologies such as webpack and npm to optimize bundles and package dependencies.</li><li>Experience in experimentation framework and understanding how to measure end user success.</li><li>Thrives in dynamic, fast-paced environments where passion for customer engagement and great experience are at the forefront of all design & development.</li></ul>",
        "jobApplyBy": "30 May 2019"
    },
    {
        "id": 2,
        "companyId": 2,
        "jobName": "Frontend Software Engineer",
        "jobDescription": "As a Front End Engineer you will be responsible for building the next generation of client side user experiences for our industry leading Music Subscription service. We are a team that conceptualizes, iterates, and executes new features on an ongoing basis, which contributes to an overall dynamic and creative atmosphere.We need a highly motivated and skillful engineer with JavaScript programming proficiency, plus a solid grasp of the performance and compatibility issues that arise when delivering a comprehensive web solution. Attention to detail and a dedication to deliver a high-quality, stable delivery is essential. To be successful you are self-motivated; driven to achieve and exceed commitments. You also need to exude strong collaboration skills, including the ability to mentor and be mentored. Possess a strong passion to work in a growing, energizing environment of innovation. If you want to be part of this amazing team, this position is for you.",
        "jobExperienceRequired": "<ul><li>Proficient JavaScript programmer</li><li>Experience with JS frameworks is highly desirable: React, Angular, etc.</li><li>Experience with CSS3 and Less/Sass in large scale applications</li></ul>",
        "jobExperiencePreferred": "<ul><li>Knowledge of media streaming, HTML5 MSE/EME, encryption standards a plus</li><li>Strong problem solving and critical thinking skills</li><li>Passion for quality and close attention to details</li></ul>",
        "jobApplyBy": "30 May 2019"
    }
]
```

#### 404 (Not Found)

> If the provided `userId` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that profile doesn't exist"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while getting that profile"
}

```

### **Get matched profiles by job id**

_Method Url:_ `/api/matched/job/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description |
| ---- | ------- | -------- | ----------- |
| id   | Integer | Yes      | job id      |

#### Response

##### 200 (OK)

> If the user has matched with any jobs, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
[
    {
        "id": 2,
        "userId": 12,
        "firstName": "John",
        "lastName": "Dough",
        "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
        "month": 5,
        "day": 21,
        "year": 1994,
        "country": "United States",
        "state": "Washington",
        "city": "Redmond",
        "zipcode": 98008
    },
    {
        "id": 1,
        "userId": 11,
        "firstName": "Sam",
        "lastName": "Smith",
        "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
        "month": 10,
        "day": 13,
        "year": 1990,
        "country": "United States",
        "state": "California",
        "city": "San Francisco",
        "zipcode": 94016
    }
]
```

#### 404 (Not Found)

> If the provided `jobId` doesn't exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that job doesn't exist"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while getting that job."
}

```

## **ADD MATCH**

### **Add a seeker match for job**

_Method Url:_ `/api/matches/seeker/:id/match/job/:jobId`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name  | type    | required | description |
| ----- | ------- | -------- | ----------- |
| id    | Integer | Yes      | user id     |
| jobId | Integer | Yes      | job id      |


#### Response

##### 200 (OK)

> If you successfully create a seeker profile, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
{
    "message": "Seeker has sent a match request successfully.",
    "match": [
        7
    ]
}
```

#### 404 (Not found)

> If the user Id or Job Id cannot find a profile then `404` and a body as below relating to the missing field(s).

_example:_

```
{
    "message": "Sorry, but that job does not exist"
}
```

```
{
    "message": "Sorry, but that profile does not exist"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```
{
			message:
				'Sorry, but something went wrong while creating match',
			err: err
}
```
### **Add a job match for seeker**

_Method Url:_ `/api/matches/job/:id/match/seeker/:seekerId`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name     | type    | required | description |
| -------- | ------- | -------- | ----------- |
| id       | Integer | Yes      | job id      |
| seekerId | Integer | Yes      | seeker id   |


#### Response

##### 200 (OK)

> If you successfully create a seeker profile, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
    "message": "Job has sent a match request successfully.",
    "match": 1
}

```

#### 404 (Not found)

> If the user Id or Job Id cannot find a profile then `404` and a body as below relating to the missing field(s).

_example:_

```
{
    "message": "Sorry, but that job does not exist"
}
```

```
{
    "message": "Sorry, but that profile does not exist"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```
{
			message:
				'Sorry, but something went wrong while creating match',
			err: err
}
```


