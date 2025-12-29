import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://query2.finance.yahoo.com/v8/finance/chart",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
