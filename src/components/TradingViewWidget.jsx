import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    // Script daha önce eklenmişse tekrar ekleme
    if (container.current.children.length === 0) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
          { proName: "FX:USDTRY", title: "Dollar" },
          { proName: "FX_IDC:XAUTRYG", title: "Altın" },
          { proName: "FX:EURTRY", title: "Euro" },
        ],
        colorTheme: "dark",
        locale: "tr",
        isTransparent: false,
        showSymbolLogo: false,
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={container}
      className="fixed top-0 left-0 w-full z-[9999] bg-[#0b0c10] border-b border-[#222]"
      style={{ height: 60 }} // widget yüksekliği
    ></div>
  );
}

export default memo(TradingViewWidget);
