import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Import burger and close icons

const Navbar = ({ activeSection }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage burger menu visibility

  const handleAboutClick = () => {
    navigate("/");
    setIsMenuOpen(false); // Close the menu
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  const handleProjectsClick = () => {
    navigate("/projects");
    setIsMenuOpen(false); // Close the menu
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleSkillsClick = () => {
    navigate("/projects");
    setIsMenuOpen(false); // Close the menu
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[150] flex justify-center items-center p-8">
      <div className="w-full max-w-6xl flex justify-between items-center">
        {/* Burger Menu Icon (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl z-[150]"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Logo (always centered) */}
        <div className="md:hidden text-white font-gotu text-2xl absolute left-1/2 transform -translate-x-1/2">
          TED.R
        </div>

        {/* Navigation Links (visible on medium and larger screens) */}
        <div className="hidden md:flex justify-center items-center w-full gap-[35%]">
          <div className="w-full max-w-6xl flex justify-evenly items-center">
            {/* ABOUT Button */}
            <div className="relative">
              <button
                onClick={handleAboutClick}
                className="text-white font-balthazar text-lg uppercase cursor-pointer"
              >
                ABOUT
              </button>
              {/* Underline for ABOUT (activeSection === 1) */}
              {activeSection === 1 && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>

            {/* PROJECT Button */}
            <div className="relative">
              <button
                onClick={handleProjectsClick}
                className="text-white font-balthazar text-lg uppercase cursor-pointer"
              >
                PROJECT
              </button>
              {/* Underline for PROJECT (activeSection === 2) */}
              {activeSection === 2 && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>

            {/* Logo */}
            <div className="text-white font-gotu text-4xl">TED.R</div>

            {/* SKILLS Button */}
            <div className="relative">
              <button
                onClick={handleSkillsClick}
                className="text-white font-balthazar text-lg uppercase cursor-pointer"
              >
                SKILLS
              </button>
              {/* Underline for SKILLS (activeSection === 3) */}
              {activeSection === 3 && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>

            {/* CONTACT Button */}
            <div className="relative">
              <button
                onClick={handleContactClick}
                className="text-white font-balthazar text-lg uppercase cursor-pointer"
              >
                CONTACT
              </button>
              {activeSection === 4 && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
              {/* Underline for CONTACT (activeSection === 4) */}
              {activeSection === 4 && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Burger Menu Popup (visible on small screens when menu is open) */}
        {isMenuOpen && (
          <motion.div
            className="fixed top-24 left-0 right-0 bg-[#111111] bg-opacity-95 h-[calc(100vh-6rem)] flex flex-col items-center justify-start space-y-10 p-8 rounded-t-3xl z-[150]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative">
              <button
                onClick={handleAboutClick}
                className="text-white font-balthazar text-2xl uppercase"
              >
                ABOUT
              </button>
              {/* Underline for ABOUT (activeSection === 1) */}
              {activeSection === 1 && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>
            <div className="relative">
              <button
                onClick={handleProjectsClick}
                className="text-white font-balthazar text-2xl uppercase"
              >
                PROJECT
              </button>
              {/* Underline for PROJECT (activeSection === 2) */}
              {activeSection === 2 && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>
            <div className="relative">
              <button
                onClick={handleSkillsClick}
                className="text-white font-balthazar text-2xl uppercase"
              >
                SKILLS
              </button>
              {activeSection === 3 && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>
            <div className="relative">
              <button
                onClick={handleContactClick}
                className="text-white font-balthazar text-2xl uppercase"
              >
                CONTACT
              </button>
              {/* Underline for CONTACT (activeSection === 4) */}
              {activeSection === 4 && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;