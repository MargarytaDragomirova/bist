import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { fetchStockData } from "../api";

export default function StockChart({ stockSymbol }) {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      if (!stockSymbol) return;

      try {
        const stock = await fetchStockData(stockSymbol);

        if (!stock || !stock.chart?.result) {
          console.error("API format hatası:", stock);
          setDataset([]);
          return;
        }

        const result = stock.chart.result[0];
        const timestamps = result.timestamp;
        const closePrices = result.indicators.quote[0].close;

        const data = timestamps.map((ts, i) => ({
          date: new Date(ts * 1000),
          price: closePrices[i],
        }));

        setDataset(data);
      } catch (error) {
        console.error("Veri yüklenirken hata:", error);
        setDataset([]);
      }
    };

    loadData();
  }, [stockSymbol]); // 🔥 hisse değişince grafik güncellenir

  return (
    <div>
      <LineChart
        dataset={dataset}
        xAxis={[{ dataKey: "date", scaleType: "time" }]}
        yAxis={[{ label: "Fiyat (TL)" }]}
        series={[{ dataKey: "price", label: stockSymbol }]}
      />
    </div>
  );
}
