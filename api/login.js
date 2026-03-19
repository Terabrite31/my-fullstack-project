export default function handler(req, res) {
  const { email, password } = req.query;

  if (email === "test@gmail.com" && password === "1234") {
    res.json({ checker: "approved" });
  } else {
    res.json({ checker: "denied" });
  }
}