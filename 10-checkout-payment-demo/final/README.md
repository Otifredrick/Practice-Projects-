# Checkout Payment Demo

I built this checkout exercise to understand Stripe Payment Intents from the browser to Express. I use Stripe test mode so I can practice the payment lifecycle without making a real charge.

## What I practiced

- I created Payment Intents from an Express controller.
- I mounted and styled Stripe Elements in the browser.
- I handled processing, success, and error states.
- I kept my Stripe secret key in environment configuration.

## How I run it

I copy `.env.example` to `.env`, provide my Stripe test secret key, run `npm install`, and start the project with `npm start`.
