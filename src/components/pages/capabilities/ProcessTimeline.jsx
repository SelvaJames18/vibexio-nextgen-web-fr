import React, { useRef, useEffect, useState } from 'react';
import '../capabilities/animation.css'
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import arrowImg from '../../../assets/arrow.png';
import indexFingerIcon from '../../../assets/icon-park_index-finger.png';

const steps = [
  'Understand & Align',
  'Strategize & Architect',
  'Prototype & Validate',
  'Build & Integrate',
  'Launch & Empower',
  'Evolve & Grow',
];

const tooltipMessages = [
  <>
    <p className="mb-2 font-semibold">
      We begin by listening—deeply.<br />
      <span className="font-normal">Your vision, challenges, and goals guide everything.</span>
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Business discovery workshops</li>
      <li>Stakeholder alignment sessions</li>
      <li>Technical and process deep-dive</li>
    </ul>
  </>,
  <>
    <p className="mb-2 font-semibold">
      We translate your goals into an intelligent, scalable blueprint.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Transformation roadmap tailored to your business</li>
      <li>Digital architecture planning</li>
      <li>AI-readiness & data infrastructure strategy</li>
    </ul>
  </>,
  <>
    <p className="mb-2 font-semibold">
      We move ideas into tangible models—fast.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Clickable UI/UX prototypes</li>
      <li>MVPs and PoCs for quick feedback</li>
      <li>Test and iterate before full-scale build</li>
    </ul>
  </>,
  <>
    <p className="mb-2 font-semibold">
      We engineer with precision—always in sync with you.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Agile sprints with real-time visibility</li>
      <li>Seamless backend integration</li>
      <li>Scalable cloud-native development</li>
    </ul>
  </>,
  <>
    <p className="mb-2 font-semibold">
      Your solution goes live—ready to create value from day one.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Enterprise-grade deployment</li>
      <li>Team onboarding & documentation</li>
      <li>Go-live support with zero disruption</li>
    </ul>
  </>,
  <>
    <p className="mb-2 font-semibold">
      Our partnership doesn't end at launch.<br />
      <span className="font-normal">We stay close—optimizing, updating, evolving.</span>
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>AI model retraining & performance insights</li>
      <li>Feature enhancements based on usage data</li>
      <li>Continuous support for long-term scale</li>
    </ul>
  </>,
];

