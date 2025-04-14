
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-brand-black/70 to-brand-blue/30 z-10"
        ></div>
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Travel backdrop" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="bg-brand-blue text-white font-medium text-sm py-1 px-3 rounded-full inline-block mb-4 animate-fade-in">
            Meet Your AI Travel Companion
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Plan Your Perfect Trip With <span className="text-gradient font-extrabold">TravelAI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 animate-fade-in-up">
            Your AI-powered virtual travel agent that makes planning trips effortless. From flights to hotels, all done through natural conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button 
              className="bg-brand-blue hover:bg-blue-600 text-white text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Get Early Access <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView()}
            >
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#features" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
