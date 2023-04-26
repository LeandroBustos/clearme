# clearme

A client management API

## Environment Variables

To run this project, you will need to add the following environment variables to
your .env file. Check `.env.example` for an example.


| Parameter                  | Type     | Description                                                                                 |
| :------------------------- | :------- | :------------------------------------------------------------------------------------------ |
| `PORT`                     | `number` | **Optional**. Port to run server, default to `3000`                                                          |
| `MONGODB_URI`              | `string` | **Optional**. Database host url. you can choose to use your own database or the default database

## Run Locally

Clone the project

**SSH**
```bash
  git clone git@github.com:LeandroBustos/clearme.git
```

**HTTP**
```bash
  git clone https://github.com/LeandroBustos/clearme.git
```
Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## API Reference

### Client routes

#### Create client

```http
  POST /client
```

#### body JSON

```http
{
  "company_name": string,
	"address": string,
	"city": string,
	"state": string,
	"zip": string,
	"headcount": string,
	"public": boolean
}
```

#### Example

```http
{
  "company_name": "empresa",
	"address": "calle",
	"city": "ciudad",
	"state": "provincia",
	"zip": "1234",
	"headcount": "sede",
	"public": false|true
}
```

#### Get clients

```http
  GET /client
```

#### body JSON state search 

```http
{
  "state": string
}
```

#### body JSON company_name search 

```http
{
  "company_name": string
}
```

#### Example state search

```http
{
  "state": "provincia"
}
```

#### Example company_name search

```http
{
  "company_name": "provincia"
}
```

#### Update client

```http
  PUT /client/:id
```

#### body JSON

```http
{
  "company_name": string,
	"address": string,
	"city": string,
	"state": string,
	"zip": string,
	"headcount": string,
	"public": boolean
}
```

#### Example

```http
{
  "company_name": "empresa",
	"address": "calle",
	"city": "ciudad",
	"state": "provincia",
	"zip": "1234",
	"headcount": "sede",
	"public": false | true
}
```

#### Delete client

```http
  DELETE /client/:id
```

### Member routes

#### Create member

```http
  POST /member
```

#### body JSON

```http
{
  "client_id": string,
  "name": string,
	"phone_number": string,
	"email": string
}
```

#### Example

```http
{
  "client_id": "client_id",
  "name": "nombre",
	"phone_number": "1112345678",
	"email": "mail@gmail.com"
}
```

#### Create member note

```http
  POST /member/note
```

#### body JSON

```http
{
  "member_id": string,
  "content": string
}
```

#### Example

```http
{
  "member_id": "member_id",
  "content": "contenido"
}
```

#### Get members

```http
  GET /member
```

#### Update member

```http
  PUT /member/:id
```

#### body JSON

```http
{
  "name": string,
	"phone_number": string,
	"email": string
}
```

#### Example

```http
{
  "name": "nombre",
	"phone_number": "1112345678",
	"email": "mail@gmail.com"
}
```

#### Update member note

```http
  PUT /member/:id/note/:id
```

#### body JSON

```http
{
  "content": string
}
```

#### Example

```http
{
  "content": "contenido"
}
```

#### Update member client

```http
  PATCH /member/:id/client
```

#### body JSON

```http
{
  "client_id": string
}
```

#### Example

```http
{
  "client_id": "client_id"
}
```

#### Example

```http
{
  "client_id": "client_id"
}
```

#### Delete member

```http
  DELETE /member/:id
```

#### Delete member note

```http
  DELETE /member/:id/note/:id
```

## Tech Stack

**Server:** Node, Express, Javascript, MongoDB
