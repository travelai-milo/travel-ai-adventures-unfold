
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-brand-blue p-10 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Get Early Access</h2>
              <p className="mb-6">
                Be among the first to experience TravelAI. Sign up for early access and get:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority access to the TravelAI beta</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exclusive discounts on premium features</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct feedback channel to our development team</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="flex items-center">
                  <img 
                    src="/0fa9a912-de75-45dc-b0fc-ed1906d81160.png"
                    alt="TravelAI Logo" 
                    className="h-10 mr-3 bg-white p-1 rounded-full"
                  />
                  <p className="font-bold text-xl">TravelAI</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-10 md:p-12">
              <h3 className="text-2xl font-semibold mb-6">Join Our Waitlist</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below to reserve your spot and be notified when TravelAI launches.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
