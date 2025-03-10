import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import banner from "./assets/banner.jpg";
import bannerb from "./assets/bannerb.jpg"; // Import the new banner image
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./About";
import './responsive.css';

const Start = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [showSquare, setShowSquare] = useState(false);
  const [showText, setShowText] = useState(false);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showBannerB, setShowBannerB] = useState(false); // New state for banner change

  const isMobile = window.innerWidth <= 767;

  const bannerScale = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1.6 : 2]);
  const textScale = useTransform(scrollYProgress, [0, 0.8], [1, 2]);

  const yHi = useTransform(scrollYProgress, [0, 0.9], [0, isMobile ? -550 : -550]);
  const xHi = useTransform(scrollYProgress, [0, 0.9], [0, isMobile ? 0 : -850]);
  const opacityHi = useTransform(scrollYProgress, [0, 0.7, 0.9], [1, 1, 0]);

  const yTed = useTransform(scrollYProgress, [0, 0.9], [0, isMobile ? -370 : -370]);
  const xTed = useTransform(scrollYProgress, [0, 0.9], [0, isMobile ? 0 : -750]);
  const opacityTed = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1, 0]);

  const xRho = useTransform(scrollYProgress, [0, 0.9], [0, isMobile ? 0 : 850]);
  const yRho = useTransform(scrollYProgress, [0, 0.9], [0, isMobile ? 550 : 550]);
  const opacityRho = useTransform(scrollYProgress, [0, 0.8, 0.95], [1, 1, 0]);

  const xDev = useTransform(scrollYProgress, [0, 0.9], [0, isMobile ? 0 : 1000]);
  const yDev = useTransform(scrollYProgress, [0, 0.9], [0, isMobile ? 700 : 700]);
  const opacityDev = useTransform(scrollYProgress, [0, 0.75, 0.9], [1, 1, 0]);

  const scrollDownOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value >= 0.95) {
        setShowBannerB(true); // Change banner image earlier
      } else {
        setShowBannerB(false);
      }

      if (value >= 0.99) {
        setShowSquare(true);
      } else {
        setShowSquare(false);
        setShowAbout(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    const completeTimer = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, []);

  useEffect(() => {
    if (showSquare) {
      setShowAbout(true);
    } else {
      setShowAbout(false);
    }
  }, [showSquare]);

  return (
    <div ref={ref} className="w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Conditional Banner Image */}
        <motion.img
          src={showBannerB ? bannerb : banner} // Use showBannerB to switch images
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            scale: bannerScale,
            transformOrigin: "center",
          }}
        />
        
        

        {/* Conditionally render "Hi! My name is" */}
        {showText && !showSquare && (
          <motion.div
            className="
            absolute 
            hi 
            top-[16%] 
            left-[12%] 
            text-white 
            font-balthazar 
            text-3xl 
            max-md:left-1/2 
            max-md:-translate-x-1/2 
            max-md:text-center 
            max-md:text-2xl
            max-md:top-[13%]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              x: initialAnimationComplete ? xHi : 0,
              y: initialAnimationComplete ? yHi : 0,
              scale: initialAnimationComplete ? textScale : 1,
              opacity: initialAnimationComplete ? opacityHi : 1,
            }}
          >
            Hi! My name is
          </motion.div>
        )}

        <div data-aos="fade-up" data-aos-duration="1000">
          <motion.div
            className="
            absolute 
            ted 
            top-[17vh] 
            left-[13%] 
            text-white 
            font-bodoni 
            text-[200px] 
            max-md:left-1/2 
            max-md:-translate-x-1/2 
            max-md:text-center 
            max-md:text-[140px] 
            max-md:top-[14vh]
            "
            style={{
              x: xTed,
              y: yTed,
              scale: textScale,
              opacity: opacityTed,
            }}
          >
            TED
          </motion.div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <motion.div
            className="
            absolute 
            rho 
            right-[13%] 
            text-white 
            font-bodoni 
            text-[200px]
            max-md:left-1/2 
            max-md:-translate-x-1/2 
            max-md:text-center 
            max-md:text-[140px] 
            max-md:right-auto 
            "
            style={{
              x: xRho,
              y: yRho,
              scale: textScale,
              opacity: opacityRho,
            }}
          >
            RHO
          </motion.div>
        </div>

        {/* Conditionally render "I'm a full stack developer..." */}
        {showText && !showSquare && (
          <motion.div
            className="
            absolute 
            fullstack 
            bottom-[14vh] 
            right-[12%] 
            text-white 
            font-balthazar 
            text-3xl 
            whitespace-nowrap 
            min-w-[300px]
            max-md:left-1/2 
            max-md:-translate-x-1/2 
            max-md:text-center 
            max-md:text-2xl
            max-md:bottom-[12vh]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              x: initialAnimationComplete ? xDev : 0,
              y: initialAnimationComplete ? yDev : 0,
              scale: initialAnimationComplete ? textScale : 1,
              opacity: initialAnimationComplete ? opacityDev : 1,
            }}
          >
            I'm a full stack developer...
          </motion.div>
        )}
      </div>

      {initialAnimationComplete && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-50"
          style={{ opacity: scrollDownOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-6 h-6 relative">
            <div className="absolute w-4 h-4 border-b-2 border-r-2 border-white transform rotate-45 translate-y-0 animate-scroll-down z-40" />
          </div>
          <p className="text-white font-balthazar text-lg mt-3">Scroll Down</p>
        </motion.div>
      )}

      {showSquare && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
          {/* Render the About component */}
          {showAbout && <About />}
        </div>
      )}

      <div className="h-screen"></div>
      <div className="h-screen"></div>

      {/* Pass showSquare as a prop to Navbar */}
      <Navbar activeSection={showSquare ? 1 : 0} />
    </div>
  );
};

export default Start;