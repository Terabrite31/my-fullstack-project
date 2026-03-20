import { sql } from '../lib/db';

export default async function handler(req, res) {

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email TEXT,
      password TEXT
    )
  `;

  res.json({ message: "table ready" });
}