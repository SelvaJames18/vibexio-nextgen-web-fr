import React, { useState } from "react";
import dp from "../../../assets/blog/dp.png";
import bulletin from "../../../assets/blog/bulletin.png";
import danger from "../../../assets/blog/danger.png";
import creativity from "../../../assets/blog/creativity.png";
import layer from "../../../assets/blog/layer.png";
import foi from "../../../assets/blog/foi.png";
import Downward from "../../../assets/blog/Downward.png";
import upward from "../../../assets/blog/upward.png";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

// --- Reusable Components 

const BlueprintCard = ({ title, description }) => (
  <div className="w-[240px] h-[220px] bg-[#E3E2DE] rounded-2xl p-6 flex flex-col justify-center text-left shadow-lg">
    <h3 className="font-kollektif text-black/80 font-bold text-lg sm:text-xl leading-[1.4] tracking-normal mb-4">
      {title}
    </h3>
    <p className="font-avenir text-black/60 font-normal text-xs sm:text-sm leading-[1.6] tracking-normal">
      {description}
    </p>
  </div>
);

const blueprintData = {
  userExperience: {
    title: "User Experience Layer",
    description: "Designed for context capture, frictionless interaction, and behavioral telemetry."
  },
  cognitive: {
    title: "Cognitive Middleware",
    description: "Built to interpret learner-state data and orchestrate personalized pathways."
  },
  dataStrategy: {
    title: "Data Strategy Layer",
    description: "Built to interpret learner-state data and orchestrate personalized pathways."
  },
  inference: {
    title: "Inference Engine",
    description: "Abstracted to allow decisioning across curriculum, assessments, and intervention without manual rule-setting."
  },
  infrastructure: {
    title: "Infrastructure Layer",
    description: "Modular, privacy-preserving, and scalable — optimized for real-time adaptability and long-term evolution."
  },
};

// --- Main Blog Component ---

