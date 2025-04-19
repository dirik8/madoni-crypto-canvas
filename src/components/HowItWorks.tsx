
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Register in under 30 seconds with your email address or mobile number."
    },
    {
      number: "02",
      title: "Verify Your Identity",
      description: "Complete KYC with our streamlined verification process in minutes."
    },
    {
      number: "03",
      title: "Deposit & Trade",
      description: "Fund your account via crypto or fiat methods and start trading instantly."
    }
  ];

  return (
    <section className="py-20 bg-[#0A0B0F]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Start Trading in Minutes
          </h2>
          <p className="text-gray-400">
            Setting up your account is quick and seamless. Begin your trading journey with Madonichain in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-8 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-6">{step.title}</h3>
              <p className="text-gray-400 mb-4">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full">
                  <ArrowRight className="text-blue-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Open Free Account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
