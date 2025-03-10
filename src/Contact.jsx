import React, { useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const [isError, setIsError] = useState(false); // Track form submission errors

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(e.target); // Get form data

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json(); // Parse JSON response

      if (result.success) {
        setIsSubmitted(true); // Show success message
        setIsError(false);
      } else {
        setIsError(true); // Show error message
      }
    } catch (error) {
      setIsError(true); // Show error message if fetch fails
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1c1c1c]">
      <Navbar activeSection={4} />

      {/* Responsive Layout - Stack on mobile, side by side on desktop */}
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Top/Left Side - Visual Background */}
        <div 
          className="w-full md:w-1/2 h-1/3 md:h-full bg-gradient-to-t md:bg-gradient-to-r from-[#1c1c1c] to-[#2d2d2d] flex items-end md:items-center justify-center pb-8 md:pb-0" // Align bottom on mobile, center on desktop
        >
          <motion.h2 
            className="text-white text-5xl md:text-6xl font-bold font-balthazar"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Let's Connect
          </motion.h2>
        </div>

        {/* Bottom/Right Side - Background with Contact Form */}
        <div 
          className="w-full md:w-1/2 h-2/3 md:h-full bg-[#1c1c1c] flex items-start md:items-center justify-center pt-8 md:pt-0" // Align top on mobile, center on desktop
        >
          <motion.div 
            className="w-[80%] md:w-96 p-6 md:p-8 bg-[#2d2d2d] rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {isSubmitted ? (
              // Success Message
              <div className="text-center">
                <h2 className="text-white text-2xl font-bold font-balthazar mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-300 text-lg font-dosis">
                  Your message has been sent successfully.
                </p>
              </div>
            ) : (
              // Contact Form
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Web3Forms Hidden Inputs */}
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="02666497-769c-4f91-9aad-84165f4826fb" // Replace with your Web3Forms Public Access Key
                />
                <input 
                  type="hidden" 
                  name="subject" 
                  value="New Message from Portfolio Contact Form" 
                />

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-dosis mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full p-3 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd7afe]"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-dosis mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full p-3 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd7afe]"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-dosis mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4"
                    className="w-full p-3 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd7afe]"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full py-3 bg-[#bd7afe] text-white font-dosis font-bold rounded-lg hover:bg-[#9a4dff] transition-colors duration-300 cursor-pointer"
                >
                  Send Message
                </button>

                {/* Error Message */}
                {isError && (
                  <p className="text-red-500 text-sm font-dosis mt-4">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;