
import React from "react";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import RippleAnimation from "./RippleAnimation";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-block px-3 py-1 bg-primary-violet/10 text-primary-violet rounded-full text-sm font-medium mb-2 animate-fade-in">
                UI/UX Designer & Product Designer
              </div>
              <h1 className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
                Crafting Digital Experiences That <span className="text-primary-violet">Inspire</span>
              </h1>
              <p className="text-lg text-gray-600 animate-slide-in" style={{ animationDelay: "0.2s" }}>
                I transform complex problems into elegant, intuitive designs that delight users and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in" style={{ animationDelay: "0.3s" }}>
                <Button className="bg-primary-violet hover:bg-primary-violet/90 text-white">View Projects</Button>
                <Button variant="outline" className="border-primary-violet text-primary-violet hover:bg-primary-violet/10">Contact Me</Button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-full overflow-hidden aspect-square shadow-lg animate-scale-in bg-white p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/20 to-transparent mix-blend-overlay rounded-full"></div>
              <div className="rounded-full overflow-hidden relative">
                <img 
                  src="/lovable-uploads/cef5b0d2-053e-49c3-9055-565d1923d9af.png" 
                  alt="Designer portrait" 
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 z-[-1]">
                  <RippleAnimation />
                </div>
              </div>
              <div className="absolute -z-10 inset-0 rounded-full blur-sm bg-primary-violet/20"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-violet/5 rounded-full blur-3xl -z-10"></div>
            
            {/* Additional decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 border border-primary-violet/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 -right-6 w-12 h-12 bg-primary-violet/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
          <a
            href="#about"
            className="text-primary-violet hover:text-primary-violet/70 animate-bounce transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-violet/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-violet/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 dot-pattern opacity-30 z-0"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 bg-primary-violet/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-6 h-6 border border-primary-violet/40 rounded-full animate-pulse" style={{ animationDelay: "0.7s" }}></div>
    </section>
  );
};

export default Hero;
