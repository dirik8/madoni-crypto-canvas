import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PriceChart from "@/components/PriceChart";

interface CryptoAsset {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: string;
  marketCap: string;
}

const Markets = () => {
  const [assets, setAssets] = useState<CryptoAsset[]>([
    { symbol: "BTC", name: "Bitcoin", price: 43562.21, change: 2.45, volume: "$1.2B", marketCap: "$845B" },
    { symbol: "ETH", name: "Ethereum", price: 2284.15, change: 1.87, volume: "$845M", marketCap: "$274B" },
    { symbol: "BNB", name: "Binance Coin", price: 312.47, change: -0.32, volume: "$421M", marketCap: "$48B" },
    { symbol: "XRP", name: "Ripple", price: 0.5487, change: 3.21, volume: "$234M", marketCap: "$27B" },
    { symbol: "SOL", name: "Solana", price: 98.76, change: 5.67, volume: "$156M", marketCap: "$41B" },
    { symbol: "ADA", name: "Cardano", price: 0.42, change: -1.26, volume: "$124M", marketCap: "$14B" },
    { symbol: "DOT", name: "Polkadot", price: 5.23, change: 1.12, volume: "$78M", marketCap: "$6.2B" },
    { symbol: "DOGE", name: "Dogecoin", price: 0.12, change: 8.45, volume: "$1.1B", marketCap: "$15.2B" },
    { symbol: "AVAX", name: "Avalanche", price: 32.16, change: 3.76, volume: "$96M", marketCap: "$11.3B" },
    { symbol: "LINK", name: "Chainlink", price: 14.72, change: -0.48, volume: "$86M", marketCap: "$7.8B" },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredAssets = filter === "all" 
    ? assets 
    : filter === "gainers" 
      ? assets.filter(asset => asset.change > 0)
      : assets.filter(asset => asset.change < 0);

  const [selectedAsset, setSelectedAsset] = useState<CryptoAsset | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0B0F] text-white pt-20 pb-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Cryptocurrency Market
            </h1>
            <p className="text-gray-400 mb-8">
              View real-time prices and market data for the top cryptocurrencies traded on Madonichain Exchange.
            </p>

            <div className="mb-8">
              {selectedAsset && (
                <Card className="bg-[#131722] border-gray-800 mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-xs">
                        {selectedAsset.symbol}
                      </div>
                      {selectedAsset.name} Price Chart
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PriceChart symbol={selectedAsset.symbol} />
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button 
                variant={filter === "all" ? "default" : "outline"} 
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-700"}
              >
                All Assets
              </Button>
              <Button 
                variant={filter === "gainers" ? "default" : "outline"} 
                onClick={() => setFilter("gainers")}
                className={filter === "gainers" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-700"}
              >
                Top Gainers
              </Button>
              <Button 
                variant={filter === "losers" ? "default" : "outline"} 
                onClick={() => setFilter("losers")}
                className={filter === "losers" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-700"}
              >
                Top Losers
              </Button>
            </div>

            <Card className="bg-[#131722] border-gray-800">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-800">
                      <tr className="text-left">
                        <th className="p-4 text-gray-400">Asset</th>
                        <th className="p-4 text-gray-400">Price</th>
                        <th className="p-4 text-gray-400">24h Change</th>
                        <th className="p-4 text-gray-400">24h Volume</th>
                        <th className="p-4 text-gray-400">Market Cap</th>
                        <th className="p-4 text-gray-400">Trade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAssets.map((asset) => (
                        <tr 
                          key={asset.symbol} 
                          className="border-b border-gray-800/50 hover:bg-gray-800/30 cursor-pointer transition-colors"
                          onClick={() => setSelectedAsset(asset)}
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-xs">
                                {asset.symbol}
                              </div>
                              <div>
                                <div className="font-medium">{asset.name}</div>
                                <div className="text-sm text-gray-400">{asset.symbol}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 font-medium">${asset.price.toLocaleString()}</td>
                          <td className="p-4">
                            <div className={`flex items-center ${asset.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                              {asset.change >= 0 ? (
                                <TrendingUp className="h-4 w-4 mr-1" />
                              ) : (
                                <TrendingDown className="h-4 w-4 mr-1" />
                              )}
                              {asset.change}%
                            </div>
                          </td>
                          <td className="p-4 text-gray-300">{asset.volume}</td>
                          <td className="p-4 text-gray-300">{asset.marketCap}</td>
                          <td className="p-4">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Trade</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Markets;
