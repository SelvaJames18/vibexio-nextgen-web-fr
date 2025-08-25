import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromRightBG,
  popUpArrow,
} from "./varients";
import targetIcon from "../assets/target-icon.png";
import puzzleIcon from "../assets/puzzle-icon.png";
import brainBg from "../assets/brain-bg.png";
import curvearrow from "../assets/curve-arrow.png";

const StrategicItem = ({ bgClass, icon, alt, title, text, animation }) => (
  <motion.div
    className="flex flex-col lg:flex-row items-center max-w-2000px lg:max-w-[580px] gap-6"
    variants={animation}
    initial="hidden"
    whileInView="show"
    viewport={{ amount: 0.2 }}
  >
    <div className="relative w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] flex-shrink-0 flex items-center justify-center">
      <motion.div
        className={`absolute w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full z-[1] ${
          bgClass === "ellipse-bg-6"
            ? "bg-[#A7A7A8]"
            : "bg-[#9A8DA0]"
        }`}
        variants={bgClass === "ellipse-bg-7" ? slideInFromLeft : slideInFromRight}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      />
      <motion.img
        src={icon}
        alt={alt}
        className="relative z-[2] w-[90px] h-[90px] lg:w-[142px] lg:h-[132px] object-contain"
        variants={slideInFromBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      />
    </div>
    <div className="flex flex-col text-center lg:text-left px-4 lg:px-0">
      <h4 className="font-semibold text-[18px] lg:text-[20px] text-[#121212] leading-6 mb-2">{title}</h4>
      <p className="font-normal text-[14px] lg:text-[16px] leading-[24px] lg:leading-[27px] text-[#121212] opacity-87">
        {text}
      </p>
    </div>
  </motion.div>
);

const StrategicEdgeSection = () => {
  return (
    <section className="relative w-screen min-h-screen bg-[#EDECE9] 
    xl:px-[13%] lg:px-[9%] px-[5%] py-16 lg:py-[80px] pb-[150px] lg:pb-[300px]
     box-border font-sans flex items-center justify-center overflow-visible max-w-full">
      <motion.img
        src={brainBg}
        alt="Mission Brain"
        className="absolute w-[70%] max-w-[500px] top-[20%] right-[15%] opacity-10 pointer-events-none select-none lg:w-[40%] lg:top-[10%] lg:right-[5%] lg:opacity-6"
        variants={slideInFromRightBG}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.01 }}
        transition={{ delay: 0.2 }}
      />

      <div className="relative z-[1] max-w-[1240px] w-full">
        <div className="lg:max-w-[50%] text-center lg:text-left">
          <motion.h2
            className="font-normal text-[32px] lg:text-[60px] mb-6 lg:mb-10 leading-[40px] lg:leading-[61px] text-[#121212]"
            variants={slideInFromTop}
            initial="hidden"
            whileInView="show"
          >
            The Strategic Edge
          </motion.h2>
          <motion.h3
            className="font-normal text-[24px] lg:text-[48px] leading-[30px] lg:leading-[48px] tracking-tight text-[#121212] mt-2 lg:mt-4"
            variants={slideInFromTop}
            initial="hidden"
            whileInView="show"
          >
            You've Been Looking For
          </motion.h3>
        </div>

        <motion.p
          className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-[#121212] opacity-90 mt-8 lg:mt-[50px] mb-12 lg:mb-[70px] max-w-screen lg:max-w-[50%] mx-auto lg:mx-0 text-center lg:text-left px-4 lg:px-0"
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          Choosing the right partner for AI and digital transformation is
          critical—and that's where we deliver unmatched value.
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px]">
          <StrategicItem
            bgClass="ellipse-bg-6"
            icon={targetIcon}
            alt="Strategic By Design"
            title="Strategic By Design"
            text="We combine deep technical expertise with forward-thinking strategy to align every solution with your core business objectives. From roadmap to rollout, we're not just building tools—we're architecting long-term outcomes."
            animation={slideInFromLeft}
          />
          <StrategicItem
            bgClass="ellipse-bg-7"
            icon={puzzleIcon}
            alt="Tailored, Not Templated"
            title="Tailored, Not Templated"
            text="No two businesses are the same. That's why every AI model, system integration, or digital strategy we deliver is built from the ground up—custom-fit to your operations, challenges, and ambitions."
            animation={slideInFromRight}
          />
        </div>
      </div>

      <motion.img
        src={curvearrow}
        alt="decorative curve arrow"
        className="absolute left-1/2 -translate-x-1/2 max-lg:right-[300px] max-md:left-[793px] lg:translate-x-0 bottom-[-30px] lg:bottom-[-50px] z-[1] h-[150px] w-[120px] lg:h-[274.62px] lg:w-[232.14px] pointer-events-none max-lg:hidden"
        variants={popUpArrow}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.1 }}
      />
    </section>
  );
};

export default StrategicEdgeSection;