
import React from 'react';
import { Clock, PiggyBank, Brain, ThumbsUp, Users, ShieldCheck } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    {
      icon: <Clock className="h-8 w-8 text-brand-blue" />,
      title: "Save Time",
      description: "Skip the hours of research. Get personalized travel plans in minutes, not days."
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-brand-blue" />,
      title: "Save Money",
      description: "Find the best deals across flights, hotels, and activities that match your budget."
    },
    {
      icon: <Brain className="h-8 w-8 text-brand-blue" />,
      title: "Smart Recommendations",
      description: "AI that learns your preferences and suggests options you'll actually love."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-brand-blue" />,
      title: "Stress-Free Planning",
      description: "No more spreadsheets or dozens of browser tabs. Everything in one place."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Group Coordination",
      description: "Easily plan trips with friends and family with shared itineraries."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />,
      title: "Reliable Support",
      description: "Get help when you need it, during planning or while you're traveling."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-brand-blue">TravelAI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the benefits of having an AI-powered travel agent at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-brand-blue/5 p-8 rounded-2xl border border-brand-blue/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">Ready to transform how you travel?</h3>
              <p className="text-gray-600 mb-6 md:mb-0">
                Join our early access list and be among the first to experience TravelAI.
              </p>
            </div>
            <button 
              className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
