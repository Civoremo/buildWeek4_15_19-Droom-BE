# Droom BACK-END

Backend Project

## Table of Contents

- [Test User Accounts](#test-user-accounts)
- [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
- [Auth Routes](#auth-routes)

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
    message: 'Registration is successful',
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI3IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ0MzM1NjUxLCJleHAiOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xFXoX"
}
```

##### 400 (Bad Request)

> If you are missing a email or password for registration, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
    message: 'Submit both an email and password when registering.'
}
```

##### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": 'Sorry, but something went wrong while registering'
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
    message: 'Submit both an email and password when registering.'
}
```

##### 401 (Unauthorized)

> If you failt to login, the endpoint will return an HTTP response with a status code `401` which indicates the email and or password entered is not valid.

```
{
  message: 'Sorry, incorrect email or password'
}
```

##### 500 (Bad Request)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": 'Sorry, but something went wrong while logging in'
}
```
# COMPANY ROUTES

### **Get all companies**

_Method Url:_ `/api/companies`

_HTTP method:_ **[GET]**

#### Headers

| name              | type   | required | description              |
| ----------------- | ------ | -------- | ------------------------ |
| `Content-Type`    | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token                               |

#### Response

##### 200 (OK)

> If companies are found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The companies were found in the database.",
  "companies": [
    {
    "information": {
        "companyName": "",
        "companyPicture": "",
        "companyDescription": "",
        "location": {
            "country": "",
            "state": "",
            "city": "",
            "zipcode": ""
        },
    "jobs": []
    }
  ]
}
```

#### 404 (Not Found)

> If there are no companies in the database, the endpoint will return an HTTP response with a status code 404 and a body as below.

```
{
  "companies": [],
  "message": "The companies could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

```
{
    message: 'Sorry, but something went wrong while retrieving the companies.'
}
```

### **Get all companies**

_Method Url:_ `/api/companies/:id`

_HTTP method:_ **[GET]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token |

#### Parameters

| name   | type    | required | description              |
| ------ | ------- | -------- | ------------------------ |
| id | Integer | Yes      | ID of a specific company |


#### Response

##### 200 (OK)

> 
If a company with the specified ID in the URL parameters is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The company was retrieved successfully.",
  "company": [
    {
    "information": {
        "companyName": "",
        "companyPicture": "",
        "companyDescription": "",
        "location": {
            "country": "",
            "state": "",
            "city": "",
            "zipcode": ""
        },
    "jobs": []
    }
  ]
}
```

#### 404 (Not Found)

> If the requested company does not exist, the endpoint will return an HTTP response with a status code 404 and a body as below.

```
{
  "company": [],
  "message": "The company could not be found in the database."
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

```
{
    message: 'Sorry, but something went wrong while retrieving the company.'
}
```

### **Adds a Company**

_Method Url:_ `/api/companies`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token |

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
  "companyName": "Apple",
  "companyPicture": "url string (exclude for MVP)",
  "companyDescription": "An About me for the company",
  "country": "United States of America",
  "state": "California",
  "city": "Cupertino",
  "zipcode": "40000",
}
```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "information": {
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

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code 400 and a body as below.

```
{
    message: 'Please submit a company with all of the required fields.'
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

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

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token |

#### Parameters

| name   | type    | required | description              |
| ------ | ------- | -------- | ------------------------ |
| id | Integer | Yes      | ID of a specific company |


#### Body

| name                 | type    | required | description                            |
| -------------------- | ------- | -------- | -------------------------------------- |
| `userId`             | Integer | Yes      | Must match a user's id in the database |
| `companyName`        | String  | Yes      | Cannot be an empty field               |
| `companyPicture`     | String  | No      | Can be an empty field                  |
| `companyDescription` | String  | Yes      | Cannot be an empty field               |
| `country`            | String  | Yes      | Cannot be an empty field               |
| `state`              | String  | Yes      | Cannot be an empty field               |
| `city`               | String  | Yes      | Cannot be an empty field               |
| `zipcode`            | Integer | Yes      | Cannot be an empty field               |

_example:_

```
{
  "userId": 1,
  "companyName": "Apple",
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

> If a company with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
    "information": {
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

