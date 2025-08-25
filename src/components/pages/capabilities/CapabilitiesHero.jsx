import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import '@fontsource/nunito';
import '@fontsource/poppins';
import capabilitiesHeroBg from '../../../assets/capabilities-main/capabalities-hero-bg.png';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: 'easeOut' },
  }),
};

const CapabilitiesHero = () => {
  return (
    <div className="h-[800px] bg-[#121212] text-white flex justify-center items-center px-4 sm:px-6 lg:px-[100px] xl:px-[200px] py-[60px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-[1400px] lg:translate-y-[-30px]">


        <div className="text-center lg:text-left max-w-lg xl:w-[442px]">
          <h1 className="text-[22px] sm:text-[32px] lg:text-[40px] font-light tracking-[0.01em]">
            Architects of Intelligence.
          </h1>
          <h1 className="text-[22px] sm:text-[32px] lg:text-[40px] font-light leading-[160%] tracking-[0.01em] mb-6">
            Strategists of Scale.
          </h1>
          <p className="font-light opacity-50 text-[14px] sm:text-[18px] lg:text-[20px] leading-[160%] tracking-[1%]">
            Our multidisciplinary capabilities empower future-ready businesses through seamless digital transformation, transformative design thinking, and advanced intelligent systems.
          </p>
        </div>

        <img src={capabilitiesHeroBg} alt="" className="w-[240px] sm:w-[300px] pt-[50px] sm:pt-0" />

      </div>
    </div>

  );
};

export default CapabilitiesHero;