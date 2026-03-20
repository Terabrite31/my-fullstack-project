import { sql } from '../lib/db';

export default async function handler(req, res) {
  const { input } = req.query;

  await sql`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      message TEXT
    )
  `;

  await sql`
    INSERT INTO messages (id, message)
    VALUES (1, 'default')
    ON CONFLICT (id) DO NOTHING
  `;

  // update
  await sql`
    UPDATE messages
    SET message = ${input}
    WHERE id = 1
  `;

  // 🔥 ask database after update
  const result = await sql`
    SELECT message FROM messages WHERE id = 1
  `;

  // send actual DB value
  res.status(200).json({
    message: result[0].message
  });
}