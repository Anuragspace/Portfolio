
import React, { useState } from "react";
import { Globe } from "@/features/shared/components/magic-ui/Globe";
import { SpinningText } from "@/features/shared/components/magic-ui/SpinningText";

const ProfileImage = () => {
  const [showSpinText, setShowSpinText] = useState(false);

  return (
    <div 
      className="relative h-[450px] group"
      onMouseEnter={() => setShowSpinText(true)}
      onMouseLeave={() => setShowSpinText(false)}
    >
      <div className="bg-[#3E40EF] rounded-2xl overflow-hidden z-10 relative h-full">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:bg-white/10 transition-all duration-500"></div>

        <div className="flex-1 w-full flex items-center justify-center relative">
          <Globe className="scale-[1.1] translate-y-[30%] -z-10" />
        </div>
        <img 
          src="\images\anudev.webp" 
          alt="Portrait" 
          className="w-full h-full object-cover translate-y-[7%]"
        />

        {/* Spinning Text - Top Right */}
        {showSpinText && (
          <div className="absolute top-6 left-6 flex -z-20 cursor-none">
            <div 
              className="w-28 h-28 rounded-full border-2 border-white/50 flex items-center justify-center"
              style={{ boxSizing: "border-box" }} 
            >
              <SpinningText 
                children="ANURAG ADARSH • DESIGNER • UI/UX •" 
                className="text-white" 
                duration={15}
                radius={4}
                followCursor={true}
              />
            </div>
          </div>
        )}
      </div>
      <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#3E40EF]/10 rounded-full blur-2xl -z-10"></div>
      <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#3E40EF]/5 rounded-full blur-2xl -z-10"></div>
      
      {/* Rotating design elements */}
      <div className="absolute w-32 h-32 border border-[#3E40EF]/30 rounded-full -bottom-4 -left-4 animate-spin-slow"></div>
      <div className="absolute w-24 h-24 border border-[#3E40EF]/20 rounded-full -top-4 -right-4 animate-spin-slow-reverse"></div>
    </div>
  );
};

export default ProfileImage;
