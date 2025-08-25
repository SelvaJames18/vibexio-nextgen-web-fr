import React, { useState } from "react";
import dp from "../../../assets/blog/dp.png";
import bulletin from "../../../assets/blog/bulletin.png";
import questionmark from "../../../assets/blog/questionmark.png";
import tick from "../../../assets/blog/tick.png";
import brainset from "../../../assets/blog/brainset.png";
import micman from "../../../assets/blog/micman.png";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

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
    <div className="bg-[#EDECE9] text-[#333] font-sans">
      {/* Hero Section - Only mobile changes below lg */}
      <div className="flex flex-col lg:flex-row justify-center items-center h-[560px] sm:h-[720px] lg:h-[512px] gap-8 lg:gap-[100px] bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F] text-white px-6 lg:px-16 py-10 lg:py-20 rounded-b-[48px] shadow-xl">
        <Link
          to="/blogs"
          className="fixed top-[120px] left-[60px] bg-white rounded-full text-black p-[10px] font-semibold flex items-center justify-center shadow z-50 max-[767px]:hidden"
        >
          <IoIosArrowBack className="text-[24px]" />
        </Link>
        {/* Text Section */}
        <div className="max-w-xl pt-12 sm:pt-16 md:pt-20 lg:pt-0 mt-6 max-lg:mt-[50px] lg:ml-[70px] lg:mt-[100px] text-center lg:text-left">
          <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-semibold mt-0 lg:mt-0 lg:w-[450px]">
            <span className="font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] text-white">Marketing</span> in the Age of<br />
            Agentic AI
          </h1>
          <p className="text-[12px] sm:text-[14px] md:text-base italic text-gray-400 mt-3 lg:mt-5">July 24, 2025</p>
        </div>

        {/* Icon Section */}
        <div className="flex justify-center w-full lg:w-auto mt-6 lg:mt-0 mb-[-68px] sm:mb-[-88px]">
          <div className="relative [&]:mt-0 [@media(min-width:1023px)]:mt-[220px] [@media(min-width:1201px)]:mt-[150px]
 flex justify-center items-end overflow-visible">
            {/* Background Shadow Ellipse */}
            <div className="absolute w-[422px] h-[416px] rounded-full border border-black bg-white/30 opacity-30 blur-[257px] z-0" />
            {/* Main Image */}
            <img
              src={brainset}
              alt="AI Marketing Revolution"
              className="w-[440px] max-[1200px]:w-[550px] z-10 opacity-90"
            />
          </div>
        </div>
      </div>


      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:py-12 space-y-8 lg:space-y-10 lg:ml-[42%]">
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
                Balakrishnan K N
              </p>
              <p className="font-avenir text-gray-500 
                     text-[10px] sm:text-xs md:text-sm lg:text-base 
                     opacity-40 italic mt-[2px]">
                Founding partner, VibeXio
              </p>
            </div>
          </div>
        </div>

        {/* Section: Intro */}
        <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[18px] sm:w-[20px] lg:w-[28px] h-[10px] sm:h-[12px] lg:h-[15px]"
            />
            <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900 opacity-70">
              Introduction: The New Marketing Paradigm
            </h1>
          </div>

          <div className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-800 leading-[1.5] sm:leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6 text-justify">
            <p>
              As digital noise grows louder and consumer behavior becomes more fluid, marketers are under increasing pressure to deliver personalization, agility, and creativity-at scale. Enter Agentic AI: a new class of artificial intelligence that operates with autonomy, setting its own goals, making strategic decisions, and continuously learning. This case study explores how a wellness brand embraced Agentic AI to radically transform its customer engagement and campaign outcomes.
            </p>
          </div>
        </div>

        {/* Section: The Brand and the Bottleneck with Side Card */}
        <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans mb-8 lg:mb-12 ">
          {/* DID YOU KNOW card - positioned to the side */}
          <div className="lg:absolute relative lg:-left-[320px] lg:top-[100px] w-[260px] sm:w-[300px] md:w-[320px] lg:w-[245px] mx-auto lg:mx-0 mb-6 lg:mb-0 h-auto lg:h-[402px] bg-[#ccc6bd5d] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] px-3 sm:px-4 lg:px-6 py-5 sm:py-6 lg:py-8 text-center shadow-md lg:-translate-y-[-85px]">
            <img
              src={questionmark}
              alt="Question Mark"
              className="absolute top-[-18px] sm:top-[-22px] lg:top-[-40px] right-1 sm:right-2 w-[35px] sm:w-[45px] lg:w-[70px] h-[35px] sm:h-[45px] lg:h-[70px] opacity-30 pointer-events-none select-none"
            />

            <h3 className="opacity-70 text-[12px] sm:text-[14px] md:text-[16px] lg:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 lg:mb-2 mt-3 sm:mt-4 lg:mt-0">
              Did you know?
            </h3>

            <p className="opacity-70 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
              The Classroom is No Longer a Room
            </p>

            <div className="text-justify">
              <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-normal text-gray-700 leading-[1.3] sm:leading-[1.4] lg:leading-[174%] mb-3 sm:mb-4 lg:mb-5">
                Over 70% of top-performing marketers now rely on AI tools to decode consumer behavior in real time. From predicting trends to personalizing campaigns, AI is no longer a backend tool, it's the brain behind high-impact decisions.
              </p>

              <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-gray-700 leading-relaxed text-left">
                → In a world of noise, insight is your loudest advantage.
              </p>
            </div>
          </div>

          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[18px] sm:w-[20px] lg:w-[28px] h-[10px] sm:h-[12px] lg:h-[15px]"
            />
            <h2 className="opacity-70 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900">
              The Brand and the Bottleneck
            </h2>
          </div>

          <div className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-800 leading-[1.5] sm:leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6 text-justify">
            <p>
              A growing D2C wellness startup specializing in adaptogenic beverages had built a loyal base, but their growth curve was flattening. Despite investing in influencer partnerships and regular content pushes, conversion rates were dipping and paid media returns were inconsistent. The core issue? The team was spending too much time reacting to performance metrics instead of proactively adapting to them.
            </p>
          </div>
        </div>

        {/* The Shift: Integrating Agentic AI */}
        <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans mb-8 lg:mb-12">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[18px] sm:w-[20px] lg:w-[28px] h-[10px] sm:h-[12px] lg:h-[15px]"
            />
            <h2 className="opacity-70 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900">
              The Shift: Integrating Agentic AI
            </h2>
          </div>

          <div className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-800 leading-[1.5] sm:leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6 text-justify">
            <p>
              Company implemented an Agentic AI platform with three key capabilities:
            </p>
            <p>
              - Autonomous Goal Setting: The AI understood overarching sales and engagement goals and devised creative content strategies aligned with them-no prompt needed.<br />
              - Dynamic Campaign Evolution: It continuously monitored user interactions and dynamically tweaked ads, emails, and visuals in real-time.<br />
              - Micro-Personalization at Scale: Instead of basic demographics, it used behavioral signals like scroll velocity, abandoned cart timing, and preferred content formats to hyper-personalize customer journeys.
            </p>
            <p>
              This wasn't automation-it was adaptation.
            </p>
          </div>
        </div>
      </div>

      {/* Mid Section */}
      <div className="flex justify-center w-full my-8 lg:my-10 px-4 lg:px-6">
        <div className="bg-black w-full lg:w-[1034px] h-auto lg:h-[288px] rounded-2xl lg:rounded-[48px] px-6 lg:px-12 py-8 lg:py-10 flex flex-col lg:flex-row justify-between items-center text-white shadow-xl">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-[180px] h-[180px] lg:w-[300px] lg:h-[264px] lg:mt-[-50px]">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-[64px] opacity-30" />
              <img
                src={micman}
                alt="Flow of Ideas Icon"
                className="relative z-10 max-lg:w-[150px] mt-[30px] w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="text-center lg:text-left mt-6 lg:mt-0 lg:ml-8 max-w-[520px]">
            <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] text-white font-bold leading-[1.4] sm:leading-[1.5] lg:leading-[1.6]">
              Autonomous Intelligence, Aligned with Your Audience.
            </p>
          </div>
        </div>
      </div>

      {/* The Results: From Static to Strategic */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:py-12 space-y-8 lg:space-y-10 lg:ml-[40%]">
        <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[18px] sm:w-[20px] lg:w-[28px] h-[10px] sm:h-[12px] lg:h-[15px]"
            />
            <h2 className="opacity-70 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900">
              The Results: From Static to Strategic
            </h2>
          </div>

          <div className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-800 leading-[1.5] sm:leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6 text-justify">
            <p>
              Within 60 days, the outcomes spoke for themselves:
            </p>
            <p>
              - CTR Uplift: Click-through rates improved by 37%.<br />
              - Content Efficiency: 5x increase in the volume of high-performing content pieces.<br />
              - Reduced CAC: Customer acquisition costs dropped by 22%.<br />
              - Email Reengagement: Open rates jumped from 19% to 41%.
            </p>
            <p>
              More importantly, the marketing team shifted from being overwhelmed with A/B tests to focusing on high-level brand storytelling and long-term strategy. The AI did the iterative labor-they returned to creative thinking.
            </p>
          </div>
        </div>

        {/* Key Insight: AI That Thinks, Not Just Acts */}
        <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[18px] sm:w-[20px] lg:w-[28px] h-[10px] sm:h-[12px] lg:h-[15px]"
            />
            <h2 className="opacity-70 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900">
              Key Insight: AI That Thinks, Not Just Acts
            </h2>
          </div>

          <div className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-800 leading-[1.5] sm:leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6 text-justify">
            <p>
              What makes Agentic AI transformative is its intentionality. Unlike traditional AI systems that require constant human direction, agentic systems understand objectives and self-direct actions. They can test, learn, pivot, and even initiate new tactics independently-all while staying aligned with brand identity.
            </p>
          </div>
        </div>

        {/* Section: Conclusion */}
        <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
          {/* IMPORTANT FACT box - Responsive and centered on mobile/tablet */}
          <div className="lg:absolute relative lg:-left-[320px] lg:top-[-145px] w-[260px] sm:w-[300px] md:w-[320px] lg:w-[245px] h-auto lg:h-[335px] mx-auto lg:mx-0 mb-6 lg:mb-0 bg-[#ccc6bd5d] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] px-3 sm:px-4 lg:px-6 py-5 sm:py-6 lg:py-8 text-center shadow-md">
            <img
              src={tick}
              alt="Tick Mark"
              className="absolute top-[-25px] sm:top-[-30px] lg:top-[-45px] right-2 w-[35px] sm:w-[45px] lg:w-[70px] h-[35px] sm:h-[45px] lg:h-[70px] opacity-30 pointer-events-none select-none"
            />

            <h3 className="opacity-70 text-[12px] sm:text-[14px] md:text-[16px] lg:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 lg:mb-2 mt-4 sm:mt-5 lg:mt-0">
              Important Fact
            </h3>

            <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm text-gray-700 leading-[1.4] sm:leading-[1.5] lg:leading-relaxed mb-3 sm:mb-4 lg:mb-2 text-justify">
              Unlike traditional automation, Agentic AI doesn't wait for commands. It sets its own objectives, learns from your customer data, and adjusts strategy on the go, just like a human marketing strategist, only faster and more precise.
            </p>

            <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm text-gray-700 leading-[1.4] sm:leading-[1.5] lg:leading-relaxed text-left">
              → The future isn't automated, it's intelligent.
            </p>
          </div>

          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[18px] sm:w-[20px] lg:w-[28px] h-[10px] sm:h-[12px] lg:h-[15px]"
            />
            <h2 className="opacity-70 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900">
              Conclusion: Co-Creation is the Future
            </h2>
          </div>

          <div className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-800 leading-[1.5] sm:leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6 text-justify">
            <p>
              Agentic AI doesn't eliminate the role of human marketers-it elevates it. By managing the complexity of personalization and real-time optimization, marketers are empowered to become visionaries again. In this new era, successful brands will be the ones that move from automation to collaboration with autonomous intelligence-where marketing isn't just efficient, but intuitive.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-3 md:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-[30px] px-8  pb-10 lg:pb-20 lg:px-30 xl:px-40">
        {/* Recommended Articles */}
        <div className="space-y-4 lg:mt-[80px] w-full lg:w-[260px]">
          <h3 className="opacity-70 font-kollektif text-sm sm:text-base lg:text-lg  font-semibold text-gray-800 leading-[1.74] text-center">
            Recommended Articles
          </h3>
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
        </div>

        {/* Comment Box */}
        <div className="flex-1 lg:mt-[148px]">
          <h3 className="opacity-70 font-kollektif text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2 text-center xl:text-start">
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