import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 h-[calc(100vh-70px)] bg-gradient-to-r from-[#0a0a0a] to-[#121212] px-4 lg:px-24 py-8">
        
        {/* Left Section: Headline */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#217bfe] to-[#e55571] text-clip text-transparent bg-clip-text">
            PK AI
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
            Supercharge your creativity and productivity
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl px-6 lg:px-12">
            PK AI aims to solve every problem and offer possible solutions for every task using cutting-edge Gemini technology.
          </p>
          <Link to="/dashboard" className="bg-gradient-to-r from-[#217bfe] to-[#e55571] text-white rounded-lg p-3 w-48 text-center text-lg font-medium transition-transform transform hover:scale-105 hover:bg-sky-400 shadow-md">
            Get Started
          </Link>
        </div>
        
        {/* Right Section: Bot Animation */}
        <div className="flex flex-1 items-center justify-center relative">
          <div className="flex flex-col items-center animate-pulse">
            <img src="/bot.png" alt="bot" className="w-40 h-40 mb-4" />
            <div className="flex items-center space-x-4">
              <img src="/bot.png" alt="bot" className="w-8 h-8 animate-ping" />
              <TypeAnimation
                sequence={[
                  'Human: What is AI?',
                  2000, // wait before next text
                  'PKBot: AI is a technology...',
                  2000,
                  'Human: What is human intelligence?',
                  2000,
                  'PKBot: AI is mimicking human intelligence.',
                  2000
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                omitDeletionAnimation={true}
                className="text-lg text-gray-300 font-medium animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-center gap-8 py-4 bg-[#121212] text-gray-400">
        <Link to="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link>
        <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
        <Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
      </div>
    </>
  );
};

export default Homepage;
