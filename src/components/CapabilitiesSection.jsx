import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import whiteBox from "../assets/capabilites/white-box.png";
import blackBox from "../assets/capabilites/black-box.png";
import circuit from "../assets/capabilites-bg.png";

const icons = import.meta.glob("../assets/capabilites/*.png", { eager: true });

const slideInFromTop = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const gridItems = [
  {
    text: "Intelligent Web Engineering",
    text2:
      "We build robust, scalable, and fully responsive websites that reflect your brand and support business growth. Our web solutions are optimized for performance, speed, and seamless user experience.",
    icons: ["C1-1.png", "C1-2.png", "C1-3.png", "C1-4.png"],
  },
  {
    text: "Agile DevOps & Scalable Deployments",
    text2:
      "We craft high-performance mobile apps that work flawlessly across Android and iOS. Designed for reach, reliability, and user engagement, our apps turn your ideas into impactful digital products.",
    icons: ["C2-1.png", "C2-2.png", "C2-3.png", "C2-4.png"],
  },
  {
    text: "Scalable E-Commerce Architectures",
    text2:
      "From product catalogues to secure payments, we deliver full-fledged e-commerce platforms that are fast, scalable, and conversion-focused. Our solutions are built to simplify operations and grow online sales.",
    icons: ["C3-1.png", "C3-2.png", "C3-3.png", "C3-4.png"],
  },
  {
    text: "Data-Driven Intelligence & Insights",
    text2:
      "We turn your business data into smart decisions. Through dashboards, analytics, and forecasting tools, we help you unlock insights that drive strategic growth and operational efficiency.",
    icons: ["C4-1.png", "C4-2.png", "C4-3.png", "C4-4.png"],
  },
  {
    text: "Experience-First Interface Design",
    text2:
      "Our UI/UX design approach is centred around people. We create intuitive, visually compelling digital experiences that reflect your brand and keep users engaged from first click to final conversion.",
    icons: ["C5-1.png", "C5-2.png", "C5-3.png", "C5-4.png"],
  },
  {
    text: "Infrastructure & System Orchestration",
    text2:
      "We architect secure, scalable, and high-performing backend systems. From database management to cloud infrastructure, we ensure your tech stack runs efficiently and reliably.",
    icons: ["C6-1.png", "C6-2.png", "C6-3.png", "C6-4.png"],
  },
  {
    text: "Purpose-Built Software Solutions",
    text2:
      "Every business is unique and so are our solutions. We design and develop custom software built specifically for your workflows, challenges, and long-term goals.",
    icons: ["C7-1.png", "C7-2.png", "C7-3.png", "C7-4.png"],
  },
  {
    text: "Agile DevOps & Scalable Deployments",
    text2:
      "We streamline your software lifecycle with agile DevOps practices, CI/CD pipelines, and cloud-native deployment strategies, so your product goes to market faster, stronger, and with less friction.",
    icons: ["C9-1.png", "C9-2.png", "C9-3.png", "C9-4.png"],
  },
  {
    text: "Emerging Tech & Smart AI Systems",
    text2:
      "We explore the edge of innovation. From automation to predictive modelling and intelligent systems, we integrate advanced technologies that solve niche business problems.",
    icons: ["C8-1.png", "C8-2.png", "C8-3.png", "C8-4.png"],

  },
];








const CapabilitiesSection = () => {
  return (
    <div className="relative bg-[#121212] text-white w-full overflow-visible py-[3rem] md:py-[8rem] 
 xl:px-[13%] lg:px-[9%] px-[5%] mt-[200px] xl:mt-[10px]">
      {/* FLEX CONTAINER */}
      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[4rem] max-[425px]:gap-[3rem]">

        {/* LEFT - Grid Section */}
        <div className="relative z-[1] w-full flex justify-center lg:justify-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[15px]">
            {gridItems.map((item, index) => {
              const text2Bg = index % 2 === 0 ? blackBox : whiteBox;
              const iconsBg = index % 2 === 0 ? whiteBox : blackBox;
              const textColor = index % 2 === 0 ? "text-white" : "text-black";

              return (
                <div
                  key={index}
                  className="relative w-[180px] h-[180px] xl:w-[180px] xl:h-[180px] md:w-[160px] md:h-[160px] sm:w-[140px] sm:h-[140px] max-[360px]:w-[160px] max-[360px]:h-[160px] group perspective-[1000px] hover:z-[3] transition-all duration-500 ease-in-out mx-auto"

                >
                  {/* ICONS BACKGROUND */}
                  <div
                    className={`absolute top-0 left-0 p-[30px] md:p-[20px] sm:p-[15px] w-full h-full bg-cover bg-center z-[1] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto flex flex-col items-start justify-start`}
                    style={{ backgroundImage: `url(${iconsBg})` }}
                  >
                    <div className="grid grid-cols-3 grid-rows-2 gap-[10px]">
                      {item.icons.map((icon, iconIndex) => (
                        <img
                          key={iconIndex}
                          src={icons[`../assets/capabilites/${icon}`].default}
                          alt="icon"
                          className="w-[40px] h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] object-contain animate-fadeIn"
                        />
                      ))}
                    </div>
                  </div>

                  {/* DEFAULT CARD */}
                  <div
                    className={`w-full h-full bg-cover bg-center rounded-[20px] transition-all duration-500 ease-in-out flex items-center justify-center text-center relative z-[2] group-hover:transform group-hover:scale-[0.9] group-hover:translate-y-[75px] group-hover:translate-x-[40px] group-hover:rotate-[15deg] group-hover:rotate-x-[6deg] group-hover:rotate-y-[-8deg] group-hover:shadow-[inset_0_0_35px_rgba(255,255,255,0.15),0_25px_55px_rgba(0,0,0,0.6)] group-hover:brightness-[1.1] group-hover:contrast-[1.02]`}
                    style={{ backgroundImage: `url(${index % 2 === 0 ? whiteBox : blackBox})` }}
                  >
                    <p className={`font-avenir font-normal text-[12px] md:text-[11px] sm:text-[10px] max-w-[80%] leading-[165%] ${index % 2 === 0 ? "text-black" : "text-white"} group-hover:hidden`}>
                      {item.text}
                    </p>
                  </div>

                  {/* TEXT2 BACKGROUND */}
                  <div
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center z-[3] opacity-0 group-hover:opacity-100 flex items-center justify-center pointer-events-none transition-all duration-500 ease-in-out group-hover:translate-y-[75px] group-hover:translate-x-[40px] group-hover:rotate-[15deg] group-hover:rotate-x-[6deg] group-hover:rotate-y-[-8deg] p-[16px] sm:p-[10px] max-[360px]:p-[6px]`}
                    style={{ backgroundImage: `url(${text2Bg})` }}
                  >
                    <p className={`font-avenir font-normal text-[11px] sm:text-[10px] max-[360px]:text-[9px] max-w-[90%] leading-[150%] ${textColor} animate-fadeIn text-center break-words`}>
                      {item.text2}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT - Text Section */}
        <motion.div
          className="relative flex flex-col items-center lg:items-start justify-start w-full lg:w-[500px] min-h-[300px] z-[5] mt-[50px] lg:mt-0 mb-[-190px] lg:-translate-y-[18%]"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          <motion.h2
            variants={slideInFromTop}
            className="text-[36px] md:text-[30px] sm:text-[26px] md:mt-[-70px] font-bold mb-[1rem] text-white text-center lg:text-left"
          >
            CAPABILITIES
          </motion.h2>

          <motion.div variants={slideInFromTop} className="text-center lg:text-left">
            <Link
              to="/capabilities"
              className="relative overflow-hidden max-sm:w-[200px] md:mb-[-10px]  bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] text-white text-[16px] sm:text-[14px] font-medium px-[36px] py-[14px] sm:px-[28px] sm:py-[12px] rounded-[40px] cursor-pointer transition-all duration-300 ease-in-out hover:from-[#3c3c3c] hover:to-[#2a2a2a] no-underline inline-block hover:text-black before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[300%] before:h-[300%] before:bg-[radial-gradient(circle,#D6BF7C_0%)] before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:opacity-50 before:rounded-full before:transition-all before:duration-500 hover:before:scale-100 hover:before:opacity-100">
              <span className="relative z-10">Learn More</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Circuit Image - positioned to touch right edge of screen */}
      <motion.img
        src={circuit}
        alt="Circuit Design"
        className="absolute top-[450px] right-[20px] xl:right-[-40px] 2xl:right-[-50px] w-[474px] h-[249px] opacity-80 z-0 pointer-events-none hidden xl:block object-contain"
        variants={slideInFromTop}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      />


    </div>
  );
};

export default CapabilitiesSection;