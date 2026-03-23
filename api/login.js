import { sql } from '../lib/db';

export default async function handler(req, res) {

  const {email, password} = req.query;

  const result = await sql`
  SELECT password FROM users WHERE email = $(email)
  ';

  if (result.length === 0) {
  return res.json({ checker: "no user" });
}

if (password === result[0].password) {
res.json({ checker: "approved"});
}
else {
  res.json({ checker: "wrong password" });
}

}





