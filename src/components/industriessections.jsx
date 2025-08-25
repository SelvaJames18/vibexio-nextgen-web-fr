import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import touchIcon from '../assets/touch-icon.png';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: 'easeOut' },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.14,
    scale: 1,
    y: 0,
    transition: { delay: 0.2, duration: 1.2, ease: 'easeOut' },
  },
};

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="w-full max-w-[1400px] mt-[-100px] max-lg:mt-[0px] mx-auto relative flex flex-col lg:flex-row justify-between items-center bg-[#121212] text-[#d1d1d1] lg:px-[9%] md:px-[7%] px-[5%] py-16 sm:py-20 md:py-[80px] gap-8 md:gap-0 overflow-hidden md:min-h-[875px]"
    >
      {/* Text Section */}
      <motion.div
        className="flex-1 mt-[-90px] max-w-full max-lg:max-w-[700px] z-20 text-center md:text-left flex flex-col items-center md:items-start"
      >
        <motion.h1
          custom={0}
          variants={textVariants}
          className="font-bold font-[kollektif] max-md:text-[24px] opacity-[73%] text-[#edece9] mb-3 leading-[165%] 
                    text-[26px] sm:text-[32px] md:text-[40px] xl:text-[40px] lg:text-[32px] mt-[160px] md:mt-[200px]"
        >
          Industries We Transform
        </motion.h1>

        <motion.h2
          custom={0.2}
          variants={textVariants}
          className="font-normal max-md:text-[16px] font-[kollektif] opacity-[73%] text-[#edece9] mb-6 leading-[204%] 
                    text-[18px] sm:text-[24px] md:text-[29px] xl:text-[32px] lg:text-[26px]"
        >
          Domain Intelligence Meets Digital Possibility
        </motion.h2>

        <motion.p
          custom={0.4}
          variants={textVariants}
          className="text-[17px] max-md:text-[12px] md:w-[552px] font-[AvenirLTStd] font-normal opacity-[73%] sm:text-[14px] md:text-[16px] 
                    leading-[200.99999999999997%] xl:text-[16px] lg:text-[12px] text-[#edece9] max-w-[95%] mx-auto md:mx-0"
        >
          We partner with ambitious leaders across industries to reimagine what's possible.
          Every sector has unique challenges—but if the vision is feasible, we engineer the solution.
          From regulatory-heavy environments to fast-scaling startups, our expertise in digital systems,
          intelligent automation, and enterprise AI creates meaningful, measurable transformation.
        </motion.p>
      </motion.div>

      {/* Icon for large screens (1024px and above) */}
<motion.div
  className="absolute hidden lg:block top-[33%] right-6 md:right-[180px] md:mt-[50px] 
             w-[180px] lg:w-[200px] lg:right-[90px] lg:mt-[70px] 
             xl:w-[280px] xl:right-[180px]
             opacity-10 z-10"
  variants={iconVariants}
  initial="hidden"
  animate={controls}
>

        <img
          src={touchIcon}
          alt="Touch Icon"
          className="w-full h-auto pointer-events-none select-none opacity-45"
        />
      </motion.div>

      {/* Icon for screens below 1024px */}
      <motion.div
        className="block lg:hidden w-[140px] sm:w-[220px] opacity-10 z-10 mt-[50px]"
        variants={iconVariants}
        initial="hidden"
        animate={controls}
      >
        <img
          src={touchIcon}
          alt="Touch Icon"
          className="w-full h-auto pointer-events-none select-none opacity-45"
        />
      </motion.div>
    </div>
  );
};

export default IndustriesSection;