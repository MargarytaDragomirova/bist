import { axiosInstance } from "./config/axios";

export async function fetchStockData(symbol) {
  try {
    const yahooUrl = `https://query2.finance.yahoo.com/v8/finance/chart/${symbol}`;

    // const response = await fetch(yahooUrl);
    const response = await axiosInstance.get(yahooUrl);

    console.log(response);
    // const data = await response.json();

    return response;
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}
