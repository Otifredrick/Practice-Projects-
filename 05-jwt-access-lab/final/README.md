# JWT Access Lab

I built this small authentication lab to understand the complete JSON Web Token flow. I submit credentials, receive a signed token, store it in the browser, and send it with a protected request.

## What I practiced

- I signed and verified JWTs.
- I protected an Express route with authentication middleware.
- I handled missing and invalid authorization headers.
- I made the token lifecycle visible through an interactive interface.

## How I run it

I copy `.env.example` to `.env`, replace the example JWT secret, run `npm install`, and start the project with `npm start`.
