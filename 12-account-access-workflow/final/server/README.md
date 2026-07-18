# Account Access Workflow API

I built this API to practice a complete account lifecycle instead of login alone. I verify email addresses, manage cookie sessions, issue password-reset tokens, and protect account routes.

## What I practiced

- I created registration and email-verification flows.
- I stored refresh tokens and managed cookie sessions.
- I implemented forgotten-password and reset-password flows.
- I generated email links through a test mail transport.
- I separated authentication, authorization, validation, and errors.

## How I run it

I copy `.env.example` to `.env`, provide my MongoDB, JWT, and Ethereal test values, run `npm install`, and start the API with `npm start`.
