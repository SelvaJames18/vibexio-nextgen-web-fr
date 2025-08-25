import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import cyberIcon from '../assets/cybersecurity.png';
import smartIcon from '../assets/smart-manufacturing.png';
import educationIcon from '../assets/education.png';
import logisticsIcon from '../assets/logistics.png';
import digitalIcon from '../assets/digital.png';
import innovateIcon from '../assets/innovate.png';

const cards = [
  {
    title: 'Cybersecurity & Risk Resilience',
    icon: cyberIcon,
    back: {
      title: 'Dynamic Security for an Ever-Changing Digital Landscape',
      description:
        'We equip organizations with intelligent, adaptive security solutions designed to detect, mitigate, and respond to evolving cyber threats in real time. Our comprehensive frameworks integrate risk assessment, cloud security, and resilient architectures to safeguard sensitive data and critical assets across industries. By anticipating threats and continuously evolving defenses, we help businesses maintain robust protection in a complex security environment.',
    },
  },
  {
    title: 'Smart Manufacturing Solutions',
    icon: smartIcon,
    back: {
      title: 'AI-Driven Manufacturing for Precision and Performance',
      description:
        'We enable manufacturers to transform operations through intelligent automation and advanced AI technologies. From predictive analytics to real-time process optimization, we design smart manufacturing ecosystems that enhance uptime, minimize waste, and elevate workforce efficiency. Our solutions address complex challenges across production, quality management, and multi-site coordination empowering industrial leaders to compete with data-driven accuracy and agility.',
    },
  },
  {
    title: 'Innovating Education for Every Learner',
    icon: educationIcon,
    back: {
      title: 'Intelligent Learning for Personalized Growth',
      description:
        'We empower educators, learners, and institutions with AI-driven platforms that personalize and enhance the learning experience. From adaptive content delivery to intelligent tutoring systems, our solutions foster engagement, inclusivity, and measurable outcomes. By integrating data-driven insights, interactive technologies, and learner-centric design, we support a seamless educational transformation that benefits teachers, students, and parents alike.',
    },
  },
  {
    title: 'Logistics & Supply Chain Intelligence',
    icon: logisticsIcon,
    back: {
      title: 'Intelligent Solutions for Agile Supply Networks',
      description:
        'We empower logistics and e-commerce teams to optimize operations, forecast demand, and create transparent, technology-driven supply chains. Our scalable systems enhance efficiency, speed, and traceability supporting businesses across retail, transport, and distribution to reduce costs and improve delivery performance.',
    },
  },
  {
    title: 'DIGITAL TRANSFORMATION',
    icon: digitalIcon,
    inactive: true,
  },
];

