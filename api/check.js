let storedNumber = null;

export default function handler(req, res) {
  const { number } = req.query;

  if (number) {
    storedNumber = number;
  }

  res.json({ number: storedNumber });
}