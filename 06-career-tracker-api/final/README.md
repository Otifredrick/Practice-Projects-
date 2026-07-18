# Career Tracker API

I built this authenticated REST API to manage job applications for individual users. I document the endpoints with Swagger so I can inspect and exercise the API without a separate client.

## What I practiced

- I registered and authenticated users with hashed passwords and JWTs.
- I scoped every job record to its authenticated owner.
- I validated requests and centralized API errors.
- I documented my routes with an OpenAPI specification.
- I added security and rate-limiting middleware.

## How I run it

I copy `.env.example` to `.env`, provide my MongoDB and JWT values, run `npm install`, and start the API with `npm start`. I open `/api-docs` to use my Swagger interface.
