
import React, { useRef, useState } from "react";
import AboutHeader from "./AboutHeader";
import TextRevealSection from "./TextRevealSection";
import ProfileImage from "./ProfileImage";
import TerminalContent from "./TerminalContent";
import InfoBoxes from "./InfoBoxes";

const About = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <AboutHeader />
        <TextRevealSection />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image */}
          <div className="lg:col-span-5" ref={imageRef}>
            <ProfileImage />
          </div>

          {/* Right Column: Terminal Content */}
          <div className="lg:col-span-7" ref={textContainerRef}>
            <TerminalContent />
          </div>

          {/* Lower Boxes: Education, Location, Experience */}
          <InfoBoxes />
        </div>
      </div>
    </section>
  );
};

export default About;