const MarketingBlog = () => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const length = comment.trim().length;

    if (comment.length < 250) {
      setError("Please enter at least 250 characters.");
      return
    } else {
      setError("");
      console.log("Comment submitted:", comment);
      // submit code here
    }

    // proceed with submission
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwEU4E-1TUbb7mt0DgJ2WSCA2Ic7biUA4FHEgwMr-YiVEl8vgf-1cvY3hgCznSBQOjE/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
      });

      alert("Comment submitted successfully!");
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-[#EDECE9] text-[#333] font-avenir overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between xl:justify-center 2xl:justify-center items-center min-h-[400px] lg:h-[512px] lg:gap-[60px] xl:gap-[120px] 2xl:gap-[140px] bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F] text-white px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 pb-8 pt-[100px] sm:py-12 lg:py-20 rounded-b-[24px] sm:rounded-b-[48px] shadow-xl ">
        <Link
          to="/blogs"
          className="fixed top-[120px] left-[60px] bg-white rounded-full text-black p-[10px] font-semibold flex items-center justify-center shadow z-50 max-[767px]:hidden"
        >
          <IoIosArrowBack className="text-[24px]" />
        </Link>
        {/* Text Content Section */}
        <div className="flex-1 xl:flex-none 2xl:flex-none max-w-2xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl text-center lg:text-left pt-[60px]">
          <h1 className="mb-6">
            {/* Main Title */}
            <span className="font-kollektif font-normal text-white block text-[18px] xs:text-[20px] sm:text-[28px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] leading-[1.3] tracking-[-0.02em] mb-2">
              Re-Architecting the Learning
            </span>
            <span className="font-kollektif font-normal text-white block text-[18px] xs:text-[20px] sm:text-[28px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] leading-[1.3] tracking-[-0.02em] mb-2">
              Stack: Strategic AI Integration
            </span>
            <span className="font-kollektif font-normal text-white block text-[18px] xs:text-[20px] sm:text-[28px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] leading-[1.3] tracking-[-0.02em] mb-2">
              in the Future of
              <span className="font-kollektif font-bold text-white ml-2">EdTech</span>
            </span>
          </h1>

          {/* Date */}
          <p className="font-avenir font-light italic text-gray-400 text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-relaxed">
            July 21, 2025
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 xl:flex-none 2xl:flex-none flex justify-center items-center w-full lg:w-auto">
          <div className="relative w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] xl:w-[340px] xl:h-[380px] 2xl:w-[380px] 2xl:h-[420px] flex justify-center items-center">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-40 blur-[120px] lg:blur-[200px] xl:blur-[250px] 2xl:blur-[300px] z-0" />

            {/* Main Image */}
            <img
              src={layer}
              alt="AI EdTech Integration"
              className="relative z-10 w-full h-full object-contain filter brightness-90 pt-[10%]"
              style={{ opacity: 0.85 }}
            />
          </div>
        </div>
      </div>

      {/* --- Main Content (Part 1 - Before Diagram) --- */}
      <div className="max-w-none lg:max-w-3xl mx-auto px-4 sm:px-6 lg:pr-[70px] pt-8 lg:pt-12 lg:pb-0 space-y-5 lg:space-y-10 lg:ml-[40%]">
         {/* Author Section */}
        <div className="flex justify-end px-4 md:px-6 lg:px-8">
          <div className="flex items-start gap-3 max-w-[280px] sm:max-w-[300px] md:max-w-[340px] lg:mr-[20px]">

            {/* Profile Image */}
            <div
              className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px] 
                 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(169, 151, 133, 0.5)",
                boxShadow: "inset 0px 3px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={dp}
                alt="Balakrishnan K N"
                className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px] object-cover opacity-30"
              />
            </div>

            {/* Name + Role */}
            <div className="flex flex-col sm:text-left">
              <p className="font-avenir font-normal text-gray-800 
                     text-xs sm:text-sm md:text-base lg:text-lg 
                     opacity-70 leading-tight">
                Venkatesh Murugesan
              </p>
              <p className="font-avenir text-gray-500 
                     text-[10px] sm:text-xs md:text-sm lg:text-base 
                     opacity-40 italic mt-[2px]">
                Founding partner, VibeXio
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img src={bulletin} alt="Bulletin" className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4" />
            <h1 className="font-kollektif font-bold text-gray-900 opacity-70 w-full lg:w-[151px] h-auto lg:h-[41px] text-lg sm:text-xl lg:text-2xl leading-[174%] tracking-[0%]">
              Introduction
            </h1>
          </div>
          <div className="font-avenir text-gray-800 font-normal text-justify space-y-6  h-auto lg:h-[167px] text-xs sm:text-sm lg:text-base leading-[174%] tracking-[0%] opacity-100">
            <p>
              The digital revolution in education began with access. The AI revolution is about cognition.
              While most platforms have focused on putting information on screens, the next frontier is to
              embed intelligence into the core fabric of learning systems.
            </p>
            <p>
              At VibeXio.ai, we don't just experiment with AI in education. We engineer the strategy,
              infrastructure, and system design that powers intelligent learning ecosystems at scale.
            </p>
          </div>
        </div>

        {/* The Root Challenge Section */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <div className="relative mb-6 pl-8 lg:pl-0 z-30">
            <img src={bulletin} alt="Bulletin" className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4" />
            <h1 className="font-kollektif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 opacity-70 relative z-30 leading-[1.74] tracking-normal">
              The Root Challenge: Static Systems for Dynamic Minds
            </h1>
          </div>
          <div className="font-avenir text-xs sm:text-sm lg:text-base text-gray-800 leading-[1.74] tracking-normal space-y-6 text-justify font-normal">
            <p>
              Education, at scale, has struggled with one fundamental limitation: uniform delivery for
              heterogeneous learners. Despite decades of platform development, most systems still operate
              linearly — with minimal responsiveness to how different students learn, retain, and engage.
            </p>
            <p>
              The cost of this cognitive mismatch is high — evident in low retention, disengagement, and
              delayed mastery. The solution lies not in more content but in smarter systems that learn the learner.
            </p>
          </div>
        </div>

        {/* Strategic Approach Section */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <div className="lg:absolute lg:-left-[300px] lg:top-[150px] w-full lg:max-w-[245px] mx-auto lg:mx-0 mb-8 lg:mb-0  lg:-translate-y-[37%]">
            {/* Card Container - Responsive */}
            <div
              className="relative w-full lg:w-[245px] h-auto lg:h-[368px] bg-[#ccc6bd] rounded-[20px] px-6 pt-6 pb-4 lg:pb-6 text-left shadow-md mt-10 lg:mt-0"
              style={{ backgroundColor: 'rgba(204, 198, 189, 0.17)' }}
            >

              {/* Icon positioned at top-right */}
              <img
                src={creativity}
                alt=""
                className="absolute -top-4 -right-2 w-[60px] h-[60px] pointer-events-none"
              />

              {/* Title - Responsive */}
              <h3
                className="font-kollektif text-base sm:text-[18px] lg:text-[20px] font-bold text-gray-900 leading-[174%] tracking-[0%] mb-3 lg:mb-4 relative z-10 w-full lg:w-[174px] lg:h-[27px] pt-[30px]"
                style={{ opacity: 0.7 }}
              >
                What's changing?
              </h3>

              {/* Content Container */}
              <div className="relative z-10 w-full lg:w-[178px] space-y-2 lg:space-y-3 pt-[40px] mb-[100px]">

                {/* Subtitle - Responsive */}
                <div className="w-full lg:w-[166px] lg:h-[42px]">
                  <p
                    className="font-avenir text-[10px] sm:text-[12px] font-bold text-gray-800 leading-[174%] tracking-[0%] text-justify"
                    style={{ opacity: 0.66 }}
                  >
                    The Classroom is No Longer a Room
                  </p>
                </div>

                {/* Main Text - Responsive */}
                <div className="w-full lg:w-[178px] lg:h-[189px]">
                  <p
                    className="font-avenir text-[10px] sm:text-[12px] font-normal text-gray-800 leading-[174%] tracking-[0%] text-justify"
                    style={{ opacity: 0.68 }}
                  >
                    Traditional classrooms had walls—today's learning has none.
                    AI is not replacing teachers; it's redefining teaching itself.
                    From personalized pacing to curriculum that updates in real time, we're stepping into a world where learning never logs out.
                  </p>
                </div>

              </div>

            </div>
          </div>

          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
            />
            <h1 className="font-kollektif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-[1.74] tracking-normal opacity-70">
              Strategic Approach to AI-Driven Learning Systems
            </h1>
          </div>

          <div className="font-avenir text-xs sm:text-sm lg:text-base text-gray-800 leading-[1.74] tracking-normal space-y-6 text-justify font-normal">
            <div>
              <h2 className="opacity-70 font-avenir font-extrabold text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify mb-2">
                1. Adaptive Personalization Frameworks
              </h2>
              <p className="font-avenir font-normal text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify">
                We design systems capable of interpreting learning signals and adjusting delivery pathways
                dynamically. Rather than rigid modules, content becomes fluid, responding to proficiency levels,
                pacing requirements, and attention patterns in real time.
              </p>
            </div>

            <div>
              <h2 className="opacity-70 font-avenir font-extrabold text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify mb-2">
                2. Intelligent Curriculum Orchestration
              </h2> 
              <p className="font-avenir font-normal text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify">
                Our architectural frameworks allow for flexible sequencing and modular curriculum design —
                dynamically adapting based on the learner's journey. These systems can reprioritize topics,
                modify challenge levels, and optimize learner flow without manual intervention.
              </p>
            </div>

            <div>
              <h2 className="opacity-70 font-avenir font-extrabold text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify mb-2">
                3. Cognitive-Aware Assessment Loops
              </h2>
              <p className="font-avenir font-normal text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify">
                We move beyond traditional testing. Our strategy includes building intelligent assessment
                loops that continuously calibrate difficulty, identify conceptual gaps, and create tailored
                feedback, closing the loop between teaching and understanding.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mid Section Quote */}
      <div className="flex justify-center items-center w-full lg:py-20 px-4 lg:px-6">
        <div className="bg-black w-full max-w-[1034px] h-auto lg:w-[1034px] lg:h-[288px] rounded-3xl lg:rounded-[83px] px-6 lg:px-12 py-8 lg:py-10 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 text-white shadow-xl overflow-hidden">

          {/* Left Side - Icon with Glow Effect (Increased Size) */}
          <div className="flex flex-col items-center text-center lg:flex-shrink-0">
            <div className="relative w-[200px] h-[156px] sm:w-[250px] sm:h-[195px] lg:w-[339px] lg:h-[264px] flex items-center justify-center">

              {/* Glow Effect Background */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-400/30 via-blue-500/20 to-transparent rounded-full blur-xl scale-150 opacity-60" />

              {/* Icon Container */}
              <div className="relative z-10 w-full h-full flex items-center justify-center pb-[20px]">
                <img
                  src={foi}
                  alt="Flow of Ideas Icon"
                  className="w-full h-full object-contain filter brightness-110 contrast-110"
                />
              </div>

              {/* Additional Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/30 to-purple-400/20 rounded-full blur-2xl scale-125 opacity-40 animate-pulse" />
            </div>
          </div>

          {/* Right Side - Main Text with exact specifications */}
          <div className="text-center lg:text-left w-full lg:w-[564px] lg:h-[83px] flex items-center justify-center lg:justify-start">
            <p className="font-kollektif text-white font-bold text-base sm:text-lg lg:text-[28px] leading-[150%] lg:leading-[174%] tracking-[0%]">
              <span className="block">
                Every breakthrough starts as a question.
              </span>
              <span className="block">
                We build the answers into code.
              </span>
            </p>
          </div>

        </div>
      </div>

      <div className="flex justify-center w-full my-10 px-4 lg:px-6">
        {/* Blueprint Heading */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img src={bulletin} alt="Bulletin" className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4" />
            <h2 className="font-kollektif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-[1.74] tracking-normal opacity-70">
              System Blueprint: A Strategic Overview
            </h2>
          </div>
        </div>
      </div>

      {/* === FULL-WIDTH DIAGRAM SECTION === */}
      <div className="w-full lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Vertical Stack */}
          <div className="lg:hidden flex flex-col items-center gap-8">
            {Object.values(blueprintData).map((item) => (
              <BlueprintCard key={item.title} {...item} />
            ))}
          </div>

          {/* Desktop: Zig-Zag Grid with Image Arrows */}
          <div className="hidden lg:grid grid-cols-5 gap-x-8 items-center min-h-[500px] opacity-70">
            {/* Row 1 */}
            <div className="relative flex justify-center items-start pt-4 ">
              <BlueprintCard {...blueprintData.userExperience} />
              <img src={Downward} alt="" className="absolute w-20 bottom-[-20px] right-[-65px] pointer-events-none" />
            </div>
            <div></div>
            <div className="relative flex justify-center items-start pt-4">
              <BlueprintCard {...blueprintData.dataStrategy} />
              <img src={Downward} alt="" className="absolute w-20 bottom-[-20px] right-[-65px] pointer-events-none" />
            </div>
            <div></div>
            <div className="relative flex justify-center items-start pt-4">
              <BlueprintCard {...blueprintData.infrastructure} />
            </div>

            {/* Row 2 */}
            <div></div>
            <div className="relative flex justify-center items-end pb-4">
              <BlueprintCard {...blueprintData.cognitive} />
              <img src={upward} alt="" className="absolute w-20 top-[-20px] right-[-65px] pointer-events-none" />
            </div>
            <div></div>
            <div className="relative flex justify-center items-end pb-4">
              <BlueprintCard {...blueprintData.inference} />
              <img src={upward} alt="" className="absolute w-20 top-[-25px] right-[-80px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content (Part 2 - After Diagram) --- */}
      <div className="max-w-none lg:max-w-3xl mx-auto px-4 sm:px-6 lg:pr-[70px] pt-8 lg:pt-12 space-y-5 lg:space-y-10 lg:ml-[40%]">
        {/* Outcomes Section */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
            />
            <h2 className="font-kollektif font-bold text-lg sm:text-xl lg:text-[24px] leading-[1.74] opacity-70 text-gray-900 tracking-[0%]">
              Outcomes That Matter
            </h2>
          </div>

          <div className="font-avenir font-normal text-xs sm:text-sm lg:text-[16px] leading-[1.74] tracking-[0%] text-gray-800 text-justify space-y-6 opacity-100">
            <p className="font-avenir font-normal text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify">
              Our deployments have demonstrated measurable gains in learner efficiency, content relevance,
              and engagement depth. Adaptive sequencing has led to faster concept mastery, while
              intelligence-driven assessments have increased accuracy in identifying knowledge gaps.
            </p>
            <p className="font-avenir font-normal text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify">
              What's significant is not just performance — but precision, scalability, and resilience
              across diverse learner bases.
            </p>
          </div>
        </div>

        {/* From Platforms to Ecosystems Section */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir pb-[40px]">

          <div className="lg:absolute lg:-left-[300px] lg:top-[150px] w-full lg:max-w-[245px] mx-auto lg:mx-0 mb- lg:mb-0 -translate-y-[33%]">
            {/* Card Container - Responsive */}
            <div
              className="relative w-full lg:w-[245px] h-auto lg:h-[368px] bg-[#ccc6bd] rounded-[20px] px-6 pt-6 pb-4 lg:pb-6 text-left shadow-md mt-[110px] lg:mt-[60px] lg:mt-0"
              style={{ backgroundColor: 'rgba(204, 198, 189, 0.17)' }}
            >

              {/* Icon positioned at top-right */}
              <img
                src={danger}
                alt=""
                className="absolute -top-4 -right-2 w-[60px] h-[60px] pointer-events-none"
              />

              {/* Title - Responsive */}
              <h3
                className="font-kollektif text-base sm:text-[18px] lg:text-[20px] font-bold text-gray-900 leading-[174%] tracking-[0%] mb-3 lg:mb-4 relative z-10 w-full lg:w-[174px] lg:h-[27px] pt-[30px]"
                style={{ opacity: 0.7 }}
              >
                Reality Check
              </h3>

              {/* Content Container */}
              <div className="relative z-10 w-full lg:w-[178px] space-y-2 lg:space-y-3 pt-[40px]">

                {/* Subtitle - Responsive */}
                <div className="w-full lg:w-[166px] lg:h-[42px]">
                  <p
                    className="font-avenir text-[10px] sm:text-[12px] font-bold text-gray-800 leading-[174%] tracking-[0%] text-justify"
                    style={{ opacity: 0.66 }}
                  >
                    Can AI Really Understand How Students Feel?
                  </p>
                </div>

                {/* Main Text - Responsive */}
                <div className="w-full lg:w-[178px] lg:h-[189px]">
                  <p
                    className="font-avenir text-[10px] sm:text-[12px] font-normal text-gray-800 leading-[174%] tracking-[0%] text-justify"
                    style={{ opacity: 0.68 }}
                  >
                    Beyond grades, AI now interprets silence, hesitation, and expression.
                    It reads not just what students type, but why they pause.
                    Welcome to a world where your mood could shape your next lesson.
                  </p>
                </div>

              </div>

            </div>
          </div>

          <div className="relative max-w-full lg:max-w-[800px] mx-auto font-avenir">
            <div className="relative mb-6 pl-8 lg:pl-0">
              <img
                src={bulletin}
                alt="Bulletin"
                className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
              />
              <h2 className="font-kollektif font-bold text-lg sm:text-xl lg:text-[24px] leading-[1.74] opacity-70 text-gray-900 tracking-[0%]">
                From Platforms to Ecosystems
              </h2>
            </div>

            <div className="font-avenir font-normal text-xs sm:text-sm lg:text-[16px] leading-[1.74] tracking-[0%] text-gray-800 text-justify space-y-6">
              <p className="font-avenir font-normal text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify">
                In our view, the future of EdTech lies in intelligent ecosystems — where systems are
                not built to teach, but to learn from the learner. This shift requires more than just
                algorithms. It demands strategy, architectural depth, and a clear understanding of how
                cognition and computation can co-evolve.
              </p>
            </div>
          </div>
        </div>

        {/* VibeXio Section */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
            />
            <h2 className="font-kollektif font-bold text-lg sm:text-xl lg:text-[24px] leading-[1.84]
             opacity-70 text-gray-900 tracking-[0%]">
              VibeXio.ai: Your Strategic Partner in Educational Intelligence
            </h2>
          </div>

          <div className="font-avenir font-normal text-xs sm:text-sm lg:text-[16px] leading-[1.74] tracking-[0%] text-gray-800 text-justify space-y-6">
            <p className="font-avenir font-normal text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify">
              We specialize in helping EdTech companies, academic institutions, and enterprise learning
              leaders reimagine what intelligent education infrastructure looks like. From architectural
              blueprints to system orchestration — we deliver what others theorize.
            </p>
            <p className="font-avenir font-normal text-xs sm:text-sm lg:text-base leading-[1.74] tracking-normal text-justify">
              If you're building the next era of learning platforms, let's design something that learns back.
            </p>
          </div>
        </div>
      </div>
        {/* Bottom Section */}
      <div className="mt-3 md:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-[30px] px-8  pb-10 lg:pb-20 lg:px-30 xl:px-40">
        {/* Recommended Articles */}
        <div className="space-y-4 lg:mt-[80px] w-full lg:w-[260px]">
          <h3 className="font-kollektif text-sm sm:text-base lg:text-lg  font-semibold text-gray-800 leading-[1.74] text-center opacity-70">
            Recommended Articles
          </h3>
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
        </div>

        {/* Comment Box */}
        <div className="flex-1 lg:mt-[148px]">
          <h3 className="font-kollektif text-sm sm:text-base lg:text-lg font-semibold opacity-70 text-gray-800 mb-2 text-center xl:text-start">
            Share your thoughts below!
          </h3>
          <p className="text-xs text-gray-500 italic mb-2">
            Note: Kindly ensure your comment is within 250 characters to maintain clarity and brevity in our communication.
          </p>
          <div style={{ position: "relative" }}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Post a comment..."
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                paddingBottom: "35px", // extra bottom space for text + button
                boxSizing: "border-box",
              }}
              className="bg-[#CCC6BD] rounded-[40px] border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] 
              opacity-35 placeholder-opacity-100 placeholder-gray-700"
            />

            {/* Character count bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "15px",
                fontSize: "12px",
                color: "#888",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {250 - comment.length} characters left  <span> {error && <p className="text-red-500 text-sm">{error}</p>}</span>
            </div>

            {comment.trim() !== "" && (
              <button
                onClick={handleSubmit}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  background: "#24333f",
                  color: "#fff",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingBlog;