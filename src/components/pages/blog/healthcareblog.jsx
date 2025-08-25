import React, { useState } from "react";
import dp from "../../../assets/blog/dp.png";
import bulletin from "../../../assets/blog/bulletin.png";
import questionmark from "../../../assets/blog/questionmark.png";
import tick from "../../../assets/blog/tick.png";
import books from "../../../assets/blog/books.png";
import ellipseForBlog5 from "../../../assets/blog/ellipseForBlog5.png";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const HealthCare = () => {
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
            <div className="flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[512px] gap-8 lg:gap-[100px] bg-gradient-to-r from-[#0F0F0F] to-[#1F1F1F] text-white px-6 lg:px-16 pt-12 pb-0  lg:pb-20 lg:pt-20 rounded-b-[48px] shadow-xl">
                <Link
                    to="/blogs"
                    className="fixed top-[120px] left-[60px] bg-white rounded-full text-black p-[10px] font-semibold flex items-center justify-center shadow z-50 max-[767px]:hidden"
                >
                    <IoIosArrowBack className="text-[24px]" />
                </Link>
                {/* Text Section */}
                <div className="max-w-xl font-[Kollektif] mt-8 max-lg:mt-[80px] lg:mt-[100px] text-center lg:text-left">
                    <h1 className="text-[20px] lg:text-[36px] font-semibold text-gray-300">
                        Rethinking
                        <span className="font-bold lg:text-[40px] text-white"> HealthCare </span>
                        in the Age of Intelligence
                    </h1>
                    <p className="text-[20px] font-[AvenirLTStd-book] text-gray-400 mt-3 lg:mt-5">July 30, 2025</p>
                </div>

                {/* Icon Section */}
                <div className="flex justify-center w-full lg:w-auto mt-8 lg:mt-0">
                    <div className="relative lg:mt-[100px] w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[450px] lg:h-[450px] xl:w-[382px] xl:h-[252px] flex justify-center items-center">
                        {/* Background Shadow Ellipse */}
                        <div className="absolute w-[422px] h-[416px] rounded-full border border-black bg-white opacity-30 blur-[257px] z-0" />
                        {/* Main Image */}
                        <img
                            src={books}
                            alt="AI Marketing Revolution"
                            className="w-full h-full object-contain z-10 opacity-90"
                        />
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:py-12 space-y-8 lg:space-y-10 lg:ml-[40%]">
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
                <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6">
                    <div className="relative mb-6 pl-8 lg:pl-0">
                        <img
                            src={bulletin}
                            alt="Bulletin"
                            className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
                        />
                        <h1 className="opacity-70 text-[20px] font-[Kollektif] sm:text-[22px] lg:text-[24px] font-bold text-gray-900">
                            Introduction
                        </h1>
                    </div>

                    <div className="text-[15px] sm:text-[16px] lg:text-[16px] font-[AvenirLTStd] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
                        <p>
                            Healthcare is undergoing a quiet revolution. Gone are the days when care meant long hospital  queues, rushed doctor visits, and treatment only after symptoms worsened. Today, technology is  pushing the boundaries from AI that predicts illness before it strikes, to mobile apps that put  wellness tools in your pocket, and rural programs that bring specialist care to the last mile.
                        </p>
                        <p>
                            This isn’t just digitization. It’s a structural shift toward intelligence driven, proactive, and personalized  care.
                        </p>
                        <p>
                            In this blog, we explore how AI, data, empathy, and innovation are coming together to redefine  healthcare from how doctors make decisions to how patients take control of their health journeys.  Whether it’s predicting diabetes before the first symptom, or empowering community health  workers with AI insights, the future of healthcare isn’t reactive it’s responsive, real time, and radically  human.
                        </p>
                    </div>
                </div>

                {/* The Rise of Intelligent Healthcare */}
                <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
                    {/* DID YOU KNOW box - Only mobile positioning changed */}
                    <div className="lg:absolute relative lg:-left-[320px] lg:top-[220px] w-full lg:w-[280px] mb-6 lg:mb-0 lg:h-auto bg-[#ccc6bd5d] rounded-[20px] px-6 py-8 text-center shadow-md">
                        <img
                            src={questionmark}
                            alt="Question Mark"
                            className="absolute top-[-40px] right-2 w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] opacity-30 pointer-events-none select-none"
                        />
                        <h3 className="text-[20px] font-[Kollektif] font-semibold text-gray-800 mb-2 opacity-70">Did you know?</h3>
                        <p className="text-[12px] font-[AvenirLTStd] text-gray-800 py-2 px-2 text-left">
                            AI can spot diabetes risk 5 years early. <br />
                            Act before symptoms start.
                        </p>
                    </div>

                    <div className="relative mb-6 pl-8 lg:pl-0">
                        <img
                            src={bulletin}
                            alt="Bulletin"
                            className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
                        />
                        <h1 className="opacity-70 text-[20px] font-[Kollektif] sm:text-[22px] lg:text-[24px] font-bold text-gray-900">
                            The Rise of Intelligent Healthcare
                        </h1>
                    </div>
                    <div className="text-[15px] sm:text-[16px] lg:text-[16px] font-[AvenirLTStd] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
                        <p>
                            Healthcare is no longer just about treating illness it’s evolving into a dynamic, data driven experience  that begins with awareness and prevention. With AI at the center, the system is shifting from reactive  treatments to proactive wellness solutions. From health quizzes to predictive care models, intelligent  healthcare is transforming how people engage with their health, putting more power into the hands  of the individual.            </p>
                    </div>
                </div>

                {/* Curiosity as the New Entry Point */}
                <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
                    <div className="relative mb-6 pl-8 lg:pl-0">
                        <img
                            src={bulletin}
                            alt="Bulletin"
                            className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
                        />
                        <h1 className="opacity-70 text-[20px] font-[Kollektif] sm:text-[22px] lg:text-[24px] font-bold text-gray-900">
                            Curiosity as the New Entry Point
                        </h1>
                    </div>

                    <div className="text-[15px] sm:text-[16px] lg:text-[16px] font-[AvenirLTStd] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
                        <p>
                            In this new model, care starts with a simple question, not a symptom. When a user shows interest in  their health, the system asks: “Would you like to check your health score or consult a doctor for  wellness?” This shift from illness based interaction to curiosity driven engagement encourages  individuals to take charge of their well being long before a problem occurs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid Section - Only mobile padding changed */}
            <div className="flex justify-center w-full px-4 lg:px-6">
                <div className="bg-black w-full max-w-[1034px] rounded-[40px] lg:rounded-[83px] px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-center shadow-xl text-white">

                    {/* Left Image with blur glow */}
                    <div className="relative flex justify-center items-center w-full max-w-[300px]">
                        <div className="absolute inset-0 bg-white rounded-full blur-[64px] opacity-30 z-0" />
                        <img
                            src={ellipseForBlog5}
                            alt="ellipseForBlog5 to Superintelligence"
                            className="relative z-10 w-full object-contain rounded-[40px]"
                        />
                    </div>

                    {/* Right Text */}
                    <div className="mt-8 lg:mt-0 lg:ml-10 flex-1 flex items-center justify-center">
                        <div className="text-center lg:text-left">
                            <p className="font-kollektif text-xl sm:text-[25px] lg:text-3xl font-bold leading-snug drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                                Care isn’t getting replaced.
                            </p>
                            <p className="font-kollektif text-xl sm:text-[25px] lg:text-3xl font-bold leading-snug mt-2 drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                                It’s getting upgraded.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:py-12 space-y-8 lg:space-y-10 lg:ml-[40%]">
                {/* AI Powered Health Risk Screening */}
                <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
                    <div className="relative mb-6 pl-8 lg:pl-0">
                        <img
                            src={bulletin}
                            alt="Bulletin"
                            className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
                        />
                        <h1 className="opacity-70 text-[20px] font-[Kollektif] sm:text-[22px] lg:text-[24px] font-bold text-gray-900">
                            AI Powered Health Risk Screening
                        </h1>
                    </div>

                    <div className="text-[15px] sm:text-[16px] lg:text-[16px] font-[AvenirLTStd] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
                        <p>
                            The experience continues with a free health risk quiz powered by AI. By analyzing personal metrics  like BMI, sugar levels, sleep quality, and family history, the system evaluates the user’s risk for  chronic conditions. Instead of overwhelming users with data, it gives clear feedback such as, “Your  diabetes risk is medium. Consider a full body check-up.” This personalized insight helps people take  the right step at the right time.
                        </p>
                    </div>
                </div>

                {/* Personalized Packages and Protection */}
                <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
                    <div className="relative mb-6 pl-8 lg:pl-0">
                        <img
                            src={bulletin}
                            alt="Bulletin"
                            className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
                        />
                        <h1 className="opacity-70 text-[20px] font-[Kollektif] sm:text-[22px] lg:text-[24px] font-bold text-gray-900">
                            Personalized Packages and Protection
                        </h1>
                    </div>

                    <div className="text-[15px] sm:text-[16px] lg:text-[16px] font-[AvenirLTStd] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
                        <p>
                            Once risks are identified, the platform offers relevant wellness packages like a “Preventive Package”  priced at ₹799 that includes a full health check-up tailored to the user’s needs. In parallel, insurance  options are recommended, such as a ₹299/month plan that covers both the current tests and any  future issues identified by the AI. This integration makes wellness more accessible and financially  manageable.
                        </p>
                    </div>
                </div>
                {/* A New Ecosystem for Affordable Wellness */}
                <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
                    <div className="relative mb-6 pl-8 lg:pl-0">
                        <img
                            src={bulletin}
                            alt="Bulletin"
                            className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
                        />
                        <h1 className="opacity-70 text-[20px] font-[Kollektif] sm:text-[22px] lg:text-[24px] font-bold text-gray-900">
                            A New Ecosystem for Affordable Wellness
                        </h1>
                    </div>

                    <div className="text-[15px] sm:text-[16px] lg:text-[16px] font-[AvenirLTStd] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
                        <p>
                            This ecosystem model combining AI, diagnostics, and insurance redefines how healthcare operates. It  reduces emergency visits, improves outcomes, and makes personalized care affordable. For providers  and insurers, it creates a sustainable, outcome-based framework that benefits all stakeholders.
                        </p>
                    </div>
                </div>
                {/* A Future That Feels More Human */}
                <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
                    <div className="relative mb-6 pl-8 lg:pl-0">
                        <img
                            src={bulletin}
                            alt="Bulletin"
                            className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
                        />
                        <h1 className="opacity-70 text-[20px] font-[Kollektif] sm:text-[22px] lg:text-[24px] font-bold text-gray-900">
                            A Future That Feels More Human
                        </h1>
                    </div>

                    <div className="text-[15px] sm:text-[16px] lg:text-[16px] font-[AvenirLTStd] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
                        <p>
                            Ultimately, AI in healthcare isn’t about replacing doctors it’s about making care more human. By  empowering users with knowledge, offering affordable solutions, and supporting them with  consistent follow-up, this model helps people lead healthier lives. It turns healthcare into a lifelong  relationship, not just a one-time event.            </p>
                    </div>
                </div>
                {/* Conclusion Towards a Smarter  Kinder Healthcare */}
                <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-6 font-sans">
                    {/* DID YOU KNOW */}
                    <div className="lg:absolute relative lg:-left-[320px] lg:top-[-560px] w-full lg:w-[280px] mb-6 lg:mb-0 lg:h-auto bg-[#ccc6bd5d] rounded-[20px] px-6 py-8 text-center shadow-md">
                        <img
                            src={questionmark}
                            alt="Question Mark"
                            className="absolute top-[-40px] right-2 w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] opacity-30 pointer-events-none select-none"
                        />
                        <h3 className="text-[20px] font-[Kollektif] font-semibold text-gray-800 mb-2 opacity-70">Did you know?</h3>
                        <p className="text-[12px] font-[AvenirLTStd] text-gray-800 py-2 px-2 text-left">
                            60% of your health comes from daily habits. <br />
                            Prevention starts with you.
                        </p>
                    </div>

                    <div className="relative mb-6 pl-8 lg:pl-0">
                        <img
                            src={bulletin}
                            alt="Bulletin"
                            className="absolute left-0 lg:-left-[40px] top-3 w-[20px] lg:w-[28px] h-[12px] lg:h-[15px]"
                        />
                        <h1 className="opacity-70 text-[20px] font-[Kollektif] sm:text-[22px] lg:text-[24px] font-bold text-gray-900">
                            Conclusion Towards a Smarter  Kinder Healthcare
                        </h1>
                    </div>

                    <div className="text-[15px] sm:text-[16px] lg:text-[16px] font-[AvenirLTStd] text-gray-800 leading-[1.6] lg:leading-[1.75rem] space-y-4 lg:space-y-6">
                        <p>
                            As healthcare becomes increasingly intelligent, the focus is no longer just on curing sickness but on  fostering sustained well being. By combining curiosity driven engagement, AI powered risk  assessments, affordable check up packages, and smart insurance, we’re building a future where  proactive care is the norm not the exception. This model is more than just technology it’s a  commitment to making healthcare accessible, preventive, and deeply human. The journey to better  health begins not at the hospital, but at home with a question, a click, or a simple check in.            </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
      <div className="mt-3 md:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-[30px] px-8  pb-10 lg:pb-20 lg:px-30 xl:px-40">
        {/* Recommended Articles */}
        <div className="space-y-4 lg:mt-[80px] w-full lg:w-[260px]">
          <h3 className="font-kollektif text-sm  opacity-70 sm:text-base lg:text-lg  font-semibold text-gray-800 leading-[1.74] text-center">
            Recommended Articles
          </h3>
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
          <div className="h-[60px] lg:h-[65px] bg-[#EDECE9] rounded-[16px] w-full border border-[#D3D1CB] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
        </div>

        {/* Comment Box */}
        <div className="flex-1 lg:mt-[148px]">
          <h3 className="font-kollektif text-sm opacity-70 sm:text-base lg:text-lg font-semibold text-gray-800 mb-2 text-center xl:text-start">
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

export default HealthCare;