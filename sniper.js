export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.dexscreener.com/latest/dex/pairs/base");
    const data = await response.json();

    const result = data.pairs
      .filter(pair => pair.txns?.h24 > 50 && pair.volume?.h24 > 5000)
      .map(pair => ({
        name: pair.baseToken.name,
        symbol: pair.baseToken.symbol,
        priceUsd: pair.priceUsd,
        volume: pair.volume.h24,
        url: pair.url
      }));

    res.status(200).json(result.slice(0, 5)); // Return top 5
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}