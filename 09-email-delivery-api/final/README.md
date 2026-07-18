# Email Delivery API

I built this integration exercise to send transactional email from Express. I can use Ethereal for safe previews and SendGrid for provider-based delivery.

## What I practiced

- I configured Nodemailer transports with environment variables.
- I integrated the SendGrid mail SDK.
- I kept provider credentials outside my source code.
- I handled delivery failures through Express error middleware.

## How I run it

I copy `.env.example` to `.env`, provide my test email credentials, run `npm install`, and start the API with `npm start`. I call `/send` only with test provider details.
