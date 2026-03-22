 import { sql } from '../lib/db'; 

export default async function handler(req, res) {
   const result = await sql`
    SELECT message FROM messages WHERE id = 1
  `;

  res.status(200).json({
    message: result[0].message
  });
}