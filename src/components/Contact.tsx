
import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, ExternalLink, CheckCircle, User, AtSign, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShineBorder } from "@/components/ui/shine-border";

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
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-white to-gray-50/80">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div className="lg:col-span-5 space-y-4">
            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Contact info items */}
                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3 shrink-0">
                    <Mail className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Email Address</p>
                    <a href="mailto:hello@example.com" className="text-accent hover:underline font-medium">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Phone Number</p>
                    <a href="tel:+1234567890" className="text-accent hover:underline font-medium">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Location</p>
                    <p className="text-gray-800">New York, United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Available For Card */}
            <div className="bg-[#3E40EF] rounded-2xl shadow-md p-6 border border-[#3E40EF]/20 text-white">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Available For</h4>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Open to Work</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-white/90 group">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">Freelance Projects</span>
                </li>
                <li className="flex items-center text-white/90 group">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">UX/UI Consultation</span>
                </li>
                <li className="flex items-center text-white/90 group">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">Workshop & Speaking</span>
                </li>
                <li className="flex items-center text-white/90 group">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">Full-time Opportunities</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-white hover:bg-white/90 text-[#3E40EF] py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-medium"
              >
                <AnimatedShinyText className="text-[#3E40EF]">Let's Collaborate</AnimatedShinyText>
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </motion.div>
          
          {/* Contact Form Card */}
          <motion.div className="lg:col-span-7 h-full">
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden h-full flex flex-col">
              <ShineBorder 
                borderWidth={1.1} 
                duration={10} 
                shineColor={["#3E40EF", "#6366F1", "#818CF8"]} 
                className="z-0"
              />
              
              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="text-green-500" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                    <p className="text-gray-600 max-w-md">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
                    <div className="space-y-4 flex-grow">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <div className={`absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none transition-opacity duration-300 ${formState.name ? 'opacity-100' : 'opacity-70'}`}>
                            <User className={`w-5 h-5 ${focusedField === 'name' ? 'text-accent' : 'text-gray-400'}`} />
                          </div>
                          <input
                            type="text"
                            id="name"
                            value={formState.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-11 pr-4 py-3 bg-gray-50/50 border ${focusedField === 'name' ? 'border-accent' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all duration-300`}
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        
                        <div className="relative">
                          <div className={`absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none transition-opacity duration-300 ${formState.email ? 'opacity-100' : 'opacity-70'}`}>
                            <AtSign className={`w-5 h-5 ${focusedField === 'email' ? 'text-accent' : 'text-gray-400'}`} />
                          </div>
                          <input
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-11 pr-4 py-3 bg-gray-50/50 border ${focusedField === 'email' ? 'border-accent' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all duration-300`}
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className={`absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none transition-opacity duration-300 ${formState.subject ? 'opacity-100' : 'opacity-70'}`}>
                          <FileText className={`w-5 h-5 ${focusedField === 'subject' ? 'text-accent' : 'text-gray-400'}`} />
                        </div>
                        <input
                          type="text"
                          id="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-11 pr-4 py-3 bg-gray-50/50 border ${focusedField === 'subject' ? 'border-accent' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all duration-300`}
                          placeholder="Subject"
                          required
                        />
                      </div>
                      
                      <div className="relative">
                        <div className={`absolute top-3.5 left-0 flex items-start pl-3.5 pointer-events-none transition-opacity duration-300 ${formState.message ? 'opacity-100' : 'opacity-70'}`}>
                          <MessageSquare className={`w-5 h-5 ${focusedField === 'message' ? 'text-accent' : 'text-gray-400'}`} />
                        </div>
                        <textarea
                          id="message"
                          value={formState.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows={4}
                          className={`w-full pl-11 pr-4 py-3 bg-gray-50/50 border ${focusedField === 'message' ? 'border-accent' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all duration-300 resize-none`}
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mt-auto relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent via-accent/80 to-accent bg-[length:200%_100%] group-hover:animate-shimmer"></span>
                      <span className="relative flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} className="mr-2" />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                )}
              </div>
              
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 z-0"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full -ml-12 -mb-12 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
