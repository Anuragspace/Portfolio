
import React from "react";
import { ArrowDownCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mb-2 animate-fade-in">
                <Sparkles className="inline-block mr-2 h-4 w-4" />
                UI/UX Designer & Product Designer
              </div>
              <h1 className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
                Crafting Digital Experiences That <span className="text-[#3E40EF]">Inspire</span>
              </h1>
              <p className="text-lg text-gray-600 animate-slide-in" style={{ animationDelay: "0.2s" }}>
                I transform complex problems into elegant, intuitive designs that delight users and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in" style={{ animationDelay: "0.3s" }}>
                <Button className="bg-[#3E40EF] hover:bg-[#3E40EF]/90">View Projects</Button>
                <Button variant="outline" className="border-[#3E40EF] text-[#3E40EF] hover:bg-[#3E40EF]/10">Contact Me</Button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative z-10">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              {/* Ripple animation behind the logo */}
              <div className="ripple-loader">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
              
              {/* Logo in circular frame */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg animate-scale-in bg-white p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3E40EF]/20 to-transparent mix-blend-overlay rounded-full"></div>
                <div className="rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/606277e8-7fd3-46d2-8ea6-ef9914f23908.png" 
                    alt="Designer portrait" 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <div className="absolute -z-10 inset-0 rounded-full blur-sm bg-[#3E40EF]/20"></div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#3E40EF]/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
          <a
            href="#about"
            className="text-[#3E40EF] hover:text-[#3E40EF]/70 animate-bounce transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3E40EF]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3E40EF]/5 rounded-full blur-3xl"></div>
      
      {/* Interactive particles */}
      <div className="particles-container absolute inset-0 pointer-events-none">
        <div className="particle animate-float" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
        <div className="particle animate-float" style={{ top: '25%', left: '80%', animationDelay: '0.5s' }}></div>
        <div className="particle animate-float" style={{ top: '60%', left: '5%', animationDelay: '1s' }}></div>
        <div className="particle animate-float" style={{ top: '70%', left: '90%', animationDelay: '1.5s' }}></div>
        <div className="particle animate-float" style={{ top: '40%', left: '70%', animationDelay: '2s' }}></div>
      </div>
      
      <div className="absolute inset-0 dot-pattern opacity-30 z-0"></div>
    </section>
  );
};

export default Hero;
