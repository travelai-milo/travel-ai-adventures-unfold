
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/your-formspree-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        toast({
          title: "Success!",
          description: "Thanks for your interest in TravelAI. We'll be in touch soon!",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {submitted ? (
        <div className="text-center p-8 bg-green-50 rounded-xl">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thanks for reaching out!</h3>
          <p className="text-gray-600 mb-4">
            We've received your information and will contact you soon about early access to TravelAI.
          </p>
          <Button 
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="mt-2"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your travel interests..."
              value={formData.message}
              onChange={handleChange}
              className="min-h-[120px] w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-brand-blue hover:bg-blue-600 text-white py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Early Access"}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to receive updates about TravelAI.
            We respect your privacy and will never share your information.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
