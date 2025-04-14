import React from 'react';
import { MessageSquareText, Sparkles, CalendarCheck, MapPin } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquareText size={32} className="text-white" />,
      title: "Chat with TravelAI",
      description: "Start a conversation with our AI assistant about your travel plans and preferences.",
      color: "bg-brand-blue"
    },
    {
      icon: <Sparkles size={32} className="text-white" />,
      title: "Get Personalized Recommendations",
      description: "Receive tailored suggestions for flights, accommodations, and activities based on your needs.",
      color: "bg-indigo-500"
    },
    {
      icon: <CalendarCheck size={32} className="text-white" />,
      title: "Review Your Itinerary",
      description: "Look over your customized travel plan and make any adjustments you want.",
      color: "bg-violet-500"
    },
    {
      icon: <MapPin size={32} className="text-white" />,
      title: "Book and Go",
      description: "Confirm your bookings through our secure platform and get ready for your trip!",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-brand-blue">TravelAI</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planning a trip has never been easier. Just chat with our AI and watch the magic happen.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-10 bottom-10 w-1 bg-gray-200 hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`${step.color} rounded-full p-4 z-10 shrink-0`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-gray-50 p-6 md:p-10 rounded-2xl max-w-3xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img 
                src="/99529973-d20c-40f7-91cf-41a4868542ca.png"
                alt="TravelAI App Interface" 
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-xl font-semibold mb-3">Try a conversation like:</h3>
                <p className="text-gray-600 italic mb-4">"I want to plan a 7-day trip to Japan in October with my partner. We love food, culture, and nature."</p>
                <p className="text-gray-600">TravelAI will handle the rest, suggesting itineraries, flights, accommodations, and activities tailored to your preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
