require('dotenv').config();

const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

const statuses = new Set(['todo', 'doing', 'done']);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/tasks', async (_req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.json({ tasks: rows });
  } catch (error) {
    next(error);
  }
});

app.post('/api/tasks', async (req, res, next) => {
  const title = String(req.body.title || '').trim();
  if (!title) return res.status(400).json({ message: 'A task title is required.' });

  try {
    const { rows } = await pool.query(
      'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
      [title.slice(0, 160)]
    );
    res.status(201).json({ task: rows[0] });
  } catch (error) {
    next(error);
  }
});

app.patch('/api/tasks/:id', async (req, res, next) => {
  const status = String(req.body.status || '');
  if (!statuses.has(status)) return res.status(400).json({ message: 'Invalid task status.' });

  try {
    const { rows } = await pool.query(
      'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *',
      [status, req.params.id]
    );
    if (!rows[0]) return res.status(404).json({ message: 'Task not found.' });
    res.json({ task: rows[0] });
  } catch (error) {
    next(error);
  }
});

app.delete('/api/tasks/:id', async (req, res, next) => {
  try {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1', [req.params.id]);
    if (!result.rowCount) return res.status(404).json({ message: 'Task not found.' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: 'The database request could not be completed.' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`PERN Task Board running on http://localhost:${port}`));
