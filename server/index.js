async function fetchStock(symbol) {
  const url = `https://query2.finance.yahoo.com/v8/finance/chart/${symbol}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

// example
fetchStock("GARAN.IS").then(console.log);
