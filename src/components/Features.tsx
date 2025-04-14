
import React from 'react';
import { Plane, MapPin, CalendarClock, MessageSquare, Hotel, CreditCard } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Plane className="h-10 w-10 text-brand-blue" />,
      title: "Smart Flight Booking",
      description: "Find and book the best flights based on your preferences and budget with AI-powered recommendations."
    },
    {
      icon: <Hotel className="h-10 w-10 text-brand-blue" />,
      title: "Accommodation Finder",
      description: "Discover perfect places to stay that match your style, from luxury hotels to cozy vacation rentals."
    },
    {
      icon: <MapPin className="h-10 w-10 text-brand-blue" />,
      title: "Destination Inspiration",
      description: "Get personalized travel recommendations based on your interests, budget, and travel history."
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-brand-blue" />,
      title: "Itinerary Planning",
      description: "Create detailed day-by-day itineraries with activities, reservations, and local recommendations."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-brand-blue" />,
      title: "Natural Conversations",
      description: "Talk to TravelAI like you would with a human travel agent — no complicated forms needed."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-brand-blue" />,
      title: "Seamless Booking",
      description: "Book your entire trip in one place with secure payment processing and booking confirmations."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need For <span className="text-brand-blue">Effortless Travel</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            TravelAI combines AI technology with travel expertise to make planning your next adventure simple and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4 p-3 bg-blue-50 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Travel destinations collage" 
            className="rounded-lg shadow-lg w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
