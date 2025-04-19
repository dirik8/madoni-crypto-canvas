
import { 
  TrendingUp, 
  BarChart2, 
  Users, 
  Grid, 
  Shield, 
  Globe, 
  Zap, 
  DollarSign
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductFeatures = () => {
  const features = [
    {
      title: "Spot Trading",
      description: "Trade over 300+ cryptocurrency pairs with deep liquidity and tight spreads.",
      icon: <TrendingUp className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Futures Trading",
      description: "Up to 100x leverage with advanced charting tools and risk management.",
      icon: <BarChart2 className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Copy Trading",
      description: "Follow top-performing traders automatically and earn while you learn.",
      icon: <Users className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Grid Trading",
      description: "Automate buy low, sell high strategies in volatile market conditions.",
      icon: <Grid className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Ultra Security",
      description: "99.9% of assets stored in cold wallets with cutting-edge encryption.",
      icon: <Shield className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Global Compliance",
      description: "Fully regulated exchange adhering to international standards.",
      icon: <Globe className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Lightning Fast",
      description: "Industry-leading 100,000 TPS with sub-millisecond execution.",
      icon: <Zap className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Low Fees",
      description: "Competitive fee structure with maker/taker discounts for high volume.",
      icon: <DollarSign className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section className="py-20 bg-[#0A0B0F]" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Complete Crypto Ecosystem
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need for successful crypto trading in one powerful platform. 
            Trade with confidence using advanced tools designed for both beginners and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-blue-800 transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
