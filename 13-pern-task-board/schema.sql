CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(160) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'todo'
    CHECK (status IN ('todo', 'doing', 'done')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
