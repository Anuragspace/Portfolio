
import React from "react";
import { Send, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "./BlurFade";
import ScrollTrigger from "./ScrollTrigger";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-violet-100">
      <div className="container-custom max-w-5xl">
        <BlurFade direction="up" duration={0.6} className="text-center mb-12 max-w-xl mx-auto">
          <h2 className="mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            Got a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
          </p>
        </BlurFade>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <ScrollTrigger className="lg:col-span-5">
            <BlurFade direction="right" duration={0.6} delay={0.1}>
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                  <p className="text-gray-600 mb-6">Feel free to reach out through any of these channels:</p>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                        <Mail className="text-accent" size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <a href="mailto:hello@example.com" className="text-accent hover:underline">hello@example.com</a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                        <Phone className="text-accent" size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Phone</p>
                        <a href="tel:+1234567890" className="text-accent hover:underline">+1 (234) 567-890</a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                        <MapPin className="text-accent" size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Location</p>
                        <p className="text-gray-600">New York, United States</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-bold mb-3 text-lg">Available For</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {["Freelance Projects", "UX/UI Consultation", "Workshop & Speaking", "Full-time Opportunities"].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurFade>
          </ScrollTrigger>
          
          <ScrollTrigger className="lg:col-span-7">
            <BlurFade direction="left" duration={0.6} delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100 to-violet-200 rounded-bl-full opacity-50"></div>
                
                <h3 className="text-2xl font-bold mb-6 relative z-10">Send a Message</h3>
                
                <form className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all resize-none"
                      placeholder="Hi, I'd like to discuss a project..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">All fields are required</p>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button type="submit" className="bg-accent hover:bg-accent/90 text-white px-6">
                        <Send size={16} className="mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </div>
            </BlurFade>
          </ScrollTrigger>
        </div>
        
        <div className="mt-12 text-center">
          <BlurFade direction="up" duration={0.6} delay={0.3}>
            <p className="text-gray-600">Prefer to connect on social media?</p>
            <div className="flex justify-center gap-4 mt-4">
              {['LinkedIn', 'Twitter', 'Dribbble', 'Instagram'].map((platform, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium hover:text-accent transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
