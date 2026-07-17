-- Run once against your Neon / Vercel Postgres database (Vercel → Storage → SQL editor, or psql).
CREATE TABLE IF NOT EXISTS waitlist (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email       text NOT NULL UNIQUE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  referrer    text,
  user_agent  text
);
