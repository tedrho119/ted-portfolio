import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        ref={ref}
        className="relative z-10 w-full max-w-[90vw] md:max-w-[800px] lg:max-w-[1000px] h-auto bg-[#202020] rounded-lg border-1 border-[#474351] mx-auto mt-8 md:mt-16"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.2)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Command line top bar */}
        <div className="flex items-center px-4 h-8 bg-[#312c32] rounded-t-lg">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center mr-13 text-gray-300 text-sm font-mono">
            <TypeAnimation
              sequence={["ted@portfolio ~ /about", 1000]}
              speed={50}
              cursor={false}
              className="inline-block"
            />
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-green-400 overflow-y-auto bg-[#111111] pointer-events-auto rounded-b-lg">
          <div className="mb-4">
            <div className="text-blue-400 text-xs md:text-base">$ whoami</div>
            <div className="text-green-300 ml-2 text-xs md:text-base">Ted Rho - Full Stack Developer</div>
          </div>

          <div className="mb-4">
            <div className="text-blue-400 text-xs md:text-base">$ ls -background</div>
            <div className="text-green-300 ml-2 text-xs md:text-base">
              - From New Zealand, now in Australia. <br />
              - Started Scratch in young age, fell in love programming <br />
              - Frontend is my passion — I love seeing the magic happen with touch of my hand <br />
            </div>
          </div>

          <div className="mb-4">
            <div className="text-blue-400 text-xs md:text-base">$ ls -achievements</div>
            <div className="text-green-300 ml-2 text-xs md:text-base">
              - Graduated Auckland Uni Computer Science degree<br />
              - Runner-up for Capstone 2024 <br />
              - Rutherford College Family Trophy: Excellence in Original Research
            </div>
          </div>

          <div className="mb-4">
            <div className="text-blue-400 text-xs md:text-base">$ ls -interest</div>
            <div className="text-green-300 ml-2 text-xs md:text-base">
              - Learning new frontend technologies<br />
              - Playing Games & Badminton in my free time
            </div>
          </div>

          {/* View Projects Button */}
          <div className="mb-4 pointer-events-auto">
            <div className="text-blue-400 text-xs md:text-base">$ ./view-projects</div>
            <button
              onClick={() => navigate('/projects')}
              className="mt-2 px-5 py-2 ml-1 bg-blue-500 text-white rounded hover:bg-blue-700 z-50 pointer-events-auto text-xs md:text-base"
            >
              Click Here!
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;