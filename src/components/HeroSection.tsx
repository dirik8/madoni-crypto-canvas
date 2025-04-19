import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShieldCheck, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-[90vh] bg-[#0A0B0F] relative overflow-hidden">
      {/* Gradient Orb */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full animate-pulse" />
      
      <div className="container mx-auto px-4 pt-20 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-left z-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight mb-6">
              Trade Smarter with Madonichain Exchange
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Experience the next generation of crypto trading with advanced tools, deep liquidity, and institutional-grade security.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-500">$12B+</span>
                <span className="text-gray-500 text-sm">24h Volume</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-500">2M+</span>
                <span className="text-gray-500 text-sm">Active Users</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-500">0.01s</span>
                <span className="text-gray-500 text-sm">Execution</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-500">24/7</span>
                <span className="text-gray-500 text-sm">Support</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                Explore Features
              </Button>
            </div>
          </div>
          
          {/* Right Column - Trading Features */}
          <div className="flex-1 grid grid-cols-2 gap-4 z-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800">
              <TrendingUp className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Spot Trading</h3>
              <p className="text-gray-400 text-sm">Trade over 100+ cryptocurrency pairs</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800">
              <ShieldCheck className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Secure Assets</h3>
              <p className="text-gray-400 text-sm">Multi-layer protection for your funds</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800">
              <Users className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Copy Trading</h3>
              <p className="text-gray-400 text-sm">Follow top traders automatically</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800">
              <TrendingUp className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Future Trading</h3>
              <p className="text-gray-400 text-sm">Up to 100x leverage trading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
