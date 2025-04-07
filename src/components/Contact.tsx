
import React from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            Have a project in mind or want to discuss collaboration opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email Address</p>
                    <a href="mailto:hello@example.com" className="text-accent hover:underline">hello@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone Number</p>
                    <a href="tel:+1234567890" className="text-accent hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">New York, United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold mb-3">Available For</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Freelance Projects
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  UX/UI Consultation
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Workshop & Speaking
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Full-time Opportunities
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Hello, I'm interested in working with you on..."
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
