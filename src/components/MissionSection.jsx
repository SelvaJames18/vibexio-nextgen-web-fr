import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInLeft, popUp, slideInFromRight, slideInFromTopBG } from "./varients";
import brainbg from "../assets/brain-bg.png";

const dotColors = [
  "#EDECE9",
  "#EDECE9",
  "#EDECE9",
  "#EDECE9",
  "#C9D2D7",
  "#C9D2D7",
  "#A7A8A8",
  "#9A8DA0",
  "#D6BF7C",
];

const MissionSection = () => {
  return (
    <section className="relative mb-[0px] md:mb-[-50px] w-screen h-full
    bg-[#EDECE9] overflow-hidden font-['Avenir LT Std'] text-[#121212] 
    xl:px-[13%] lg:px-[9%] px-[5%] p-[6%] lg:p-[10%] xl:p-[10%] flex flex-col items-start justify-start">

      {/* Watermark Animation - Responsive */}
      <motion.img
        src={brainbg}
        alt="Mission Brain"
        className="absolute pointer-events-none select-none
          w-[75%] max-w-[500px] top-[25%] opacity-5 right-[10%]
          sm:w-[65%] sm:max-w-[550px] sm:top-[22%] sm:opacity-6 sm:right-[12%]
          md:w-[50%] md:max-w-[580px] md:top-[15%] md:opacity-6 md:right-[10%]
          lg:w-[45%] lg:max-w-[600px] lg:top-[12%] lg:opacity-6 lg:right-[12%]
          xl:w-[40%] xl:top-[10%] xl:opacity-6 xl:right-[calc(15%-30px)]"
        variants={slideInFromTopBG}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
        transition={{ delay: 0.2 }}
      />

      {/* Heading - Responsive */}
      <motion.h1
        className="max-w-[900px] font-['Kollektif san serif'] leading-[1.2] tracking-tight mb-6 md:mb-8 xl:mb-[3%] font-semibold
          text-[clamp(24px,5.5vw,32px)
          sm:text-[clamp(28px,5vw,36px)] 
          md:text-[clamp(32px,4.5vw,42px)] 
          lg:text-[clamp(38px,4vw,48px)]  lg:whitespace-nowrap
          xl:text-[clamp(28px,6vw,60px)]  xl:whitespace-nowrap"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      >Building Tomorrow, Today With AI.
      </motion.h1>

      {/* Subheading - Responsive */}
      <div className="">
        <motion.p
          className="max-w-[1000px] leading-[1.6] sm:leading-[1.7] capitalize mb-8 md:mb-12 font-normal tracking-[0.005em] text-justify
      text-[clamp(13px,1.4vw,18px)]
      sm:text-[clamp(17px,1.3vw,19px)]
      md:text-[clamp(18px,1.25vw,20px)]
      lg:text-[clamp(16px,1.2vw,18px)]
      xl:text-[clamp(18px,1.2vw,16px)]"
          variants={popUp}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          style={{
            fontWeight: 499
          }}
        >
          VibeXio AI accelerates growth, drives innovation, and delivers operational excellence for forward-thinking enterprises through a future-focused team of
          <br className="hidden lg:block" /> AI Architects, Digital Consultants, and Transformation Strategists.
        </motion.p>
      </div>



      {/* Content Block - Responsive */}
      <motion.div
        className="w-full flex flex-col lg:flex-row  max-w-[1100px]
  gap-2 sm:gap-8 md:gap-10 lg:gap-[5px]"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      >
        {/* Left Text - Flexible */}
        <div className="relative w-[450px] min-w-[250px]">
          {/* Right border line visible only on large screens */}
          <div className="absolute right-0 top-0 hidden lg:block w-px h-[202px] bg-[#121212] opacity-70" />

          <h2 className=" leading-[1.3] tracking-tight opacity-90 font-semibold pt-[10px] md:pt-[20px] xl:pt-[60px] 
           pr-[70px]
    text-[clamp(20px,2.8vw,26px)]
    sm:text-[clamp(22px,2.6vw,28px)]
    md:text-[clamp(24px,2.4vw,30px)] 
    lg:text-[clamp(26px,2.2vw,32px)] lg:whitespace-nowrap
    xl:text-[clamp(22px,3vw,34px)]  xl:whitespace-nowrap">
            At the heart of our<br />work is a bold Mission
          </h2>
        </div>


        {/* Right Text - Fixed width */}
        <motion.div
          className="w-full lg:w-[500px] relative"
          variants={slideInFromRight}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.01 }}
        >
          <p className="leading-[1.8] sm:leading-[2] tracking-tight font-normal  lg:pl-[102px]
      text-[clamp(13px,1.3vw,15px)] 
      sm:text-[clamp(14px,1.25vw,16px)]
      md:text-[clamp(15px,1.2vw,17px)]
      lg:text-[clamp(15px,1.15vw,16px)] 
      xl:text-[clamp(14px,1.2vw,16px)]">
            To redefine how businesses harness artificial intelligence and digital strategy to compete and scale in a rapidly evolving world. From intelligent automation to enterprise AI systems, we deliver tailor-made solutions that empower smarter decision-making, optimize processes, and unlock scalable growth.
          </p>
        </motion.div>
      </motion.div>


      {/* Professional Responsive Dots - NO LAYOUT BREAKING */}
      <motion.div
        className="
          hidden
          
          sm:hidden
          
          md:grid md:grid-cols-2 md:grid-rows-2 md:gap-2 md:w-fit 
          
          lg:grid-cols-3 lg:grid-rows-2 lg:gap-2.5  
          xl:grid-cols-3 xl:grid-rows-3 xl:gap-3 "
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      >
        {/* Render different number of dots based on screen size */}
        {dotColors.slice(0, window.innerWidth >= 1280 ? 9 : window.innerWidth >= 1024 ? 6 : 4).map((color, i) => (
          <div
            key={i}
            className="rounded-full opacity-30
              /* Tablet dots */
              md:w-[20px] md:h-[20px]
              
              /* Large tablet dots */
              lg:w-[24px] lg:h-[24px]
              
              /* Desktop dots - original size */
              xl:w-[clamp(20px,3vw,35px)] xl:h-[clamp(20px,3vw,35px)] xl:mb-[4%]"
            style={{ backgroundColor: color }}
          />
        ))}
      </motion.div>

      {/* Alternative: Mobile-Only Decorative Element */}
      <motion.div
        className="
          /* Show only on mobile/small tablet */
          block sm:block md:hidden
          w-[60px] h-[3px] bg-[#9A8DA0]/30 ml-[20px] -mt-[30px] mb-[20px] rounded-full"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      />
    </section>
  );
};

export default MissionSection;