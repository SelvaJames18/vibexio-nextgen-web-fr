import React, { useState } from "react";
import chipbookWithAi from "../../../assets/blog/aistonks.png";
import dp from "../../../assets/blog/dp.png";
import bulletin from "../../../assets/blog/bulletin.png";
import questionmark from "../../../assets/blog/questionmark.png";
import bulbIcon from "../../../assets/blog/bulbicon.png";
import tick from "../../../assets/blog/tick.png";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const FinanceBlog = () => {
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
      {/* Hero Section */}
      <div className="overflow-hidden flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[512px] gap-0 lg:gap-[257px] 
      bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F] text-white px-6 lg:px-16 py-12 lg:py-20 rounded-b-[48px] shadow-xl">

        <Link
          to="/blogs"
          className="fixed top-[120px] left-[60px] bg-white rounded-full text-black p-[10px] font-semibold flex items-center justify-center shadow z-50 max-[767px]:hidden"
        >
          <IoIosArrowBack className="text-[24px]" />
        </Link>

        {/* Text Section */}
        <div className="max-w-xl mt-8 max-lg:mt-[80px] lg:mt-[100px] text-center lg:text-left">
          <h2 className="text-[20px] lg:text-[36px] font-semibold text-gray-300">
            The Evolving Future of
          </h2>
          <h1 className="text-[24px] lg:text-[36px] font-semibold mt-2 lg:mt-0">
            <span className="font-bold lg:text-[40px] text-white">Finance</span>: A Case Study on the<br />
            Intelligence Revolution
          </h1>
          <p className="text-sm italic text-gray-400 mt-3 lg:mt-5">July 28, 2025</p>
        </div>

        {/* Icon Section */}
        <div className="flex justify-center w-full lg:w-auto mt-8 lg:mt-0">
          <div className="relative lg:mt-[100px] w-[280px] h-[254px] sm:w-[300px] sm:h-[270px] md:w-[320px] md:h-[280px] lg:w-[345px] lg:h-[312px] flex justify-center items-center">

            {/* Background Shadow Ellipse */}
            <div className="absolute w-[422px] h-[416px] rounded-full border border-black bg-white/30 opacity-30 blur-[257px] z-0" />

            {/* Main Image */}
            <img
              src={chipbookWithAi}
              alt="AI Finance Revolution"
              className="w-full h-full object-contain z-10 opacity-90 mt-[152px] lg:mt-[162px]"
            />
          </div>
        </div>

      </div>
      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-6 py-8 lg:py-12 space-y-8 lg:space-y-10 lg:ml-[40%]">
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
        <div className="relative max-w-[800px] mx-auto lg:px-6 font-sans">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
            />
            <h1 className="text-[20px] lg:text-[24px] font-bold text-gray-900 opacity-70">
              Introduction: Finance Isn't What It Used to Be
            </h1>
          </div>

          <div className="text-[15px] lg:text-[16px] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
            <p>
              We've entered a time where decisions are made in milliseconds,
              portfolios shift in real time, and financial behaviors are predicted
              before they occur. The force behind this change isn't just digital
              transformation—it's Artificial Intelligence. But the AI revolution in
              finance isn't confined to banking alone. From investment advisory and
              insurance to public sector finance, stock trading, personal wealth
              apps, and auditing, AI is redesigning the DNA of financial systems.
            </p>

            <p>
              This case study explores how finance is being fundamentally reshaped
              not just by automation, but by intelligent systems that think, learn,
              and adapt. And how financial businesses that embrace AI are no longer
              just more efficient—they're becoming radically more human-centered.
            </p>
          </div>
        </div>

        {/* Section: Transactions to Transformation */}
        <div className="relative max-w-[800px] mx-auto lg:px-6 font-sans">
          {/* DID YOU KNOW box - shown on all screens but positioned differently */}
          <div className="lg:absolute relative lg:-left-[280px] lg:top-[300px] w-full lg:w-[245px] mb-6 lg:mb-0 lg:h-[199px] bg-[#ccc6bd5d] rounded-[20px] px-6 py-8 text-center shadow-md">
            <img
              src={questionmark}
              alt="Question Mark"
              className="absolute top-[-40px] right-2 w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] opacity-30 pointer-events-none select-none"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2 opacity-70">Did you know?</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              AI in finance is forecasted to grow to $64 billion globally by 2030, at a CAGR of 23.5%.
            </p>
          </div>

          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
            />
            <h2 className="text-[20px] lg:text-[24px] font-bold text-gray-900 opacity-70">
              From Transactions to Transformation: Real Business Shifts
            </h2>
          </div>

          <div className="text-[15px] lg:text-[16px] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
            <p>
              At a leading wealth management firm, decisions once based solely on historical data and gut
              instinct are now layered with deep AI insights. Portfolios are continuously optimized using
              real-time market behavior, client sentiment, and global news flow. The result is a dynamic
              investment model one that adjusts risk exposure on the fly, predicts downturns early, and
              ensures that no client is treated as "average."
            </p>
            <p>
              In the insurance world, AI has made what seemed impossible routine. A mid-sized insurer used
              AI models to analyze photographs of accident damage and past claims histories to process auto
              claims within hours. Underwriting policies that once required medical exams and human
              interviews now happen in seconds through wearable health data and behavioral AI.
            </p>
            <p>
              A personal finance app, built for India's urban middle class, initially struggled to keep users
              engaged beyond the first week. The founders integrated a learning AI that adapted to user
              behavior flagging unnecessary expenses, offering timely nudges, and even suggesting optimal
              investment amounts based on daily cash flow. What was once a static calculator turned into a
              trusted companion, helping users build healthier financial habits without ever feeling judged.
            </p>
          </div>
        </div>
      </div>
      {/* Mid Section */}
      <div className="flex justify-center w-full px-4 xl:px-0">
        <div className="bg-black text-white w-full max-w-[1034px] rounded-[40px] lg:rounded-[83px] px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-center shadow-xl">

          {/* Left Image Block */}
          <div className="w-full max-w-[300px] h-auto flex justify-center items-center">
            <div className="relative w-[180px] h-[180px] lg:w-[300px] lg:h-[264px]">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-[64px] opacity-30" />
              <img
                src={bulbIcon}
                alt="Flow of Ideas Icon"
                className="relative z-10 max-lg:w-[150px] w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Text Block */}
          <div className="mt-8 lg:mt-0 lg:ml-10 flex-1 flex items-center justify-center">
            <div className="text-center lg:text-left">
              <p className="font-kollektif text-xl sm:text-[25px] lg:text-3xl font-bold leading-snug drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                Where Algorithms Handle the Books,<br />
                <span className="block mt-2">Humans Focus on Strategy.</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8 lg:py-12 space-y-8 lg:space-y-10 lg:ml-[40%]">
        {/* AI in backend */}
        <div className="relative max-w-[800px] mx-auto lg:px-6 font-sans">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
            />
            <h2 className="text-[20px] lg:text-[24px] font-bold text-gray-900 opacity-70">
              The AI Effect in the Financial Back-End
            </h2>
          </div>

          <div className="text-[15px] lg:text-[16px] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
            <p>
              Behind the scenes, AI is cleaning up the traditionally tedious parts of finance. Accounting systems powered by AI now auto-classify transactions, flag anomalies, and predict future liabilities. Auditors aren't chasing missing entries they're interpreting what the patterns mean. Government finance departments are deploying machine learning to uncover inefficiencies, detect subsidy misuse, and build smarter public budgets.
            </p>
            <p>
              Even trading desks, which once relied on complex rules and technical indicators, are now infused with AI systems capable of parsing global sentiment, language tone in earnings calls, and market fear levels. These systems don't just respond they anticipate.
            </p>
          </div>
        </div>

        {/* Human-Centered Intelligence */}
        <div className="relative max-w-[800px] mx-auto lg:px-6 font-sans">
          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
            />
            <h2 className="text-[20px] lg:text-[24px] font-bold text-gray-900 opacity-70">
              A More Human-Centered Intelligence
            </h2>
          </div>

          <div className="text-[15px] lg:text-[16px] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
            <p>
              What's striking isn't just AI's efficiency it's empathy. Financial services powered by AI are becoming more personal, more contextual, and more empowering. Individuals get timely, relevant nudges. Small businesses gain forecasting tools once reserved for corporate giants. Advisors are freed from number-crunching to focus on meaningful client relationships.
            </p>
            <p>
              This isn't about replacing finance professionals. It's about evolving them. In the new era, the winners will be those who understand that intelligence isn't just about speed it's about understanding. AI offers finance the ability to scale trust, simplify complexity, and make people feel seen and supported in their financial journeys.
            </p>
          </div>
        </div>

        {/* Section: Conclusion */}
        <div className="relative max-w-[800px] mx-auto lg:px-6 font-sans">
          {/* IMPORTANT FACT box - shown on all screens but positioned differently */}
          <div className="lg:absolute relative lg:-left-[280px] lg:top-[20px] w-full lg:w-[245px] mb-6 lg:mb-0 lg:h-[199px] bg-[#ccc6bd5d] rounded-[20px] px-6 py-8 text-center shadow-md">
            <img
              src={tick}
              alt="Tick Mark"
              className="absolute top-[-40px] right-2 w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] opacity-30 pointer-events-none select-none"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2 opacity-70">Important Fact</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              The Reserve Bank of India (RBI) is actively testing AI-driven credit models for NBFC oversight and financial inclusion
            </p>
          </div>

          <div className="relative mb-6 pl-8 lg:pl-0">
            <img
              src={bulletin}
              alt="Bulletin"
              className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
            />
            <h2 className="text-[20px] lg:text-[24px] font-bold text-gray-900 opacity-70">
              Conclusion: Intelligence Is Now a Financial Asset
            </h2>
          </div>

          <div className="text-[15px] lg:text-[16px] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
            <p>
              We're no longer in a world where AI in finance is a futuristic concept. It's already happening and accelerating.
              Every financial business, whether it's a small fintech app or a global insurance firm, now faces a pivotal choice:
              adapt with AI or be outpaced by it.
            </p>
            <p>
              The future of finance isn't cold or robotic. It's adaptive, contextual, and deeply human — because when AI is built
              to understand, it doesn't replace us. It elevates us.
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mt-3 md:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-[30px] px-8  pb-10 lg:pb-20 lg:px-30 xl:px-40">
        {/* Recommended Articles */}
        <div className="space-y-4 lg:mt-[80px] w-full lg:w-[260px]">
          <h3 className="font-kollektif text-sm sm:text-base lg:text-lg opacity-70 font-semibold text-gray-800 leading-[1.74] text-center">
            Recommended Articles
          </h3>
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
        </div>

        {/* Comment Box */}
        <div className="flex-1 lg:mt-[148px]">
          <h3 className="font-kollektif text-sm sm:text-base opacity-70 lg:text-lg font-semibold text-gray-800 mb-2 text-center xl:text-start">
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
    </div >
  );
};

export default FinanceBlog;