# Commerce Platform API

I built this API to practice the backend structure of an online store. I manage accounts, roles, products, reviews, orders, cookie-based sessions, and payment metadata through separate controllers and routes.

## What I practiced

- I implemented cookie-based JWT authentication and authorization roles.
- I modeled products, reviews, orders, and users with Mongoose.
- I enforced ownership and administrative permissions.
- I added query controls, security middleware, and centralized errors.
- I connected a small React client to my session endpoints.

## How I run it

I copy `.env.example` to `.env`, provide my MongoDB, JWT, and Stripe test values, run `npm install`, and start the API with `npm start`.
