export default function handler(req, res) {
  res.status(200).json({
    message: "CryptoSniper API is working!",
    success: true
  });
}
