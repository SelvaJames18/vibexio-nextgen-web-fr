import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import searchImg from '../assets/search.png';
import financeImg from '../assets/finance.png';
import healthImg from '../assets/health.png';
import marketingImg from '../assets/marketing.png';
import toolsImg from '../assets/tools.png';

const cards = [
  {
    image: searchImg,
    mobileHidden: true
  },
  {
    title: 'Smarter Finance Starts Here',
    image: financeImg,
    backContent: {
      backTitle: 'Empowering Finance Through Intelligent Transformation',
      backParagraph:
        'We help financial organizations transform through intelligent systems, seamless digital integration, and strategic insight. Our adaptable, end-to-end solutions enhance compliance, efficiency, and long-term value enabling institutions to navigate change, scale confidently, and lead with clarity in an increasingly complex financial landscape',
    },
  },
  {
    title: 'Digital Intelligence for a Healthier Future',
    image: healthImg,
    backContent: {
      backTitle: 'Innovating Healthcare Through Intelligent Digital Solutions',
      backParagraph:
        'We enable healthcare providers and health tech companies to enhance patient care and operational efficiency through secure, data-driven systems. Our scalable, compliant solutions drive innovation across clinical and administrative processes, empowering organizations to deliver safer, faster, and higher-quality healthcare experiences.',
    },
  },
  {
    title: 'Marketing Reimagined for the Digital Era',
    image: marketingImg,
    backContent: {
      backTitle: 'Marketing Intelligence That Powers Connection & Growth',
      backParagraph:
        "In a fast-moving digital economy, we help businesses turn audience insight into measurable impact. Through intelligent automation, data-driven strategy, and adaptive digital systems, we enable brands to engage smarter, personalize at scale, and grow with precision. Our solutions are built to support any marketing model whether you're reaching consumers, businesses, or both delivering unified experiences that drive loyalty, performance, and competitive advantage.",
    },
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

export default function CardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tappedIndex, setTappedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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
      if (isMobile && tappedIndex !== null) {
        const cards = document.querySelectorAll('.flip-card');
        let isClickInside = false;

        cards.forEach(card => {
          if (card.contains(event.target)) {
            isClickInside = true;
          }
        });

        if (!isClickInside) {
          setTappedIndex(null);
        }
      }
    };

    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile, tappedIndex]);

  const handleCardTap = (index) => {
    if (isMobile || window.innerWidth < 1024) {
      if (tappedIndex === index) {
        setTappedIndex(null);
      } else {
        setTappedIndex(index);
      }
    }
  };

  return (
    <div className="bg-white w-full">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-[220px] p-[10px] md:p-[60px] lg:p-[80px] xl:p-[100px] w-full max-w-[1400px] mx-auto">
        {/* Main cards container */}
        <div className="flex flex-col items-center md:block w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[20px] w-full relative">
            {cards.map((card, idx) => {
              if (!card.title) {
                return (
                  <motion.div
                    key={idx}
                    className={`w-full max-md:hidden max-w-[373px] h-[250px] md:h-[300px] bg-[#E1D4B1] rounded-[25px] opacity-[0.18] flex justify-center items-center shadow-md p-[30px] select-none`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.18, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <img src={card.image} alt="search" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] object-contain opacity-80" />
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={idx}
                  className="flip-card w-full max-w-[373px] h-[250px] md:h-[300px] perspective-[1200px] cursor-pointer mx-auto md:mx-0"
                  whileHover={!isMobile ? "hover" : undefined}
                  variants={hoverVariants}
                  onHoverStart={() => !isMobile && setHoveredIndex(idx)}
                  onHoverEnd={() => !isMobile && setHoveredIndex(null)}
                  onClick={() => handleCardTap(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.div
                    className="card-inner relative w-full h-full"
                    initial="front"
                    animate={isMobile ? (tappedIndex === idx ? "back" : "front") : (hoveredIndex === idx ? "back" : "front")}
                    variants={cardVariants}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Front of Card */}
                      <motion.div
                        className="card-front absolute w-full h-full rounded-[25px] md:rounded-[37px] bg-gradient-to-br 
                        from-[#D6BF7C] to-[#EDECE9] border border-[#EDECE9] flex flex-col justify-between p-[20px] md:p-[30px] box-border"
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
                        src={card.image}
                        alt="card"
                        className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] object-contain opacity-20 absolute bottom-[15px] md:bottom-[20px] right-[15px] md:right-[20px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.2, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      />
                    </motion.div>

                    {/* Back of Card */}
                    <motion.div
                      className="card-back absolute w-full h-full rounded-[25px] md:rounded-[37px] bg-[#EDECE9] border border-[#EDECE9] shadow-md flex justify-center items-center p-[10px] md:p-[30px] box-border overflow-y-auto"
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
                          {card.backContent.backTitle}
                        </motion.h4>
                        <motion.p
                          className="text-[12px] md:text-[11px] lg:text-[13px] font-thin font-[AvenirLTStd-light] text-[#121212] px-[5px] py-[5px] leading-[150%]"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          {card.backContent.backParagraph}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right sidebar elements - shown on lg (1024px) and up */}
        <div className="hidden xl:flex items-center lg:relative lg:left-[20px] xl:left-[120px] lg:top-[40px] xl:top-[90px]">
          <div className="flex h-[500px] xl:h-[600px] gap-[15px] xl:gap-[20px] items-stretch relative">
            <motion.div
              className="w-[150px] xl:w-[187px] h-[500px] xl:h-[633px] absolute left-[-200px] xl:left-[-320px] top-[-60px] xl:top-[-100px] opacity-[0.18] rounded-[25px] bg-[#E1D4B1] flex items-center justify-center p-[15px] xl:p-[20px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.18, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-[20px] xl:text-[28px] font-medium text-[#121212] tracking-[0.6em] leading-[165%] transform -rotate-90 whitespace-nowrap">
                EXPLORE
              </div>
            </motion.div>
            <div className="flex flex-col">
              <motion.div
                className="w-[150px] xl:w-[187px] h-[240px] xl:h-[308px] relative left-[-80px] xl:left-[-110px] bottom-[60px] xl:bottom-[100px] opacity-[0.18] rounded-[25px] bg-[#E1D4B1] flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.18, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <img src={toolsImg} alt="tools" className="w-[40px] xl:w-[50px] h-[40px] xl:h-[50px] opacity-50" />
              </motion.div>
              <motion.div
                className="w-[150px] xl:w-[187px] h-[240px] xl:h-[308px] relative left-[-80px] xl:left-[-110px] xl:bottom-[70px] -mt-[16px] opacity-[0.18] rounded-[25px] bg-[#E1D4B1] flex justify-center items-center text-[#121212] font-semibold text-[16px] xl:text-[18px] text-center select-none"                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.18, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                CUSTOMIZE
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}