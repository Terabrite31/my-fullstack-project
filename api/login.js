import { sql } from '../lib/db';

export default async function handler(req, res) {

  const { email, password } = req.query;

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email TEXT,
      password TEXT
    )
  `;

  await sql`
  INSERT INTO users (email, password)
    VALUES (${email}, ${password})
`;

  res.json({ message: "table ready" });
}