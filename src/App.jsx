import React, { useState } from "react";
import TradingViewWidget from "./components/TradingViewWidget";
import StockChart from "./components/StockChart";

function App() {
  const widgetHeight = 60;
  const [symbol, setSymbol] = useState("GARAN.IS");

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: widgetHeight,
          zIndex: 1000,
        }}
      >
        <TradingViewWidget />
      </div>

      <div
        style={{
          position: "fixed",
          top: 10,
          left: "10vw",
          right: "10vw",
          marginTop: widgetHeight + 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Hisse Kodu (örn: GARAN.IS)"
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            width: "80vw",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginTop: 20, padding: "1rem", width: "60vw" }}>
        <StockChart stockSymbol={symbol} />
      </div>
    </div>
  );
}

export default App;
