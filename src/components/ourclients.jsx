import React, { useState } from "react";
import { motion } from "framer-motion";
import Vectorback from "../assets/Vector-back.png";
import Vector from "../assets/Vector.png";
import circuit from "../assets/capabilites-bg.png";
import Arrowleft from "../assets/arrowleft.png";
import pg from "../assets/clients-logo/pg.png"
import adk from "../assets/clients-logo/adk.png"
import user from "../assets/clients-logo/user.png"
import eximio from "../assets/clients-logo/eximio.png"
import qcp from "../assets/clients-logo/qcp.png"

const slideDown = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideRight = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut", delay } },
});

const slideLeft = (delay = 0) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut", delay } },
});

const OurClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Guru",
      company: "Eximio (LondonTradingIndex)",
      text: "As our implementation partner, VibeXio delivered the LondonTradingIndex project with precision and speed. Their design quality, communication, and execution made the entire process seamless. A highly reliable team we trust for critical projects.",
      avatar: <img src={eximio} className=" w-[70px] h-[70px]" />
    },
    {
      id: 2,
      name: "Praveen",
      company: "Qbic Catalyst",
      text: "Working with VibeXio on OCR-based automation was seamless. They delivered a zero-error Excel extraction tool that saved us hours of manual work. Great collaboration and technical expertise throughout.",
      avatar: <img src={qcp} className=" w-[70px] h-[70px]" />
    },
    {
      id: 3,
      name: "Mohamad Ansar",
      company: "",
      text: "We partnered with VibeXio to create an NLP model for South Indian languages. Their solution handled both voice and text recognition with precision. It's a game-changer for our digital accessibility plans",
      avatar: <img src={user} className=" w-[70px] h-[70px]" />
    },
    {
      id: 4,
      name: "Ganesh Babu",
      company: "PageCreationz",
      text: "Our long-term partnership with VibeXio has led to several successful websites. Their consistency, scalable design systems, and strong backend support have made them our go-to digital team.",
      avatar: <img src={pg} className=" w-[70px] h-[70px]" />
    },
    {
      id: 5,
      name: "Kalaiarasi",
      company: "ADK",
      text: "VibeXio played a pivotal role in accelerating our digital transformation roadmap. From building our internal garment lifecycle dashboards to integrating supply chain intelligence, their team brought technical depth and design clarity. Their B2B understanding of fashion-tech nuances helped us scale operations with confidence and speed.",
      avatar: <img src={adk} className=" w-[70px] h-[70px]" />
    },
  ];

  // Simple navigation handlers
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  // Get exactly 2 cards for small laptop (lg)
  const getTwoCards = () => {
    const cards = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      cards.push(testimonials[index]);
    }
    return cards;
  };

  // Get exactly 3 cards for larger screens (xl+)
  const getThreeCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      cards.push(testimonials[index]);
    }
    return cards;
  };

  const twoCards = getTwoCards();
  const threeCards = getThreeCards();

  return (
    <div className="relative w-full bg-[#121212] text-white overflow-hidden">
      <motion.div
        className="w-full h-full relative z-10 py-6 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Heading Section - More breathing room */}
        <motion.div
          className="text-center lg:text-left 
  mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-10
  max-w-full mx-auto lg:mx-0 xl:px-[13%] lg:px-[9%] px-[5%]"
          variants={slideDown}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-5xl 
  font-normal leading-relaxed px-2 lg:px-0 mb-6 sm:mb-8 md:mb-10">
            What Our Clients Says!
          </h2>

          <div className="flex items-center justify-center lg:justify-start mt-6 sm:mt-8 md:mt-10 gap-[5px]">
            {/* Main Line */}
            <span className="h-[4px] w-[440px] bg-[#5B7C99] rounded-full opacity-90"></span>

            {/* First Small Bar */}
            <span className="hidden lg:inline-block h-[4px] w-[20px] bg-[#5B7C99] rounded-full opacity-90"></span>

            {/* Second Small Bar */}
            <span className="hidden lg:inline-block h-[4px] w-[20px] bg-[#5B7C99] rounded-full opacity-90"></span>
          </div>


        </motion.div>

        {/* Main Testimonial Section - Better spacing */}
        <motion.div
          className="mt-5 xs:mt-5 sm:mt-5 md:mt-8 lg:mt-10 xl:mt-15"
          variants={slideRight(0)}
        >
          {/* Mobile & Tablet - Single Card (up to md) */}
          <div className="block lg:hidden">
            {/* Navigation Buttons - More space */}
            <div className="flex justify-center gap-8 sm:gap-10 mb-10 sm:mb-12 md:mb-14">
              <button
                onClick={goToPrevious}
                className="p-3 sm:p-4 hover:bg-white/10 rounded-full transition-all duration-300 
                border border-white/20 hover:border-white/40 hover:scale-105"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white sm:w-7 sm:h-7">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="p-3 sm:p-4 hover:bg-white/10 rounded-full transition-all duration-300 
                border border-white/20 hover:border-white/40 hover:scale-105"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white sm:w-7 sm:h-7">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Single Card Container - Better responsiveness */}
            <div className="flex justify-center px-4 xs:px-6 sm:px-8">
              <div className="w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-[420px] relative">
                <div className="pt-10 xs:pt-12 sm:pt-14 md:pt-16">
                  {/* Profile Picture - Mobile/Tablet */}
                  <div
                    className="absolute bg-gradient-to-br from-[#EDECE9] to-[#d4d3d0] 
                    w-[55px] h-[55px] xs:w-[65px] xs:h-[65px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px]
                    rounded-[14px] xs:rounded-[16px] sm:rounded-[18px] md:rounded-[20px]
                    top-0 right-[20px] xs:right-[25px] sm:right-[30px] md:right-[35px]
                    shadow-[0_6px_20px_rgba(237,236,233,0.4),0_8px_30px_rgba(0,0,0,0.3)] 
                    z-30 border border-white/50
                    flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-[#121212] font-bold 
                    text-lg xs:text-xl sm:text-2xl md:text-3xl">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>

                  {/* Main Card - Mobile/Tablet - RESPONSIVE HEIGHTS */}
                  <div
                    className="relative backdrop-blur-lg bg-[#2a2a2a]/90 
                    rounded-[20px] xs:rounded-[22px] sm:rounded-[24px] md:rounded-[28px]
                    p-6 xs:p-7 sm:p-8 md:p-9 
                    pt-8 xs:pt-9 sm:pt-10 md:pt-11
                    
                    border border-white/10 flex flex-col justify-between
                    transform hover:scale-[1.02] transition-all duration-300"
                    style={{
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-start mb-4 sm:mb-5">
                        <img src={Vector} alt="Quote"
                          className="w-5 h-4 xs:w-6 xs:h-5 sm:w-7 sm:h-6 md:w-8 md:h-7 
                        opacity-40 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                      </div>

                      {/* RESPONSIVE TEXT WITH OVERFLOW HANDLING */}
                      <div className="text-[#EDECE9] 
                      text-sm xs:text-sm sm:text-base md:text-lg
                      leading-[1.4] xs:leading-[1.5] sm:leading-[1.6] md:leading-relaxed 
                      tracking-[-0.1px] font-avenir text-justify 
                      mb-4
                      overflow-hidden break-words hyphens-auto"
                        style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                        {testimonials[currentIndex].text}
                      </div>
                      <div className="flex justify-end mb-4 xl:mb-5 2xl:mb-6">
                        <img src={Vectorback} alt="Quote"
                          className="w-6 h-5 xl:w-7 xl:h-6 2xl:w-8 2xl:h-7
                        opacity-40 flex-shrink-0" />
                      </div>

                    </div>

                    {/* FIXED FOOTER */}
                    <div className="flex items-end justify-between mt-auto pt-3 sm:pt-4 border-t border-white/10">
                      <div className="min-w-0 flex-1 mr-3">
                        <strong className="text-[#5B7C99] 
                        text-sm xs:text-sm sm:text-base md:text-lg 
                        block truncate leading-tight">
                          — {testimonials[currentIndex].name}
                        </strong>
                        <span className="text-[#5B7C99]
                        text-xs xs:text-xs sm:text-sm md:text-base 
                         block truncate mt-1 leading-tight">
                          {testimonials[currentIndex].company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Laptop - 2 Cards (lg only) - RESPONSIVE DESIGN */}
          <div className="hidden lg:block xl:hidden">
            <div className="flex items-center justify-center gap-4 lg:gap-6">
              {/* Left Arrow */}
              <button
                onClick={goToPrevious}
                className="flex-shrink-0 p-3 lg:p-4 hover:bg-white/10 rounded-full transition-all duration-300 
                border border-white/20 hover:border-white/40 hover:scale-110"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white lg:w-6 lg:h-6">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Two Cards Container - RESPONSIVE CONTAINER */}
              <div className="flex gap-4 lg:gap-6 w-full max-w-[700px] lg:max-w-[800px]">
                {twoCards.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${currentIndex}-${index}`}
                    className="flex-1 min-w-0 w-1/2 relative pt-12 lg:pt-14"
                  >
                    {/* Profile Picture - RESPONSIVE SIZE */}
                    <div
                      className="absolute bg-gradient-to-br from-[#EDECE9] to-[#d4d3d0] 
                      w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] 
                      rounded-[16px] lg:rounded-[18px]
                      top-0 right-[20px] lg:right-[25px]
                      shadow-[0_6px_25px_rgba(237,236,233,0.4),0_10px_35px_rgba(0,0,0,0.3)] 
                      z-30 border-2 border-white/50
                      flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
                    >
                      <span className="text-[#121212] font-bold text-2xl lg:text-3xl">
                        {testimonial.avatar}
                      </span>
                    </div>

                    {/* Main Card - RESPONSIVE DIMENSIONS */}
                    <div
                      className="relative backdrop-blur-lg bg-[#2a2a2a]/90 
                      rounded-[22px] lg:rounded-[26px] 
                      p-4 lg:p-6 pt-8 lg:pt-10
                   h-[440px]
                      border border-white/10 flex flex-col justify-between
                      transform hover:scale-[1.02] transition-all duration-300"
                      style={{
                        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {/* Content Section - OVERFLOW HANDLING */}
                      <div className="flex-1 flex flex-col overflow-hidden">
                        <div className="flex items-start mb-4 lg:mb-5">
                          <img src={Vector} alt="Quote"
                            className="w-6 h-5 lg:w-7 lg:h-6 opacity-40 mr-3 lg:mr-4 mt-1 flex-shrink-0" />
                        </div>

                        {/* RESPONSIVE TEXT WITH PROPER OVERFLOW */}
                        <div className="text-[#EDECE9] 
                        text-sm lg:text-base
                        leading-[1.4] lg:leading-relaxed 
                        tracking-[-0.1px] lg:tracking-[-0.2px] 
                        font-avenir text-justify 
                        flex-1 mb-4 lg:mb-6 
                        overflow-hidden break-words hyphens-auto"
                          style={{
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            display: '-webkit-box',
                            WebkitLineClamp: '8',
                            WebkitBoxOrient: 'vertical'
                          }}>
                          {testimonial.text}
                        </div>
                        <div className="flex justify-end mb-4 xl:mb-5 2xl:mb-6">
                          <img src={Vectorback} alt="Quote"
                            className="w-6 h-5 xl:w-7 xl:h-6 2xl:w-8 2xl:h-7
                        opacity-40 flex-shrink-0" />
                        </div>
                      </div>

                      {/* Footer Section - FIXED POSITION */}
                      <div className="flex items-end justify-between mt-auto pt-3 lg:pt-4 border-t border-white/10">
                        <div className="min-w-0 flex-1 mr-2 lg:mr-3">
                          <strong className="text-[#5B7C99] text-sm lg:text-base block truncate leading-tight">
                            — {testimonial.name}
                          </strong>
                          <span className="text-[#5B7C99] text-xs lg:text-sm  block truncate mt-1 leading-tight">
                            {testimonial.company}
                          </span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={goToNext}
                className="flex-shrink-0 p-3 lg:p-4 hover:bg-white/10 rounded-full transition-all duration-300 
                border border-white/20 hover:border-white/40 hover:scale-110"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white lg:w-6 lg:h-6">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Large Desktop - 3 Cards (xl and above) - FULLY RESPONSIVE */}
          <div className="hidden xl:block">
            <div className="flex items-center justify-center gap-4 xl:gap-6 2xl:gap-8">
              {/* Left Arrow */}
              <button
                onClick={goToPrevious}
                className="flex-shrink-0 p-4 xl:p-5 hover:bg-white/10 rounded-full transition-all duration-300 
                border border-white/20 hover:border-white/40 hover:scale-110"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white xl:w-7 xl:h-7 2xl:w-8 2xl:h-8">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Three Cards Container - RESPONSIVE GRID */}
              <div className="flex gap-4 xl:gap-6 2xl:gap-8 w-full
              max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1300px]">
                {threeCards.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${currentIndex}-${index}`}
                    className="flex-1 min-w-0 w-1/3 relative pt-12 xl:pt-14 2xl:pt-16"
                  >
                    {/* Profile Picture - RESPONSIVE SCALING */}
                    <div
                      className="absolute bg-gradient-to-br from-[#EDECE9] to-[#d4d3d0] 
                      w-[75px] h-[75px] xl:w-[85px] xl:h-[85px] 2xl:w-[95px] 2xl:h-[95px]
                      rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]
                      top-0 right-[20px] xl:right-[25px] 2xl:right-[30px]
                      shadow-[0_6px_25px_rgba(237,236,233,0.4),0_10px_35px_rgba(0,0,0,0.3)] 
                      z-30 border-2 border-white/50
                      flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
                    >
                      <span className="text-[#121212] font-bold text-2xl xl:text-3xl 2xl:text-4xl">
                        {testimonial.avatar}
                      </span>
                    </div>

                    {/* Main Card - ADAPTIVE DIMENSIONS */}
                    <div
                      className="relative backdrop-blur-lg bg-[#2a2a2a]/90 
                      rounded-[24px] xl:rounded-[28px] 2xl:rounded-[32px]
                      p-5 xl:p-6 2xl:p-8 pt-8 xl:pt-10 2xl:pt-12
                      h-[480px]
                      border border-white/10 flex flex-col justify-between
                      transform hover:scale-[1.02] transition-all duration-300"
                      style={{
                        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {/* Content Section - CONTROLLED OVERFLOW */}
                      <div className="flex-1 flex flex-col overflow-hidden">
                        <div className="flex items-start mb-4 xl:mb-5 2xl:mb-6">
                          <img src={Vector} alt="Quote"
                            className="w-6 h-5 xl:w-7 xl:h-6 2xl:w-8 2xl:h-7
                          opacity-40 mr-3 xl:mr-4 mt-1 flex-shrink-0" />
                        </div>

                        {/* FULLY RESPONSIVE TEXT WITH CLIPPING */}
                        <div className="text-[#EDECE9] 
                        text-sm xl:text-[15px]
                        leading-[1.4] xl:leading-[1.5] 2xl:leading-relaxed 
                        tracking-[-0.1px] xl:tracking-[-0.2px] 
                        font-avenir text-justify 
                        flex-1 mb-4 xl:mb-5 2xl:mb-6
                        overflow-hidden break-words hyphens-auto"
                          style={{
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            display: '-webkit-box',
                            WebkitLineClamp: '7',
                            WebkitBoxOrient: 'vertical'
                          }}>
                          {testimonial.text}
                        </div>
                        <div className="flex justify-end mb-4 xl:mb-5 2xl:mb-6">
                          <img src={Vectorback} alt="Quote"
                            className="w-6 h-5 xl:w-7 xl:h-6 2xl:w-8 2xl:h-7
                        opacity-40 flex-shrink-0" />
                        </div>
                      </div>

                      {/* Footer Section - ALWAYS VISIBLE */}
                      <div className="flex items-end justify-between mt-auto pt-3 xl:pt-4 2xl:pt-5 border-t border-white/10">
                        <div className="min-w-0 flex-1 mr-2 xl:mr-3">
                          <strong className="text-[#5B7C99] text-sm xl:text-base 2xl:text-lg block truncate leading-tight">
                            — {testimonial.name}
                          </strong>
                          <span className="text-[#5B7C99] text-xs xl:text-sm 2xl:text-base  block truncate mt-1 leading-tight">
                            {testimonial.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={goToNext}
                className="flex-shrink-0 p-4 xl:p-5 hover:bg-white/10 rounded-full transition-all duration-300 
                border border-white/20 hover:border-white/40 hover:scale-110"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white xl:w-7 xl:h-7 2xl:w-8 2xl:h-8">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Slide Indicators - More space */}

      </motion.div>

      {/* Background Circuit Image - Better positioning with safe distance from top */}
      <motion.div
        className="hidden sm:block absolute 
        top-[15%] sm:top-[12%] md:top-[10%] lg:top-[8%] xl:top-[6%] 2xl:top-[5%]
        right-[-25%] sm:right-[-20%] md:right-[-15%] lg:right-[-10%] xl:right-[-5%] 2xl:right-[0%]
        w-[180px] sm:w-[220px] md:w-[260px] lg:w-[350px] xl:w-[450px] 2xl:w-[550px]
        opacity-[0.2] sm:opacity-[0.3] md:opacity-[0.4] lg:opacity-[0.5] xl:opacity-[0.6] 2xl:opacity-[0.7]
        pointer-events-none z-0"
        variants={slideLeft(0.1)}
      >
        <img src={circuit} alt="Circuit Design" className="w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default OurClients;