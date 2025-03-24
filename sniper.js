import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.dexscreener.com/token-profiles/latest/v1');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from DexScreener API' });
  }
}