const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  const [lineHeight, setLineHeight] = useState('668px');
  const [lineTop, setLineTop] = useState('450px');

  useEffect(() => {
    const updateLineDimensions = () => {
      const width = window.innerWidth;

      if (width < 321) {
        setLineHeight('330px');
        setLineTop('560px');
      } else if (width < 376) {
        setLineHeight('360px');
        setLineTop('390px');
      } else if (width < 426) {
        setLineHeight('360px');
        setLineTop('400px');
      } else if (width < 769) {
        setLineHeight('520px');
        setLineTop('460px');
      } else if (width < 1025) {
        setLineHeight('668px');
        setLineTop('450px');
      } else {
        setLineHeight('668px');
        setLineTop('450px');
      }
    };

    updateLineDimensions(); // Initial call
    window.addEventListener('resize', updateLineDimensions);
    return () => window.removeEventListener('resize', updateLineDimensions);
  }, []);


  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: lineHeight,
      top: lineTop,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const handleConnectClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate('/connect'), 300);
  };

  const toggleTooltip = (index) => {
    if (isMobile) {
      // For mobile, toggle the active tooltip
      setActiveTooltip(activeTooltip === index ? null : index);
    } else {
      // For desktop, keep the same behavior
      setActiveTooltip(index);
    }
  };


  return (
    <div className="relative w-full bg-[#f2f6fb] overflow-hidden">
      <div className="absolute left-[40px] max-sm:ml-[50px] xl:left-[408px] lg:left-[230px] md:left-[150px] w-full h-[1592px] bg-[#C9D2D7] opacity-54 z-0" />
      <div className="relative z-10">
        <div className="bg-[#5c7c96] text-white px-6 py-12 lg:px-10 lg:py-20 flex justify-center items-center w-full lg:max-w-[1059px] lg:h-[415px]">
          <div className="relative xl:left-[206px] lg:left-[106px] ">
            <motion.img
              src={arrowImg}
              alt="arrow"
              className="hidden lg:block w-[169.6px] h-[173.3px] absolute top-[180px]  xl:right-[496px] lg:right-[552px] min-[1025px]:right-[570px] opacity-66"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <div className="max-w-[600px]">
              <h2 className="text-2xl lg:text-[32px] font-bold leading-[1.4] text-[#EDECE9] mb-4 lg:mb-6">
                Collaborative. Transparent.<br />Tailored to You.
              </h2>
              <p className="text-base lg:text-[20px] font-light leading-[1.8] text-[#EDECE9]">
                Every engagement is more than a project,<br />
                it's a strategic partnership. Our proven process<br />
                ensures you're supported from ideation to<br />
                evolution, with solutions crafted for real-world<br />
                impact, not just implementation.
              </p>
            </div>
          </div>
        </div>

        <div className="pl-6 lg:pl-20 pb-[60px] lg:pb-[100px] mt-[60px] lg:mt-[100px]" ref={ref}>
          <span className="text-[rgba(91,124,153,0.64)] font-extrabold
                          text-[20px] ml-[80px] min-[640px]:ml-[70px] md:ml-[134px] lg:hidden font-[AvenirLTStd-black]">
            Click for more
          </span>
          <motion.div
            className="absolute flex items-center gap-2 z-50 px-3 py-2 rounded-lg
    top-[350px] left-[85px]

    max-[425px]:top-[350px] max-[425px]:left-[80px]
    max-[375px]:left-[80px] max-[375px]:top-[350px] max-[375px]:-translate-x-1/2

    max-[360px]:left-[40px] max-[360px]:top-[460px] max-[360px]:-translate-x-1/2 max-[360px]:flex-wrap max-[360px]:justify-center max-[360px]:max-w-[90%]

    max-[320px]:top-[500px] max-[320px]:left-[20px] max-[320px]:-translate-x-1/2
    max-[320px]:flex-wrap max-[320px]:justify-center max-[320px]:max-w-[90%]

    sm:left-0
    md:left-[140px] md:top-[350px]
    lg:left-[220px] lg:top-[430px]
    xl:left-[410px] xl:top-[450px]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
          </motion.div>
          <img
            src={indexFingerIcon}
            alt="Click icon"
            className=" absolute w-[50px] h-[50px] lg:hidden left-[90px] top-[380px] md:left-[144px]"
          />
          <motion.div
            className="bg-black absolute left-[72px] top-[620px] xsm:left-[72px] xsm:top-[460px] smm:left-[72px] smm:top-[460px] sm:left-[73px] sm:top-[400px] md:left-[110px] md:top-[430px] lg:left-[184px] lg:top-[460px] xl:left-[360px] xl:top-[480px] w-[0.4px]"
            initial={{ height: 0, opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
              height:
                hoveredStep !== null || activeTooltip !== null
                  ? "38%"                 // full height on hover
                  : "var(--line-height)",  // default scroll height
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          />

          {steps.map((step, index) => (
            <motion.div
              className="flex items-start top-[50px] my-5 lg:my-[64px] md:my-[40px] relative gap-4 lg:gap-[49px]"
              key={index}
              custom={index}
              variants={stepVariants}
              initial="hidden"
              animate={controls}
              onMouseEnter={() => !isMobile && setHoveredStep(index)}
              onMouseLeave={() => !isMobile && setHoveredStep(null)}
            >
              <div className="text-2xl lg:text-[40px] text-[#A5A5A5] font-bold w-[30px] relative left-0 xl:left-[220px] lg:left-[30px] md:left-[40px] font-[Kollektif]">
                {index + 1}
              </div>
              <div className="flex flex-col items-start relative left-0 xl:left-[180px] lg:left-[2px] gap-2 lg:gap-[30px] w-full">
                <div className="flex items-center gap-6 cursor-pointer" onClick={() => toggleTooltip(index)}>
                  <motion.div
                    className="w-3 h-3 md:w-4 md:h-4 lg:w-[20px] lg:h-[20px] bg-[#1a1a1a] rounded-full mr-2 lg:mr-[15px] z-[2] relative left-0 md:left-[35px] lg:left-[15px]"
                    animate={
                      hoveredStep === index || activeTooltip === index
                        ? { scale: 1.4, backgroundColor: '#5B7C99' }
                        : { scale: 1, backgroundColor: '#1a1a1a' }
                    }
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="text-lg lg:text-[24px] text-[#1a1a1a] relative left-0 lg:left-[40px] md:left-[60px] font-normal"
                    style={{ originX: 0 }}
                    animate={
                      hoveredStep === index || activeTooltip === index
                        ? { scale: [1, 1.25], color: '#1a1a1a', fontWeight: '500' }
                        : { scale: 1, color: '#1a1a1a' }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {step}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {(hoveredStep === index || activeTooltip === index) && (
                    <motion.div
                      className="w-full lg:w-[380px] bg-[#f5f4f2] md:w-[500px] rounded-[16px] text-[#1a1a1a] text-sm lg:text-[14px] leading-relaxed shadow-md px-4 py-3 lg:px-6 lg:py-5 z-10 mt-2 lg:mt-0 lg:absolute lg:top-[-15px] lg:left-[430px]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="hidden lg:block absolute left-[-12px] top-6 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[12px] border-t-transparent border-b-transparent border-r-[#f5f4f2]" />
                      {tooltipMessages[index]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#4b6b8f] text-white p-6 lg:p-[40px_32px] max-md:mb-[-5px] max-md:mr-[40px] max-md:w-[300px] max-[425px]:mr-[10px] rounded-[6px] w-full max-w-[360px] mx-auto lg:mx-0 xl:ml-[1008px] mb-10 lg:mb-[-20px] lg:ml-[550px] md:mr-[50px] md:mb-[-10px] mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[32px] font-semibold mb-4 lg:mb-6 leading-[1.4]">Built With You, For What's Next.</h3>
          <p className="text-sm lg:text-[16px] font-semibold leading-[1.8] mb-4 lg:mb-[30px] text-[#d9e2ea]">
            Every step is collaborative, every<br />
            deliverable future proof.<br />
            Let's transform your ideas into<br />
            intelligent outcome together.
          </p>
          <button
            onClick={handleConnectClick}
            className="relative overflow-hidden bg-[#8ba2b3] text-white py-2 px-4 lg:py-3 lg:px-6 text-base lg:text-[20px] border-none rounded-[30px] font-normal cursor-pointer transition-colors duration-300 hover:bg-[#EDECE9] hover:text-[#5B7C99]"
          >
            Let's connect
            <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_10%,transparent_60%)] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-400 opacity-0 hover:w-[200px] hover:h-[200px] hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
