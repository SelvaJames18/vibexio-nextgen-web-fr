import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Asset7 from "../assets/asset7.png";
import { Link } from 'react-router-dom';

const circleColors = [
  '#2D2D2D', '#2E2E2E', '#2F2F2F',
  '#303030', '#313233', '#323334',
  '#343435', '#262528', '#35342B'
];

const fadeVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenUp: { opacity: 0, y: 100 },
  hiddenDown: { opacity: 0, y: -100 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const transition = { duration: 1, ease: "easeOut" };

const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const rotationRef = useRef(0);
  const directionRef = useRef(1);
  const prevTimestampRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  const bgGraphicRef = useRef(null);

  const animate = (timestamp) => {
    if (!prevTimestampRef.current) prevTimestampRef.current = timestamp;
    const deltaTime = (timestamp - prevTimestampRef.current) / 1000;
    prevTimestampRef.current = timestamp;

    const speed = 10;
    rotationRef.current += directionRef.current * speed * deltaTime;
    rotationRef.current %= 360;

    if (bgGraphicRef.current) {
      bgGraphicRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
    }

    animationFrameIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, []);

  useEffect(() => {
    directionRef.current = isHovered ? -1 : 1;
  }, [isHovered]);

  const handleToggle = () => {
    if (isVisible) {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimatingOut(false);
      }, 600);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <>
      {isVisible && (
        <div className={`relative w-full min-h-screen max-w-[1920px] 
        mx-auto bg-[#121212] flex flex-col lg:flex-row justify-center
         items-center lg:justify-start lg:items-start xl:px-[11%] lg:px-[9%] px-[5%]
          lg:pt-[12%] overflow-hidden box-border ${isAnimatingOut ? 'pop-out' : ''}`}>

          {/* Text Content */}
          <div className="z-[2] font-[Kollektif sans serif] max-w-[800px] w-full px-4 sm:px-6 md:px-8 text-center sm:text-center md:text-center lg:text-left mb-10 lg:mb-0">
            <motion.h2
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeVariants}
              transition={transition}
              className="text-[clamp(26px,5vw,60px)] font-normal leading-[120%] sm:leading-[100%] tracking-[-0.5%] m-0 text-white"

            >
              Innovation Meets Simplicity

            </motion.h2>

            <motion.h1
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeVariants}
              transition={transition}
              className="text-[clamp(20px,3.5vw,48px)] font-normal text-[#afafaf] mt-4 mb-12 opacity-85 leading-[1.3]"
            >
              Built for you
            </motion.h1>

            <motion.div
              initial="hiddenUp"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeVariants}
              transition={transition}
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-center lg:justify-start"
            >
              <Link
                to="/connect"
                className="relative overflow-hidden bg-[#EDECE9] text-black shadow-[0_4px_12px_rgba(255,255,255,0.1)] w-[clamp(160px,18vw,200px)] h-[clamp(45px,5vw,50px)] flex items-center justify-center text-[clamp(14px,1.2vw,16px)] font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-[1.04] hover:text-white before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[300%] before:h-[300%] before:bg-[radial-gradient(circle,#5B7C99_0%)] before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:opacity-50 before:rounded-full before:transition-all before:duration-500 hover:before:scale-100 hover:before:opacity-100"
              >
                <span className="relative z-10">Connect with us</span>
              </Link>
              <Link
                to="/capabilities"
                className="relative overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#242424] text-white shadow-inner w-[clamp(160px,18vw,200px)] h-[clamp(45px,5vw,50px)] flex items-center justify-center text-[clamp(14px,1.2vw,16px)] font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-[1.04] hover:text-black before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[300%] before:h-[300%] before:bg-[radial-gradient(circle,#D6BF7C_0%)] before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:opacity-50 before:rounded-full before:transition-all before:duration-500 hover:before:scale-100 hover:before:opacity-100"
              >
                <span className="relative z-10">Capabilities</span>
              </Link>
            </motion.div>
          </div>


          {/* Circles */}
          <motion.div
            initial="hiddenUp"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={fadeVariants}
            transition={transition}
            className="hidden absolute bottom-[100px] left-[38%] translate-x-[-50%] sm:left-[11%] sm:justify-start 
            sm:translate-x-0 w-[clamp(100px,12vw,150px)] sm:grid sm:grid-cols-3 gap-1.5 rounded-[20px] xl:mb-[-20px]
             xl:ml-[30px]"
          >
            {circleColors.map((color, i) => (
              <div
                key={i}
                className="w-full aspect-square rounded-full animate-pulse"
                style={{ backgroundColor: color, animationDelay: `${i * 0.}s` }}
              ></div>
            ))}
          </motion.div>

          {/* Rotating Graphic */}

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0 }} // <-- Fix here
            className="absolute top-[20%] sm:top-[15%] left-[13%] sm:left-[60%] translate-x-[-50%] sm:translate-x-0 w-[clamp(300px,35vw,600px)] min-w-[260px] aspect-[501/530] pointer-events-auto xl:w-[400px] xl:top-[22%]"
          >
            <img
              src={Asset7}
              alt="Tech Circle Graphic"
              className="w-full h-full object-contain opacity-10"
            />
          </motion.div>

        </div>
      )}
    </>
  );
};

export default HomeScreen;