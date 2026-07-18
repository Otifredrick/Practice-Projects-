# PERN Task Board

I built this compact PostgreSQL, Express, and browser JavaScript project to practice relational CRUD. I move tasks through **To do**, **In progress**, and **Done** states.

## What I practiced

- I designed a PostgreSQL table with a constrained status field.
- I wrote parameterized CRUD queries with `pg`.
- I connected a responsive browser interface to my Express API.
- I handled empty, loading, and database-error states.

## How I run it

I create a PostgreSQL database named `pern_task_board`, run `psql -d pern_task_board -f schema.sql`, copy `.env.example` to `.env`, and adjust `DATABASE_URL`. I then run `npm install`, start the project with `npm start`, and open `http://localhost:5000`.
