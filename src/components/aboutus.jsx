import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import circuit from "../assets/capabilites-bg.png";

const slideDown = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { x: 100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut", delay: custom },
  }),
};

const slideRight = {
  hidden: { x: -100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut", delay: custom },
  }),
};

const AboutUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="w-full mb-[-200px] max-[1277px]:mb-[-450px] max-[538px]:mb-[-200px]
     bg-[#121212] text-white overflow-hidden relative">
      <div
        ref={ref}
        className=" w-full max-w-[1920px] mx-auto grid grid-cols-2 gap-8 px-28 pt-10 md:pt-24 pb-[250px] min-h-[900px] relative 
          max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:px-6 max-[1024px]:pb-20"
      >
        {/* Digital Consultants */}
        <motion.div
          className="bg-[#232323] rounded-xl shadow-lg p-6 w-[320px] h-[474px] relative 2xl:left-[90px] 
          xl:left-[100px] bottom-[6.5rem] 
            max-[1440px]:left-[120px] max-xl:left-[0px] max-[1024px]:static max-[1024px]:w-full max-[1024px]:h-auto"
          variants={slideDown}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-[#D6BF7C] text-2xl font-bold mb-5 opacity-90 relative top-[100px] 
              max-[1024px]:top-0 max-[1024px]:text-xl"
            variants={slideDown}
          >
            Digital Consultants
          </motion.h2>
          <motion.p
            className="text-[#EDECE9] text-sm leading-8 w-[274px] relative top-[100px] 
              max-[1024px]:top-0 max-[1024px]:w-full max-[1024px]:text-base max-[1024px]:leading-6"
            variants={slideDown}
            transition={{ delay: 0.2 }}
          >
            We don’t just implement technology—we guide organizations through complex digital landscapes with clarity and purpose. Whether you're navigating legacy system upgrades, building an AI innovation roadmap, or launching a full-scale digital transformation, we offer the strategic insight and technical depth to get you there.          </motion.p>
        </motion.div>
        {/* Our Expertise */}
        <motion.div
          className="bg-[#232323] rounded-xl shadow-lg p-6 w-[1200px] h-[270px] relative top-[100px] right-[240px] 
            max-[1440px]:right-[150px] max-[1280px]:right-[100px] max-[1024px]:static max-[1024px]:w-full max-[1024px]:h-auto"
          variants={slideLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <motion.h2
            className="text-[#D6BF7C] text-2xl font-bold mb-5 opacity-90 relative ml-[380px] top-[90px] left-[200px] w-[220px] 
              max-[1440px]:ml-[350px] max-[1280px]:ml-[250px] max-[1024px]:static max-[1024px]:ml-0 max-[1024px]:text-xl"
            variants={slideLeft}
            custom={0.1}
          >
            Our Expertise
          </motion.h2>
          <motion.p
            className="text-[#EDECE9] text-sm leading-8 w-[482px] relative bottom-[0px] max-xl:w-[400px] max-xl:top-[-15px]
              max-[1440px]:top-[-5px] max-[1024px]:static max-[1024px]:w-full max-[1024px]:text-base max-[1024px]:leading-6"
            variants={slideLeft}
            custom={0.2}
          >
            Our expertise spans machine learning, predictive analytics, and intelligent process automation—all deeply integrated with your business model, industry demands, and strategic goals. We design and deploy adaptive, enterprise-ready systems that evolve alongside your needs.          </motion.p>
        </motion.div>

        {/* Strategic Partner */}
        <motion.div
          className="bg-[#232323] rounded-xl shadow-lg p-6 w-[850px] h-[171px] relative bottom-[110px] xl:right-[120px]
           max-xl:left-[-100px]
            max-[1440px]:right-[80px] max-[1280px]:right-0 max-[1024px]:static max-[1024px]:w-full max-[1024px]:h-auto"
          variants={slideRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <motion.h2
            className="text-[#D6BF7C] text-2xl font-bold mb-5 opacity-90 relative ml-[580px] top-[40px] max-xl:left-[400px]
              max-[1440px]:ml-[550px] max-[1440px]:top-10 max-[1280px]:ml-[180px] max-[1024px]:static
               max-[1024px]:ml-0 max-[1024px]:text-xl"
            variants={slideRight}
            custom={0.1}
          >
            Strategic Partner
          </motion.h2>
          <motion.p
            className="text-[#EDECE9] text-sm leading-8 w-[482px] relative bottom-[40px]  max-xl:left-[40px]
              max-[1440px]:bottom-10 xl:ml-[30px] max-[1024px]:static max-[1024px]:w-full max-[1024px]:text-base max-[1024px]:leading-6"
            variants={slideRight}
            custom={0.2}
          >
            Whether your goal is to modernize internal workflows, elevate customer experience, or lead your sector through AI-powered disruption, we’re more than a vendor—we’re your strategic partner in building what’s next.          </motion.p>
        </motion.div>
      </div>

      {/* Circuit Design Right */}
      <motion.img
        src={circuit}
        alt="Circuit Design"
        className="absolute top-[500px] right-0 w-[474px] h-[249px] max-xl:hidden opacity-20 pointer-events-none z-0 max-[1024px]:hidden"
        variants={slideLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.1}
      />
    </div>
  );
};

export default AboutUs;