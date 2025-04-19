
import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CryptoPrice {
  symbol: string;
  price: string;
  change: string;
  volume: string;
}

const LiveMarket = () => {
  const [prices] = useState<CryptoPrice[]>([
    { symbol: "BTC/USDT", price: "43,562.21", change: "+2.45", volume: "1.2B" },
    { symbol: "ETH/USDT", price: "2,284.15", change: "+1.87", volume: "845M" },
    { symbol: "BNB/USDT", price: "312.47", change: "-0.32", volume: "421M" },
    { symbol: "XRP/USDT", price: "0.5487", change: "+3.21", volume: "234M" },
    { symbol: "SOL/USDT", price: "98.76", change: "+5.67", volume: "156M" },
  ]);

  return (
    <div className="w-full bg-gray-900/80 backdrop-blur-lg border-y border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-none animate-slide-up">
          {prices.map((crypto) => (
            <div key={crypto.symbol} className="flex items-center gap-4 min-w-[200px] hover:bg-gray-800/50 p-3 rounded-lg transition-colors">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-300">{crypto.symbol}</div>
                <div className="text-lg font-bold text-white">${crypto.price}</div>
              </div>
              <div className="text-right">
                <div className={`flex items-center ${Number(crypto.change) >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {Number(crypto.change) >= 0 ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {crypto.change}%
                </div>
                <div className="text-sm text-gray-400">Vol {crypto.volume}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveMarket;
