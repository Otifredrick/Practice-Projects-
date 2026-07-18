# My Node.js Practice Projects

I built this collection while learning Node.js, Express, databases, authentication, uploads, payments, email delivery, and full-stack application structure. I arranged the projects in learning order so I can show how my backend skills progressed over time.

> I treat these as practice projects. I keep each project intentionally small and readable instead of presenting it as a production service.

## What I built

| # | Project | What I practiced | Interface |
|---|---|---|---|
| 03 | [FocusFlow Task Manager](./03-focus-flow-task-manager/final) | I practiced Express, MongoDB, and REST CRUD. | Responsive task UI |
| 04 | [Product Catalog API](./04-product-catalog-api/final) | I practiced filtering, sorting, field selection, and pagination. | REST API |
| 05 | [JWT Access Lab](./05-jwt-access-lab/final) | I practiced JWT sign-in and protected routes. | Authentication playground |
| 06 | [Career Tracker API](./06-career-tracker-api/final) | I practiced user authentication and private job CRUD. | REST API and Swagger |
| 07 | [CareerBoard Dashboard](./07-career-board-dashboard/final) | I practiced the MERN stack, Redux Toolkit, and charts. | React dashboard |
| 08 | [Product Image Uploader](./08-product-image-uploader/final) | I practiced multipart uploads and Cloudinary. | Upload gallery |
| 09 | [Email Delivery API](./09-email-delivery-api/final) | I practiced Nodemailer and SendGrid integrations. | REST API |
| 10 | [Checkout Payment Demo](./10-checkout-payment-demo/final) | I practiced Stripe Payment Intents. | Checkout UI |
| 11 | [Commerce Platform API](./11-commerce-platform-api/final) | I practiced cookies, roles, products, reviews, and orders. | API and auth client |
| 12 | [Account Access Workflow](./12-account-access-workflow/final) | I practiced verification and password recovery. | React authentication flow |
| 13 | [PERN Task Board](./13-pern-task-board) | I practiced PostgreSQL, Express, and browser CRUD. | Responsive task board |

## How I run a project

I open a completed implementation, install its dependencies, copy `.env.example` to `.env`, and provide the local credentials required by that exercise.

```bash
cd 03-focus-flow-task-manager/final
npm install
cp .env.example .env
npm start
```

I install React clients from their own client folders. I never commit real API keys or database connection strings.

## Repository notes

- I keep duplicate `starter` directories locally as course references, but I exclude them from this repository.
- I exclude generated builds and `node_modules`.
- I use developer test credentials for payment, upload, and email exercises.
- I keep the refreshed interfaces lightweight so the original learning objectives remain clear.

## Author

I am Frederick Otieno, and I built this repository as a record of my Node.js learning journey.
