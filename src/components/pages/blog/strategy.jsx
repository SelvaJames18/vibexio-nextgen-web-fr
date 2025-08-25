import React, { useState } from "react";
import dp from "../../../assets/blog/dp.png";
import bulletin from "../../../assets/blog/bulletin.png";
import questionmark from "../../../assets/blog/questionmark.png";
import creativity from "../../../assets/blog/creativity.png";
import ai_hu from "../../../assets/blog/ai_hu.png";
import agentic from "../../../assets/blog/agentic.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

// Card Components
const WhatsChangingCard = ({ topPosition }) => (

  <div
    className={`lg:absolute lg:-left-[300px] ${topPosition} w-[245px] h-[331px] mx-auto lg:mx-0 mb-8 lg:mb-0`}
  >
    <div className="relative bg-[#ccc6bd]/[0.17] rounded-[20px] px-5 pt-6 pb-4 text-left shadow-md w-full h-full">

      {/* Decorative Icon */}
      <img
        src={creativity}
        alt="Creativity Icon"
        className="absolute -top-8 -right-2 w-[70px] h-[70px] opacity-30 pointer-events-none"
      />

      <div className="space-y-6 lg:space-y-10">
        {/* Heading */}
        <h3 className="font-kollektif font-bold text-base sm:text-lg leading-[1.5] tracking-normal opacity-70 mb-3 z-10">
          What's changing?
        </h3>

        {/* Content */}
        <div className="font-avenir text-justify z-10 font-normal text-[10px] sm:text-xs leading-[1.6] tracking-normal opacity-[0.68]">
          <p className="mb-2">AI agents now:</p>
          <ul className="list-disc list-inside space-y-[4px] text-[10px] sm:text-xs">
            <li>Draft your reports</li>
            <li>Optimize your campaigns</li>
            <li>Negotiate your supply rates</li>
          </ul>
        </div>

        <p className="font-black italic text-[10px] sm:text-xs leading-[1.5] tracking-normal opacity-[0.6] mt-3">
          "All before you sip your morning coffee. Welcome to the era of autonomous productivity."
        </p>
      </div>
    </div>
  </div>
);

const DidYouKnowCard = ({ topPosition }) => (
  <div
    className={`relative lg:absolute lg:-left-[300px] ${topPosition} w-[245px] h-[302px] mx-auto lg:mx-0 mb-8 lg:mb-0`}
  >
    <div className="relative w-full h-full bg-[#ccc6bd]/[0.17] rounded-[20px] px-5 pt-6 pb-4 text-left shadow-md">

      {/* Decorative Icon */}
      <img
        src={questionmark}
        alt="Question Mark Icon"
        className="absolute -top-8 -right-2 w-[70px] h-[70px] opacity-30 pointer-events-none select-none"
      />

      <div className="space-y-6 lg:space-y-10">
        {/* Heading */}
        <h3 className="font-kollektif font-bold text-base sm:text-lg leading-[1.5] tracking-normal opacity-70 z-10">
          Did You Know?
        </h3>

        {/* Content */}
        <div className="font-avenir text-justify z-10 font-normal text-[10px] sm:text-xs leading-[1.6] tracking-normal opacity-[0.68]">
          <p>
            By 2025, over 65% of enterprise decisions will be made with AI assistance — not just informed, but co-authored by algorithms.
          </p>
        </div>

        <p className="font-black text-[10px] sm:text-xs leading-[1.5] tracking-normal opacity-60 mt-3">
          Businesses aren't using AI. <br />
          They're partnering with it.
        </p>
      </div>
    </div>
  </div>
);

