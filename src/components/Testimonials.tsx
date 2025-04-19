
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The most user-friendly crypto exchange I've ever used. Their grid trading feature helped me increase my profits significantly.",
    author: "Sarah Chen",
    role: "Professional Trader",
    location: "Singapore"
  },
  {
    quote: "Exceptional security measures and lightning-fast execution. Madonichain has become my go-to platform for all crypto trading.",
    author: "Michael Reeves",
    role: "Crypto Analyst",
    location: "London"
  },
  {
    quote: "The copy trading feature is revolutionary. I've learned so much from top traders while earning consistent returns.",
    author: "David Kim",
    role: "Investment Manager",
    location: "Seoul"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied traders who have chosen Madonichain for their crypto journey
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800">
                  <CardContent className="p-6 text-center">
                    <Quote className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                    <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