const cardVariants = {
  front: {
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  back: {
    rotateY: 180,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const contentVariants = {
  front: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.4 }
  },
  back: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const backContentVariants = {
  front: {
    opacity: 0,
    transition: { duration: 0.2 }
  },
  back: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.4 }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function IndustryGrid() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const gridRef = useRef(null);

  useEffect(() => {
    let timeoutId = null;

    const handleResizeDebounced = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 1024);
      }, 100);
    };

    handleResizeDebounced();
    window.addEventListener('resize', handleResizeDebounced);
    return () => {
      window.removeEventListener('resize', handleResizeDebounced);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && flippedIndex !== null && gridRef.current && !gridRef.current.contains(event.target)) {
        setFlippedIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile, flippedIndex]);

  const handleCardClick = (index) => {
    if (isMobile || window.innerWidth < 1024) {
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  const handleConnectClick = () => {
    setFlippedIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate('/connect'), 300);
  };

  return (
    <div className="bg-white" ref={gridRef}>
      <div className="font-[Poppins] max-w-[1400px] mx-auto bg-white flex flex-col justify-between p-[10px] md:p-[0px] md:px-[60px] lg:px-[100px] py-10 md:py-[60px] relative h-auto md:h-[900px]">

        {/* Main grid container */}
        <div className="xl:left-[-15px] max-md:mt-[-40px] flex flex-col lg:grid lg:grid-cols-[minmax(300px,373px)_1fr_1fr] lg:grid-rows-2 gap-5 lg:gap-[14px] mb-10 lg:mb-[10px] relative lg:-left-[30px]">

          {/* Top-left block - hidden on mobile */}
          <div className="hidden mt-[10px] xl:grid grid-cols-[minmax(150px,181px)_minmax(150px,181px)] grid-rows-[132px_132px] gap-[16px] row-span-2">
            <div className="row-span-2 w-full h-[280px] rounded-[25px] bg-[#E1D4B1] opacity-20 flex items-center justify-center">
              <img src={innovateIcon} alt="Innovate" className="w-[90px] h-[90px]" />
            </div>
            <div className="w-full h-[132px] rounded-[25px] bg-[#E1D4B1] opacity-20 flex items-center justify-center font-semibold text-[20px] tracking-[8%] leading-[165%] uppercase text-[#121212] text-center">
              INNOVATE
            </div>
            <div className="w-full h-[132px] rounded-[25px] bg-[#E1D4B1] opacity-20 flex items-center justify-center font-semibold text-[20px] tracking-[8%] leading-[165%] uppercase text-[#121212] text-center">
              INTELLIGENT
            </div>
          </div>

          {/* Yellow Cards with Hover Flip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-x-[32px] sm:gap-y-[22px]  lg:ml-2 lg:mt-[-100px] xl:mt-0 xl:ml-[24px] w-full lg:col-span-2">
            {cards.slice(0, 4).map((card, idx) => (
              <motion.div
                key={idx}
                className={`relative w-full max-w-[373px] h-[250px] sm:w-full lg:w-[373px] lg:h-[300px] perspective-[1200px] cursor-pointer mx-auto ${idx === 0 ? "xl:ml-[0px]" :
                    idx === 1 ? "lg:ml-[120px] xl:ml-[10px]" :
                      idx === 2 ? "lg:ml-[0px] xl:-ml-[420px]" :
                        idx === 3 ? "lg:ml-[120px] xl:-ml-[410px]" : ""
                  }`}
                whileHover={!isMobile ? "hover" : undefined}
                variants={hoverVariants}
                onHoverStart={() => !isMobile && setHoveredIndex(idx)}
                onHoverEnd={() => !isMobile && setHoveredIndex(null)}
                onClick={() => handleCardClick(idx)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div
                  className="relative w-full h-full"
                  initial="front"
                  animate={
                    isMobile
                      ? (flippedIndex === idx ? "back" : "front")
                      : (hoveredIndex === idx ? "back" : "front")
                  }
                  variants={cardVariants}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front Face */}
                  <motion.div
                    className="card-front absolute w-full h-full rounded-[25px] md:rounded-[37px] bg-gradient-to-br from-[#D6BF7C] to-[#EDECE9] border border-[#EDECE9] flex flex-col justify-between p-[20px] md:p-[30px] box-border"
                    style={{
                      backfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d',
                      boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.25)',
                    }}
                    variants={contentVariants}
                  >
                    <motion.h3
                      className="text-[18px] md:text-[24px] lg:text-[28px] font-bold font-[Kollektif] mt-[30px] text-[#333] mb-4 max-w-[90%] pl-2 md:pl-5"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {card.title}
                    </motion.h3>
                    <motion.img
                      src={card.icon}
                      alt={card.title}
                      className="absolute bottom-4 sm:bottom-[16px] right-4 sm:right-[16px] w-14 h-14 sm:w-[70px] sm:h-[70px] opacity-25"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.25, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    />
                  </motion.div>

                  {/* Back Face */}
                  <motion.div
                    className="absolute w-full h-full rounded-[37px] bg-[#EDECE9] border border-[#ccc] p-3 sm:p-6 flex justify-center items-center shadow-md overflow-y-auto"
                    variants={backContentVariants}
                    style={{
                      backfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="flex flex-col justify-start items-start text-left w-full h-full">
                      <motion.h4
                        className="text-[12px] md:text-[14px] lg:text-[16px] font-[AvenirLTStd-heavy] text-[#121212] px-[5px] py-[5px] leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {card.back.title}
                      </motion.h4>
                      <motion.p
                        className="text-[12px] md:text-[11px] lg:text-[13px] font-thin font-[AvenirLTStd-light] text-[#121212] px-[5px] py-[5px] leading-[150%]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        {card.back.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Inactive Card - hidden on mobile */}
          <div className="hidden xl:flex flex-col items-center gap-[16px] absolute top-[330px] left-[calc(50%+100px)] xl:left-[830px]">
            <div className="w-[320px] xl:w-[373px] h-[171px] bg-[#E1D4B1] opacity-20 rounded-[25px] flex justify-center items-center">
              <img src={cards[4].icon} alt={cards[4].title} className="w-[90px] h-[90px] opacity-30" />
            </div>
            <div className="w-[320px] xl:w-[373px] h-[96px] bg-[#E1D4B1] opacity-20 rounded-[25px] flex justify-center items-center text-center font-[AvenirLTStd-heavy] text-[24px] tracking-[8%] leading-[165%] uppercase text-[#121212]">
              {cards[4].title}
            </div>
          </div>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col xl:flex-row justify-between items-center mt-8 gap-6 sm:gap-0 lg:mt-[-600px] ">
          <p className="font-[Kollektif] font-normal text-[18px] sm:text-[28px]  leading-[100%] text-black w-full text-center sm:text-center sm:w-[70%] lg:w-[893px] m-0">
            Let's Connect and Redefine What's Possible in Your Industry.
          </p>
          <button
            className="w-[183px] h-[50px] rounded-full px-6 py-3 max-xl:mt-[30px] max-xl:mb-[80px] xl:mr-[150px] text-[14px] font-medium cursor-pointer bg-gradient-to-br from-[#2a2a2a] to-[#242424] text-white shadow-inner relative overflow-hidden transition-transform duration-500 hover:scale-[1.04] hover:text-black before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[300%] before:h-[300%] before:bg-[radial-gradient(circle,#D6BF7C_0%)] before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:opacity-50 before:rounded-full before:transition-transform before:duration-500 hover:before:scale-100 hover:before:opacity-100"
            onClick={handleConnectClick}
          >
            <span className="relative z-10">Let's connect</span>
          </button>
        </div>

      </div>
    </div>
  );
}