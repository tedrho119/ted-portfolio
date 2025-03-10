import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import project5 from "./assets/project5.jpg";
import lemon from "./assets/lemon1.jpg";
import { FaPython, FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiC, SiSelenium, SiAdobepremierepro, SiFigma } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { motion, useScroll, useTransform } from 'framer-motion';
import './Projectsres.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const mainContainerRef = useRef(null);
  const blackBgRef = useRef(null);
  const portfolio1Ref = useRef(null);
  const portfolio1TextRef = useRef(null);
  const portfolio2Ref = useRef(null);
  const portfolio2TextRef = useRef(null);
  const portfolio3Ref = useRef(null);
  const portfolio3TextRef = useRef(null);
  const secondBlackSectionRef = useRef(null);
  const skillPageRef = useRef(null);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scrollDownOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const isnotMobile = window.innerWidth > 767;

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Master timeline
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainerRef.current,
        start: "top top",
        end: "+=500%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          if (self.progress > 0.9) {
            setIsSkillsVisible(true);
          } else {
            setIsSkillsVisible(false);
          }
        },
      }
    });

    gsap.set(portfolio1Ref.current, { y: "40%" });
    gsap.set(portfolio2Ref.current, { autoAlpha: 0 });
    gsap.set(portfolio3Ref.current, { autoAlpha: 0 });
    gsap.set(secondBlackSectionRef.current, { y: "100%" });
    gsap.set(skillPageRef.current, { y: "100%" });

    // First sequence - black BG and portfolio1 reveal
    masterTimeline
      .to(blackBgRef.current, {
        y: "-100%", 
        duration: 10.0,
        ease: "none"
      }, 0)
      
      // Portfolio1 moves at same speed as black background
      .to(portfolio1Ref.current, {
        y: "0%", 
        ease: "none",
        duration: 10.0
      }, 0)
      
      // Portfolio1 text moves at same speed as black background
      .fromTo(portfolio1TextRef.current,
        { y: "50%" },
        { y: "-180%", duration: 38.0, ease: "none" },
        1.0
      )
      
      // Fade transition to portfolio2 (image only)
      .to(portfolio1Ref.current, {
        autoAlpha: 0,
        duration: 2,
        ease: "none"
      }, 18.0)
      
      // Immediately position and show portfolio2 text at the bottom
      .set(portfolio2TextRef.current, { y: "50%", autoAlpha: 1 }, 18.0) 
      
      // Fade in portfolio2 image
      .to(portfolio2Ref.current, {
        autoAlpha: 1,
        duration: 2,
        ease: "none"
      }, 18.0)
      
      // Portfolio2 text animation - same speed as portfolio1 text
      .to(portfolio2TextRef.current,
        { y: "-150%", duration: 25.0, ease: "none" },
        18.0
      )
      
      // Fade transition to portfolio3 (image only)
      .to(portfolio2Ref.current, {
        autoAlpha: 0,
        duration: 2,
        ease: "none"
      }, 35)
      
      // Fade in portfolio3 image
      .to(portfolio3Ref.current, {
        autoAlpha: 1,
        duration: 2,
        ease: "none"
      }, 32.0)
      
      // Immediately position and show portfolio3 text
      .set(portfolio3TextRef.current, { y: "60%" }, 32)
      
      // Portfolio3 text animation - bring to center and stop
      .to(portfolio3TextRef.current,
        { y: "0%", duration: 10.0, ease: "none" },
        32
      )

      // Move both portfolio3 image and text together
      .to([portfolio3Ref.current, portfolio3TextRef.current], {
        y: "-100%",
        duration: 20.0,
        ease: "none"
      }, 42)
      
      // Bring in the final black section
      .to(secondBlackSectionRef.current, {
        y: "0%",
        duration: 10.0,
        ease: "none"
      }, 42)


      .to(skillPageRef.current, {
        y: "0%",
        duration: 10.0,
        ease: "none",
      }, 54)

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <Navbar activeSection={isSkillsVisible ? 3 : 2} />
      <div ref={mainContainerRef} className="relative w-full h-screen overflow-hidden">
        <div 
          ref={blackBgRef} 
          className="absolute top-0 left-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden z-20"
        >
          <div className="absolute whitespace-nowrap text-white text-[5rem] md:text-[10rem] font-bodoni animate-marquee">
            EXPLORE MY WORK • EXPLORE MY WORK • EXPLORE MY WORK • EXPLORE MY WORK • 
            EXPLORE MY WORK • EXPLORE MY WORK • EXPLORE MY WORK • EXPLORE MY WORK • 
            EXPLORE MY WORK • EXPLORE MY WORK • EXPLORE MY WORK • EXPLORE MY WORK • 
            EXPLORE MY WORK • EXPLORE MY WORK • EXPLORE MY WORK • EXPLORE MY WORK •
          </div>
        </div>

        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-50"
          style={{ opacity: scrollDownOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-6 h-6 relative">
            <div className="absolute w-4 h-4 border-b-2 border-r-2 border-white transform rotate-45 translate-y-0 animate-scroll-down" />
          </div>
          <p className="text-white font-balthazar text-lg mt-3">Scroll Down</p>
        </motion.div>
        
        {/* Portfolio1 iamge */}
        <div 
          ref={portfolio1Ref} 
          className="absolute top-0 left-0 w-full h-screen bg-[#efeeec] overflow-hidden z-10"
        >
          <div className="p1imgdiv flex items-center">
            <img
              src={project1}
              alt="Project 1"
              className="w-auto h-[80%] object-cover"
            />
          </div>
          <div 
            ref={portfolio1TextRef} 
            className="absolute inset-0 flex items-center justify-end"
          >
            <div className="p1txt">
              <h2 className="text-black text-6xl/19 font-bold font-gotu">Award Winning<br/>Capstone Project,<br/>Introducing <span style={{ color: '#bd7afe' }}>Mine</span></h2>
            </div>
          </div>
        </div>
        
        {/* Portfolio2 iamge */}
        <div 
          ref={portfolio2Ref} 
          className="absolute top-0 left-0 w-full h-screen overflow-hidden visibility-hidden opacity-0 z-10"
        >
          <div className="p2imgdiv">
            <img
              src={project2}
              alt="Project 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            ref={portfolio2TextRef} 
            className="absolute inset-0 flex items-center justify-start pl-60"
          >
            <div className="p2txt">
              <h2 className="text-white text-5xl/16 font-bold font-gotu ">Made with late nights<br/>too much coffee<br/>and a lot of passion</h2>
            </div>
          </div>
        </div>
        
        {/* Portfolio3 image */}
        <div 
          ref={portfolio3Ref} 
          className="absolute top-0 left-0 w-full h-screen overflow-hidden visibility-hidden opacity-0 z-10"
        >
          <div className="w-full h-full">
            <img
              src={project3}
              alt="Project 3"
              className="w-full h-full object-cover object-right brightness-50"
            />
          </div>
          <div 
            ref={portfolio3TextRef} 
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <h2 className="text-white text-2xl/9 md:text-4xl/13 lg:text-5xl/15 font-bold text-center">
              2024 Auckland University<br/>Best Computer Science Capstone Project<br/>Community Impact Award Runner-Up
            </h2>
            
            <div className="flex justify-center items-center mt-8 space-x-8">
              <a href="https://github.com/uoa-compsci399-s2-2024/capstone-project-soju-boju" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-6xl hover:text-gray-400 transition-colors duration-300" />
              </a>
              <a href="https://www.capitalise.space/projects/673e95849df43e2d89e6e2ce" target="_blank" rel="noopener noreferrer">
                <GiGraduateCap className="text-white text-6xl hover:text-gray-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        
        {/* 3 other uni project */}
        <div 
          ref={secondBlackSectionRef} 
          className="absolute top-0 left-0 w-full h-screen bg-[#111111] flex flex-col items-center justify-center z-50"
        > 
        <h1 
          className=" text-5xl md:text-6xl  md:-mt-10 animate-neon font-tiltneon"
          style={{
            color: '#fff',
            textShadow: `
              0 0 2px #fff,
              0 0 5px #fff,
              0 0 10px #2f46fa,
              0 0 20px #2f46fa,
              0 0 30px #2f46fa,
              0 0 40px #2f46fa;
            `,
          }}
        >
          Other Projects
        </h1>



        {/* green square */}
        <div className="flex flex-col md:flex-row">
        <a href="https://github.com/tedrho119/Gamesaien-Apple-Game-Solver" target="_blank" rel="noopener noreferrer">
          <div 
            className="w-70 h-55 md:w-140 md:h-140 bg-[#1a1a1a] transform mt-5 md:mt-0 md:translate-y-25 md:-mr-10 relative z-0 transition-all duration-300 ease-in-out hover:scale-105 hover:z-10"
            style={{ 
              boxShadow: '0 0 20px rgba(143, 188, 143, 0.8), 0 0 40px rgba(143, 188, 143, 0.6), 0 0 80px rgba(143, 188, 143, 0.4)',
              border: '2px solid #8fbc8f',
              borderRadius: '20px',
            }}
          >
            <div 
              className="absolute inset-0 rounded-xl"
              style={{
                boxShadow: 'inset 0 0 10px rgba(143, 188, 143, 0.6), inset 0 0 20px rgba(143, 188, 143, 0.4)',
              }}
            ></div>
            <img
              src={lemon} // Replace with your imported lemon image
              alt="Connect 10 Game"
              className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(50%-20px)] object-cover rounded-t-xl"
              style={{ border: '2px solid #8fbc8f' }}
            />
            <h2 
              className="absolute top-[48%] md:top-[55%] left-5 text-white text-2xl md:text-5xl font-bold font-balthazar"
              style={{ 
                textShadow: '0 0 5px #8fbc8f, 0 0 10px #8fbc8f, 0 0 20px #8fbc8f',
              }}
            >
              Connect 10 Game
            </h2>
            {isnotMobile && (
              <h2 
                className="absolute top-[66%] left-5 right-5 text-white text-lg font-bold font-dosis"
                style={{ 
                  textShadow: '0 0 5px #8fbc8f, 0 0 10px #8fbc8f, 0 0 20px #8fbc8f',
                }}
              >
                A fun and interactive game where players connect 10 sums in a strategic manner. 
                Also with automation tools that use web scraping techniques and complex algorithms to solve this game faster than any human.
              </h2>
            )}
            
            <div className="absolute top-[68%] md:top-[88%] left-4 flex space-x-3 max-md:flex-wrap max-md:w-[70%] max-md:gap-y-2">
              <div 
                className="bg-[#8fbc8f] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                style={{ 
                  boxShadow: '0 0 10px #8fbc8f, 0 0 20px #8fbc8f',
                  border: '1px solid #8fbc8f',
                }}
              >
                JavaScript
              </div>
              <div 
                className="bg-[#8fbc8f] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                style={{ 
                  boxShadow: '0 0 10px #8fbc8f, 0 0 20px #8fbc8f',
                  border: '1px solid #8fbc8f',
                }}
              >
                Python
              </div>
              <div 
                className="bg-[#8fbc8f] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                style={{ 
                  boxShadow: '0 0 10px #8fbc8f, 0 0 20px #8fbc8f',
                  border: '1px solid #8fbc8f',
                }}
              >
                Selenium
              </div>
              <div 
                className="bg-[#8fbc8f] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                style={{ 
                  boxShadow: '0 0 10px #8fbc8f, 0 0 20px #8fbc8f',
                  border: '1px solid #8fbc8f',
                }}
              >
                PyAutoGUI
              </div>
            </div>
          </div>
        </a>

          {/* Purple Square */}
          <a href="https://github.com/UoA-CS-Sindhwani-CS235-S2-2023/cs235-2023-gameswebapp-assignment-gfen624_trho054_eale977" target="_blank" rel="noopener noreferrer">
            <div 
              className="w-70 h-55 md:w-140 md:h-140 md:w-140 md:h-140 bg-[#1a1a1a] transform mt-5 md:mt-0  md:translate-y-15 relative z-1 transition-all duration-300 ease-in-out hover:z-10 hover:scale-105"
              style={{ 
                boxShadow: '0 0 20px rgba(189, 122, 254, 0.8), 0 0 40px rgba(189, 122, 254, 0.6), 0 0 80px rgba(189, 122, 254, 0.4)',
                border: '2px solid #bd7afe',
                borderRadius: '20px',
              }}
            >
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  boxShadow: 'inset 0 0 10px rgba(189, 122, 254, 0.6), inset 0 0 20px rgba(189, 122, 254, 0.4)',
                }}
              ></div>
              <img
                src={project4}
                alt="Project 4"
                className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(50%-20px)] object-cover rounded-t-xl"
                style={{ border: '2px solid #bd7afe' }}
              />
              <h2 
                className="absolute top-[48%] md:top-[55%] left-5 text-white text-2xl md:text-5xl font-bold font-balthazar"
                style={{ 
                  textShadow: '0 0 5px #bd7afe, 0 0 10px #bd7afe, 0 0 20px #bd7afe',
                }}
              >
                Steam Webapp Replica
              </h2>
              {isnotMobile && (
                <h2 
                  className="absolute top-[66%] left-5 right-5 text-white text-lg font-bold font-dosis"
                  style={{ 
                    textShadow: '0 0 5px #bd7afe, 0 0 10px #bd7afe, 0 0 20px #bd7afe',
                  }}
                >
                  A Flask-based web application that allows users to browse and explore games. 
                  User can filter games by genres, publishers, and other criteria. 
                  This application includes a robust testing suite powered by pytest.
                </h2>
              )}
              
              <div className="absolute top-[68%] md:top-[88%] left-4 flex space-x-3 max-md:flex-wrap max-md:w-[70%] max-md:gap-y-2">
                <div 
                  className="bg-[#9a4dff] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                  style={{ 
                    boxShadow: '0 0 10px #9a4dff, 0 0 20px #9a4dff',
                    border: '1px solid #bd7afe',
                  }}
                >
                  Python
                </div>
                <div 
                  className="bg-[#9a4dff] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                  style={{ 
                    boxShadow: '0 0 10px #9a4dff, 0 0 20px #9a4dff',
                    border: '1px solid #bd7afe',
                  }}
                >
                  HTML/CSS
                </div>
                <div 
                  className="bg-[#9a4dff] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                  style={{ 
                    boxShadow: '0 0 10px #9a4dff, 0 0 20px #9a4dff',
                    border: '1px solid #bd7afe',
                  }}
                >
                  Flask
                </div>
                <div 
                  className="bg-[#9a4dff] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                  style={{ 
                    boxShadow: '0 0 10px #9a4dff, 0 0 20px #9a4dff',
                    border: '1px solid #bd7afe',
                  }}
                >
                  Pytest
                </div>
              </div>
            </div>
          </a>
            
          {/* Yellow Square */}
          <a href="https://github.com/CS331-2024/project-project-34" target="_blank" rel="noopener noreferrer">
            <div 
              className="w-70 h-55 md:w-140 md:h-140 md:w-140 md:h-140 bg-[#1a1a1a] transform mt-5 md:mt-0 md:translate-y-25 md:-ml-10 relative z-0 transition-all duration-300 ease-in-out hover:z-10 hover:scale-105"
              style={{ 
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 215, 0, 0.4)',
                border: '2px solid #ffd700',
                borderRadius: '20px',
              }}
            >
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  boxShadow: 'inset 0 0 10px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.4)',
                }}
              ></div>
              <img
                src={project5}
                alt="Project 5"
                className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(50%-20px)] object-cover rounded-t-xl"
                style={{ border: '2px solid #ffd700' }}
              />
              <h2 
                className="absolute top-[48%] md:top-[55%] left-5 text-white text-2xl md:text-5xl font-bold font-balthazar"
                style={{ 
                  textShadow: '0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 20px #ffd700',
                }}
              >
                Concert Booking Service
              </h2>
              {isnotMobile && (
                <h2 
                  className="absolute top-[66%] left-5 right-5 text-white text-lg font-bold font-dosis"
                  style={{ 
                    textShadow: '0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 20px #ffd700',
                  }}
                >
                  A scalable web service designed for booking concert ticket.
                  The service supports three pricing tiers, allows users to view concert details, 
                  check seat availability, and make reservation, including authentication.
                </h2>
              )}
              
              <div className="absolute top-[68%] md:top-[88%] left-4 flex space-x-3 max-md:flex-wrap max-md:w-[70%] max-md:gap-y-2">
                <div 
                  className="bg-[#e6b800] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                  style={{ 
                    boxShadow: '0 0 10px #e6b800, 0 0 20px #e6b800',
                    border: '1px solid #ffd700',
                  }}
                >
                  Java
                </div>
                <div 
                  className="bg-[#e6b800] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                  style={{ 
                    boxShadow: '0 0 10px #e6b800, 0 0 20px #e6b800',
                    border: '1px solid #ffd700',
                  }}
                >
                  JavaScript
                </div>
                <div 
                  className="bg-[#e6b800] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu"
                  style={{ 
                    boxShadow: '0 0 10px #e6b800, 0 0 20px #e6b800',
                    border: '1px solid #ffd700',
                  }}
                >
                  HTML/CSS
                </div>
                <div 
                  className="bg-[#e6b800] text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-3xl font-bold font-gotu whitespace-nowrap"
                  style={{ 
                    boxShadow: '0 0 10px #e6b800, 0 0 20px #e6b800',
                    border: '1px solid #ffd700',
                  }}
                >
                  JAX-RS
                </div>
              </div>

            </div>
            </a>
        </div>
      </div>

        {/* skill page */}
        <div 
          ref={skillPageRef}
          id="skills-section"
          className="absolute top-0 left-0 w-full h-screen bg-[#1c1c1c] flex flex-col items-center justify-center z-60"
        >
          {/* Title */}
          <h2 className="text-white text-4xl md:text-6xl font-bold font-balthazar mb-4">
            My Skills
          </h2>
          
          {/* Short description */}
          <p className="text-gray-300 text-sm md:text-lg font-dosis mb-12 text-center max-md:pl-3 max-md:pr-3">
            As a recent graduate, I may not have deep expertise in every area, but I have a solid foundation in a wide range of technologies and tools.
          </p>

          {/* Neuromorphic grid of skills */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 items-center justify-center">
            {/* Python */}
            <div 
              className="w-42 h-25 md:w-72 md:h-40 rounded-[30px] md:rounded-[52px] max-md:mb-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                background: "#1c1c1c",
                boxShadow: "12px 12px 20px #191919, -12px -12px 20px #1f1f1f",
              }}
            >
              <FaPython className="text-white text-7xl mb-2" />
              <p className="text-white text-lg font-dosis">Python</p>
            </div>

            {/* Java */}
            <div 
              className="w-42 h-25 md:w-72 md:h-40 rounded-[30px] md:rounded-[52px] max-md:mb-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                background: "#1c1c1c",
                boxShadow: "12px 12px 20px #191919, -12px -12px 20px #1f1f1f",
              }}
            >
              <FaJava className="text-white text-7xl mb-2" />
              <p className="text-white text-lg font-dosis">Java</p>
            </div>

            {/* JavaScript */}
            <div 
              className="w-42 h-25 md:w-72 md:h-40 rounded-[30px] md:rounded-[52px] max-md:mb-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                background: "#1c1c1c",
                boxShadow: "12px 12px 20px #191919, -12px -12px 20px #1f1f1f",
              }}
            >
              <FaJs className="text-white text-7xl mb-2" />
              <p className="text-white text-lg font-dosis">JavaScript</p>
            </div>

            {/* React Native */}
            <div 
              className="w-42 h-25 md:w-72 md:h-40 rounded-[30px] md:rounded-[52px] max-md:mb-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                background: "#1c1c1c",
                boxShadow: "12px 12px 20px #191919, -12px -12px 20px #1f1f1f",
              }}
            >
              <FaReact className="text-white text-7xl mb-2" />
              <p className="text-white text-lg font-dosis">React Native</p>
            </div>

            {/* HTML */}
            <div 
              className="w-42 h-25 md:w-72 md:h-40 rounded-[30px] md:rounded-[52px] max-md:mb-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                background: "#1c1c1c",
                boxShadow: "12px 12px 20px #191919, -12px -12px 20px #1f1f1f",
              }}
            >
              <FaHtml5 className="text-white text-7xl mb-2" />
              <p className="text-white text-lg font-dosis">HTML</p>
            </div>

            {/* C */}
            <div 
              className="w-42 h-25 md:w-72 md:h-40 rounded-[30px] md:rounded-[52px] max-md:mb-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                background: "#1c1c1c",
                boxShadow: "12px 12px 20px #191919, -12px -12px 20px #1f1f1f",
              }}
            >
              <SiC className="text-white text-7xl mb-2" />
              <p className="text-white text-lg font-dosis">C</p>
            </div>

            {/* Premiere Pro */}
            <a 
              href="https://www.instagram.com/hustlers_office/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-42 h-25 md:w-72 md:h-40 rounded-[30px] md:rounded-[52px] max-md:mb-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 group"
              style={{
                background: "#1c1c1c",
                boxShadow: "12px 12px 20px #191919, -12px -12px 20px #1f1f1f",
              }}
            >
              {/* Premiere Pro Icon */}
              <SiAdobepremierepro className="text-white text-7xl mb-2" />

              {/* Text and Instagram Logo */}
              <div className="flex items-center space-x-2">
                <p className="text-white text-lg font-dosis">Premiere Pro</p>
                <SiInstagram className="text-white text-lg hover:text-pink-500 transition-colors duration-300" />
              </div>
            </a>

            {/* Figma */}
            <div 
              className="w-42 h-25 md:w-72 md:h-40 rounded-[30px] md:rounded-[52px] max-md:mb-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                background: "#1c1c1c",
                boxShadow: "12px 12px 20px #191919, -12px -12px 20px #1f1f1f",
              }}
            >
              <SiFigma className="text-white text-7xl mb-2" />
              <p className="text-white text-lg font-dosis">Figma</p>
            </div>

            {/* Selenium */}
            <div 
              className="w-42 h-25 md:w-72 md:h-40 rounded-[30px] md:rounded-[52px] max-md:translate-x-1/2 max-md:mb-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                background: "#1c1c1c",
                boxShadow: "12px 12px 20px #191919, -12px -12px 20px #1f1f1f",
              }}
            >
              <SiSelenium className="text-white text-7xl mb-2" />
              <p className="text-white text-lg font-dosis">Selenium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;