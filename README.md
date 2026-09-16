# Express API

A small Express.js backend including '/', '/health', and '/cars' endpoints.

## Setup

```bash
npm install
npm start
```

The server runs on `http://localhost:3000` by default (set `PORT` to override).

## Endpoints

### General

- `GET /` - index endpoint, returns a welcome message.
- `GET /health` - health check, returns a status message.

### Cars

- `GET /cars` - fetch all cars, returns a list of all cars in the database.
- `GET /cars/:id` - fetch car by ID, returns a specific car by its ID.
- `POST /cars` - insert new car, creates a new car entry in the database.
- `PUT /cars/:id` - update car by ID, updates an existing car's information.
- `DELETE /cars/:id` - delete car by ID, removes a car from the database.