const strategy = () => {
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
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-[400px] lg:h-[512px] gap-8 lg:gap-[100px] bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F] text-white px-4 sm:px-6 lg:px-16 pt-[100px] sm:py-16 lg:py-20 rounded-b-[24px] sm:rounded-b-[48px] shadow-xl">
        <Link
          to="/blogs"
          className="fixed top-[120px] left-[60px] bg-white rounded-full text-black p-[10px] font-semibold flex items-center justify-center shadow z-50 max-[767px]:hidden"
        >
          <IoIosArrowBack className="text-[24px]" />
        </Link>
        <div className="max-w-xl mt-4 sm:mt-8 lg:mt-[100px] lg:ml-[70px] text-center lg:text-left">
          <h1 className="leading-[1.2]">
            <span className="font-kollektif font-normal text-white block text-base xs:text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-[1.2] whitespace-nowrap pb-5">
              Why Every Business Needs an
            </span>
            <span className="font-kollektif font-bold text-white text-lg xs:text-2xl sm:text-4xl md:text-5xl xl:text-6xl leading-[1.2]">
              AI Strategy <span className="font-kollektif font-normal">in</span> 2025
            </span>
          </h1>
          <p className="font-avenir font-light italic text-gray-400 mt-4 text-sm sm:text-base lg:text-lg">
            July 17, 2025
          </p>
        </div>

        <div className="flex justify-center w-full lg:w-auto mt-4 lg:mt-0">
          <div className="relative lg:mt-[268px] xl:mt-[200px] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] flex justify-center items-center">
            <div className="absolute w-full h-full rounded-full border border-black bg-white/30 opacity-30 blur-[100px] lg:blur-[257px] z-0" />
            <img src={ai_hu} alt="AI Marketing Revolution" className="w-full h-full z-10 opacity-90" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-none lg:max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:py-12 space-y-10 lg:ml-[40%]">
        {/* Author Section */}
        <div className="flex justify-center lg:justify-end px-2 lg:px-0">
          <div className="flex items-start gap-3 max-w-[300px] lg:mr-[20px]">
            <div
              className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full overflow-hidden border border-gray-200 flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(169, 151, 133, 0.5)',
                boxShadow: 'inset 0px 3px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <img
                src={dp}
                alt="Balakrishnan K N"
                className="w-[30px] h-[30px] object-cover opacity-30"
              />
            </div>
            <div className="flex flex-col text-left">
              <p className="font-avenir font-normal text-gray-800 text-sm sm:text-base lg:text-lg opacity-[70%] leading-tight">
                Balakrishnan K N
              </p>
              <p className="font-avenir text-gray-500 text-xs sm:text-sm lg:text-base opacity-[39%] italic mt-[2px]">
                Founding partner, VibeXio
              </p>
            </div>
          </div>
        </div>

        {/* Section: Intro */}
        <div className="relative max-w-full lg:max-w-[704px] mx-auto px-4 sm:px-6 font-avenir">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
            />
            <h1 className="font-kollektif font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 leading-[1.74]">
              Introduction
            </h1>
          </div>
          <div className="text-xs sm:text-sm lg:text-base text-gray-800 leading-[1.74] space-y-6 text-justify font-normal">
            <p>
              In 2025, the business world isn't competing on price or product alone.
              It's competing on cognition. The rise of AI is no longer theoretical.
              It's infrastructural. From Fortune 500s to agile startups, the most
              resilient businesses aren't just leveraging AI—they're architecting
              intelligence into their operations. But here's the nuance that separates
              the merely digital from the truly disruptive: We've entered the agentic
              era of AI—where systems possess not just data, but direction. And looming
              just beyond? Superintelligence—not as myth, but as a matter of strategy.
            </p>
          </div>
        </div>

        {/* From Tool to Agent Section */}
        <div className="relative max-w-full lg:max-w-[704px] mx-auto px-4 sm:px-6 font-avenir">
          <div className="relative mb-6 pl-8 lg:pl-0 z-30">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
            />
            <h1 className="font-kollektif font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 opacity-70 relative z-30 leading-[1.74]">
              From Tool to Agent
            </h1>
          </div>
          <div className="text-xs sm:text-sm lg:text-base text-gray-800 leading-[1.74] space-y-6 text-justify font-normal relative z-30">
            <p>
              For decades, AI served as an instrument—analyzing, automating,
              optimizing. Today, we're seeing the emergence of agentic systems—AI that
              acts with autonomy, adapts through feedback loops, and operates in
              open-ended environments. Agentic AI doesn't wait for instruction. It
              identifies intent, sets objectives, and executes with evolving awareness.
            </p>
            <p className="font-medium">In practical terms:</p>
            <div className="flex items-start gap-2 pl-2">
              <IoIosArrowForward className="mt-1 text-gray-600 flex-shrink-0 min-w-[14px] sm:min-w-[16px]" size={16} />
              <span>AI systems now proactively optimize supply chains, not just report metrics.</span>
            </div>
            <div className="flex items-start gap-2 pl-2">
              <IoIosArrowForward className="mt-1 text-gray-600 flex-shrink-0 min-w-[14px] sm:min-w-[16px]" size={16} />
              <span>Marketing agents dynamically adjust content strategies based on user sentiment in real time.</span>
            </div>
            <div className="flex items-start gap-2 pl-2">
              <IoIosArrowForward className="mt-1 text-gray-600 flex-shrink-0 min-w-[14px] sm:min-w-[16px]" size={16} />
              <span>Sales bots not only respond, but negotiate, prioritize, and learn from each interaction.</span>
            </div>
            <p className="font-medium">
              This isn't the future. It's happening in boardrooms, dashboards, and databases right now.
            </p>
          </div>
        </div>

        {/* The Shift: Superintelligence Section */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <WhatsChangingCard topPosition="lg:top-[100px]" />
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
            />
            <h1 className="font-kollektif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 opacity-70 leading-[1.74] relative">
              Superintelligence
            </h1>
          </div>
          <div className="font-avenir text-xs sm:text-sm lg:text-base font-normal text-gray-800 leading-[1.74] space-y-6 text-justify">
            <p>
              Let's clear something up. We're not claiming to build superintelligent
              machines. That level of AI—systems that outperform the best human minds
              across all fields—is still theoretical.
            </p>
            <p>But here's what matters. The trajectory is undeniable.</p>
            <p>
              AI systems today are already moving beyond task execution into
              decision-making, goal-setting, and contextual learning. From language
              models that write code to autonomous agents managing operations—the seeds
              of superintelligence are being planted.
            </p>
            <p>
              At VibeXio.ai, we help businesses prepare—not by building AGI—but by
              ensuring they have the strategic infrastructure to navigate a world
              shaped by increasingly autonomous intelligence.
            </p>
            <p>
              You don't need a quantum lab to start thinking clearly about the future.
              You just need a partner who understands where it's heading.
            </p>
          </div>
        </div>
      </div>

      {/* Mid Section */}
      <div className="flex justify-center w-full my-0 md:my-10 px-4 xl:px-0">
        <div className="bg-black text-white w-full max-w-[1034px] rounded-[40px] lg:rounded-[83px] px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-center shadow-xl">

          {/* Left Image Block */}
          <div className="w-full max-w-[300px] h-auto flex justify-center items-center">
            <img
              src={agentic}
              alt="Agentic to Superintelligence"
              className="rounded-[40px] w-full object-contain"
            />
          </div>

          {/* Right Text Block */}
          <div className="mt-8 lg:mt-0 lg:ml-10 flex-1 flex items-center justify-center">
            <div className="text-center lg:text-left">
              <p className="font-kollektif text-xl sm:text-[25px] lg:text-3xl font-bold leading-snug drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                We built agents to act.
              </p>
              <p className="font-kollektif text-xl sm:text-[25px] lg:text-3xl font-bold leading-snug mt-2 drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                We craft minds to evolve.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-none lg:max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:py-12 space-y-10 lg:ml-[40%]">
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
            />
            <h2 className="font-kollektif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 opacity-70 leading-[1.74]">
              Why You Need an AI Strategy
            </h2>
          </div>
          <div className="font-avenir text-xs sm:text-sm lg:text-base text-gray-800 space-y-6 text-justify leading-[1.74] font-normal">
            <h3 className="text-sm sm:text-base lg:text-lg text-gray-900 font-normal text-justify leading-[1.74]">
              How intelligently is our company learning, adapting, and deciding?
            </h3>
            <p>
              An AI strategy is not just a tech roadmap—it's a cognitive blueprint for
              your enterprise. Here's what it should include:
            </p>
            <ul className="space-y-3">
              {[
                "Capability Mapping - Where AI fits across your value chain",
                "Agentic Integration - From automation to autonomy",
                "Data Readiness - Clean, actionable, ethically governed",
                "Alignment Protocols - Ensuring AI's outputs align with business, legal, and human values",
                "Experimentation Culture - Pilot fast, learn faster",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <IoIosArrowForward className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm lg:text-base text-justify leading-[1.74]">{item}</span>
                </li>
              ))}
            </ul>
            <p>
              This isn't about implementing the latest hype. It's about ensuring your
              enterprise remains intelligent in an increasingly intelligent world.
            </p>
          </div>
        </div>

        {/* How VibeXio Helps Section */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <DidYouKnowCard topPosition="lg:top-[100px]" />
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
            />
            <h2 className="font-kollektif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 opacity-70 leading-[1.74]">
              How VibeXio Helps
            </h2>
          </div>
          <div className="font-avenir text-xs sm:text-sm lg:text-base text-gray-800 leading-[1.74] text-justify space-y-6">
            <p>
              At VibeXio.ai, we don't just deliver AI—we deliver AI clarity.
              We help businesses:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <IoIosArrowForward className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base leading-[1.74] text-justify">
                  Translate ambiguous ambitions into executable AI roadmaps
                </span>
              </li>
              <li className="flex items-start">
                <IoIosArrowForward className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base leading-[1.74] text-justify">
                  Design and deploy agentic systems that learn, adapt, and scale
                </span>
              </li>
              <li className="flex items-start">
                <IoIosArrowForward className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base leading-[1.74] text-justify">
                  Future-proof operations for a world increasingly shaped by intelligence
                </span>
              </li>
            </ul>
            <p className="leading-[1.74] text-justify">
              We believe AI shouldn't be intimidating—it should be integrated, intentional, and deeply human-centered.
            </p>
            <p className="leading-[1.74] text-justify">
              Our approach is consultative, agile, and obsessed with long-term value—not just one-off implementation.
            </p>
          </div>
        </div>

        {/* Section: Conclusion */}
        <div className="relative max-w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-avenir">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-2 w-5 lg:w-7 h-3 lg:h-4"
            />
            <h2 className="font-kollektif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 opacity-70 leading-[1.74]">
              Conclusion
            </h2>
          </div>
          <div className="font-avenir text-xs sm:text-sm lg:text-base text-gray-800 leading-[1.74] text-justify space-y-6">
            <p>The question isn't whether AI will change your industry.</p>
            <h3 className="font-kollektif text-sm sm:text-base lg:text-lg font-bold leading-[1.74] text-justify">
              It already is.
            </h3>
            <p>
              The question is—will your business be reactive, or relevant?
              There's no need to wait for superintelligence to become real.
              The strategically intelligent move is to start shaping how you'll interact with it—today.
              Ready to elevate your business thinking with intelligence that scales?
              Start your AI blueprint journey with VibeXio.ai at www.vibexio.ai/contact
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-3 md:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-[30px] px-8 pb-20 lg:px-40">
        {/* Recommended Articles */}
        <div className="space-y-4 lg:mt-[80px] w-full lg:w-[260px]">
          <h3 className="font-kollektif text-sm sm:text-base lg:text-lg  font-semibold text-gray-800 leading-[1.74] text-center">
            Recommended Articles
          </h3>
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
        </div>

        {/* Comment Box */}
        <div className="flex-1 lg:mt-[120px]">
          <h3 className="font-kollektif text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2 text-center xl:text-start">
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

export default strategy;