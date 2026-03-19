export default function handler(req, res) {
  const { number } = req.query;

  if (number == 33) {
    res.status(200).json({ correct: true });
  } else {
    res.status(200).json({ correct: false });
  }
}