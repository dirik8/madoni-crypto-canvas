
import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface PriceChartProps {
  symbol: string;
}

const PriceChart = ({ symbol }: PriceChartProps) => {
  const [data, setData] = useState<{ time: string; price: number }[]>([]);

  useEffect(() => {
    // Generate mock data for demo
    const generateMockData = () => {
      const data = [];
      let price = Math.random() * 100;
      
      for (let i = 0; i < 24; i++) {
        price = price + (Math.random() - 0.5) * 10;
        data.push({
          time: `${i}:00`,
          price: Math.max(0, price)
        });
      }
      return data;
    };

    setData(generateMockData());
  }, [symbol]);

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
          <XAxis dataKey="time" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "1px solid #374151",
              borderRadius: "0.375rem",
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#3B82F6"
            fill="url(#colorPrice)"
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
