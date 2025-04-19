
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Book, Video, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const LearnPage = () => {
  const resources = [
    {
      title: "Getting Started with Crypto",
      description: "Learn the basics of cryptocurrency trading and blockchain technology",
      icon: Book,
      link: "/learn/basics"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides on trading strategies and platform features",
      icon: Video,
      link: "/learn/videos"
    },
    {
      title: "Trading Guides",
      description: "Master advanced trading techniques and market analysis",
      icon: Globe,
      link: "/learn/guides"
    },
    {
      title: "Community Forums",
      description: "Connect with other traders and share experiences",
      icon: Users,
      link: "/learn/community"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0B0F] text-gray-100 pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Learn to Trade Like a Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Access comprehensive resources to master cryptocurrency trading
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <resource.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-100">{resource.title}</h3>
                    <p className="text-gray-400 mb-4">{resource.description}</p>
                    <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LearnPage;
