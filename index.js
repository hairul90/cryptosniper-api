const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/sniper', async (req, res) => {
  try {
    const response = await axios.get('https://api.dexscreener.com/token-profiles/latest/v1');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from DexScreener API' });
  }
});

app.get('/', (req, res) => {
  res.send('CryptoSniper API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});