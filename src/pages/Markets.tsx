
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PriceChart from "@/components/PriceChart";
import { Search, Filter, TrendingUp, TrendingDown } from "lucide-react";

const Markets = () => {
  const [activeTab, setActiveTab] = useState("spot");

  const marketData = [
    { pair: "BTC/USDT", price: "43,562.21", change: "+2.45", volume: "1.2B", market: "spot" },
    { pair: "ETH/USDT", price: "2,284.15", change: "+1.87", volume: "845M", market: "spot" },
    { pair: "BTC/USD", price: "43,600", change: "-0.32", volume: "421M", market: "futures" },
    { pair: "ETH/USD", price: "2,285", change: "+3.21", volume: "234M", market: "futures" },
  ];

  return (
    <main className="min-h-screen bg-[#0A0B0F] text-gray-100 pt-20 pb-12">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 text-gradient">
            Cryptocurrency Markets
          </h1>
          <p className="text-gray-300 mb-8">
            Real-time cryptocurrency prices and market data
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-wrap gap-4 mb-8 animate-slide-up">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search markets..."
                className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100"
              />
            </div>
          </div>
          <Button variant="outline" className="bg-gray-900/50 border-gray-800 text-gray-100">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        {/* Market Tabs */}
        <div className="flex gap-4 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button
            variant={activeTab === "spot" ? "default" : "ghost"}
            onClick={() => setActiveTab("spot")}
            className={activeTab === "spot" ? "text-white bg-blue-600" : "text-gray-300"}
          >
            Spot Markets
          </Button>
          <Button
            variant={activeTab === "futures" ? "default" : "ghost"}
            onClick={() => setActiveTab("futures")}
            className={activeTab === "futures" ? "text-white bg-blue-600" : "text-gray-300"}
          >
            Futures
          </Button>
        </div>

        {/* Market Table */}
        <div className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4 text-gray-300">Pair</th>
                  <th className="text-right p-4 text-gray-300">Price</th>
                  <th className="text-right p-4 text-gray-300">24h Change</th>
                  <th className="text-right p-4 text-gray-300">24h Volume</th>
                </tr>
              </thead>
              <tbody>
                {marketData
                  .filter(item => item.market === activeTab)
                  .map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="p-4 font-medium text-gray-100">{item.pair}</td>
                      <td className="text-right p-4 text-gray-100">${item.price}</td>
                      <td className={`text-right p-4 flex items-center justify-end ${
                        item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {item.change.startsWith('+') ? (
                          <TrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 mr-1" />
                        )}
                        {item.change}%
                      </td>
                      <td className="text-right p-4 text-gray-300">${item.volume}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-100">BTC/USDT Price Chart</h2>
            <PriceChart symbol="BTC/USDT" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Markets;
