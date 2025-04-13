
import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, ExternalLink, CheckCircle, User, AtSign, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShineBorder } from "@/components/ui/shine-border";
import BubblingHearts from "./BubblingHearts";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Remove heart animation triggering as requested
      
      // Reset form after showing success message
      setTimeout(() => {
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
        }, 500);
      }, 4000); // Increased duration to show success message longer
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-white to-gray-50/80">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind or want to discuss collaboration opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <motion.div 
            className="lg:col-span-5 space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Contact Information Card */}
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Contact Information</h3>
              
              <div className="space-y-3">
                {/* Contact info items */}
                <div className="flex items-center group hover:bg-gray-50/50 p-2 rounded-lg transition-colors duration-200">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 shrink-0 group-hover:bg-accent/20 transition-all duration-300">
                    <Mail className="text-accent" size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Email</p>
                    <a href="mailto:hello@example.com" className="text-accent hover:underline font-medium text-sm">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group hover:bg-gray-50/50 p-2 rounded-lg transition-colors duration-200">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 shrink-0 group-hover:bg-accent/20 transition-all duration-300">
                    <Phone className="text-accent" size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Phone</p>
                    <a href="tel:+1234567890" className="text-accent hover:underline font-medium text-sm">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group hover:bg-gray-50/50 p-2 rounded-lg transition-colors duration-200">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 shrink-0 group-hover:bg-accent/20 transition-all duration-300">
                    <MapPin className="text-accent" size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Location</p>
                    <p className="text-gray-800 text-sm">New York, United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Available For Card */}
            <div className="bg-[#3E40EF] rounded-xl shadow-md p-4 border border-[#3E40EF]/20 text-white">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold text-white">Available For</h4>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-medium text-white">Open to Work</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center text-white/90 group">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 group-hover:w-2.5 transition-all duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">Freelance Projects</span>
                </li>
                <li className="flex items-center text-white/90 group">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 group-hover:w-2.5 transition-all duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">UX/UI Consultation</span>
                </li>
                <li className="flex items-center text-white/90 group">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 group-hover:w-2.5 transition-all duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">Workshop & Speaking</span>
                </li>
                <li className="flex items-center text-white/90 group">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 group-hover:w-2.5 transition-all duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">Full-time Opportunities</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-white hover:bg-white/90 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              >
                <span className="text-black font-medium text-sm">Let's Collaborate</span>
                <ExternalLink size={14} className="ml-2 text-black" />
              </Button>
            </div>
          </motion.div>
          
          {/* Contact Form Card */}
          <motion.div 
            className="lg:col-span-7 h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden h-full flex flex-col">
              <ShineBorder 
                borderWidth={1} 
                duration={8} 
                shineColor={["#3E40EF", "#6366F1", "#818CF8"]} 
                className="z-0"
              />
              
              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-center py-6">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="relative"
                    >
                      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3">
                        <CheckCircle className="text-green-500" size={28} />
                      </div>
                      <BubblingHearts isAnimating={showHeartAnimation} />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Message Sent!</h4>
                      <p className="text-gray-600 max-w-md text-sm">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </motion.div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 flex flex-col flex-grow">
                    <div className="space-y-3 flex-grow">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="relative">
                          <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-opacity duration-300 ${formState.name ? 'opacity-100' : 'opacity-70'}`}>
                            <User className={`w-4 h-4 ${focusedField === 'name' ? 'text-accent' : 'text-gray-400'}`} />
                          </div>
                          <input
                            type="text"
                            id="name"
                            value={formState.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border ${focusedField === 'name' ? 'border-accent' : 'border-gray-200'} rounded-lg outline-none focus:border-accent transition-all duration-300`}
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        
                        <div className="relative">
                          <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-opacity duration-300 ${formState.email ? 'opacity-100' : 'opacity-70'}`}>
                            <AtSign className={`w-4 h-4 ${focusedField === 'email' ? 'text-accent' : 'text-gray-400'}`} />
                          </div>
                          <input
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border ${focusedField === 'email' ? 'border-accent' : 'border-gray-200'} rounded-lg outline-none focus:border-accent transition-all duration-300`}
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-opacity duration-300 ${formState.subject ? 'opacity-100' : 'opacity-70'}`}>
                          <FileText className={`w-4 h-4 ${focusedField === 'subject' ? 'text-accent' : 'text-gray-400'}`} />
                        </div>
                        <input
                          type="text"
                          id="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border ${focusedField === 'subject' ? 'border-accent' : 'border-gray-200'} rounded-lg outline-none focus:border-accent transition-all duration-300`}
                          placeholder="Subject"
                          required
                        />
                      </div>
                      
                      <div className="relative">
                        <div className={`absolute top-2.5 left-0 flex items-start pl-3 pointer-events-none transition-opacity duration-300 ${formState.message ? 'opacity-100' : 'opacity-70'}`}>
                          <MessageSquare className={`w-4 h-4 ${focusedField === 'message' ? 'text-accent' : 'text-gray-400'}`} />
                        </div>
                        <textarea
                          id="message"
                          value={formState.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows={3}
                          className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border ${focusedField === 'message' ? 'border-accent' : 'border-gray-200'} rounded-lg outline-none focus:border-accent transition-all duration-300 resize-none`}
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white py-2 text-sm rounded-lg transition-all duration-300 shadow-sm hover:shadow-md mt-auto relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent via-accent/80 to-accent bg-[length:200%_100%] group-hover:animate-shimmer"></span>
                      <span className="relative flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={14} className="mr-2" />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                )}
              </div>
              
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10 z-0"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/5 rounded-full -ml-8 -mb-8 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
