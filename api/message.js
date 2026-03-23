import { sql } from '../lib/db';

export default async function handler(req, res) {
  res.status(200).json({ message: "test" });
}