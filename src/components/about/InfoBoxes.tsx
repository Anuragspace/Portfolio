
import React from "react";
import { MapPin, Sparkles, BookOpen } from "lucide-react";

const InfoBoxes = () => {
  return (
    <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-0">
      {/* Education Box */}
      <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#3E40EF]/30 hover:translate-y-[-5px] group">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors duration-300">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Education</h4>
            <p className="text-gray-700 text-sm">
              B.Tech in ECE<br />
              Vellore Institute of Technology, 2022-2026
            </p>
          </div>
        </div>
      </div>

      {/* Location Box */}
      <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#3E40EF]/30 hover:translate-y-[-5px] group">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors duration-300">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Location</h4>
            <p className="text-gray-700 text-sm">
              Based in India<br />
              Available for remote work
            </p>
          </div>
        </div>
      </div>

      {/* Experience Box */}
      <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#3E40EF]/30 hover:translate-y-[-5px] group">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors duration-300">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Experience</h4>
            <p className="text-gray-700 text-sm">
              Chief Product Officer at Imaginum<br />
              Tech & Design Head at CSED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
