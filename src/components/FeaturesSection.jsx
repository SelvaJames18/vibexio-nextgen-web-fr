import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom,
  slideInFromTopBG,
} from "./varients";

import GearIcon from "../assets/gear-icon.png";
import ChartIcon from "../assets/chart-icon.png";
import HandshakeIcon from "../assets/handshake-icon.png";
import BrainBG from "../assets/brain-bg.png";

const FeaturesSection = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative bg-[#edece9] max-lg:mt-[-200px] max-w-full overflow-hidden xl:px-[13%] lg:px-[9%] px-[5%] py-[150px] lg:py-[150px]">
      {isReady && (
        <motion.img
          src={BrainBG}
          alt="Background Brain"
          className="absolute top-0 right-[30px] lg:right-[100px] w-[300px] lg:w-[484.2px] lg:h-[502px] opacity-[6%] z-0 pointer-events-none"
          variants={slideInFromTopBG}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 1 }}
        />
      )}

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-[60px]">

        {/* Feature 1 */}
        {isReady && (
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:items-start text-center
             lg:text-left max-w-full lg:max-w-[500px] gap-5 lg:gap-5 mb-16 lg:mb-[100px]"
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="w-[80px] lg:w-[120px] h-[80px] lg:h-[120px] min-w-[80px] lg:min-w-[70px] rounded-full bg-[#d9d9d9] flex items-center justify-center mx-auto lg:mx-0"
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 2 }}
            >
              <motion.img
                src={GearIcon}
                alt="Gear Icon"
                className="w-[120px] lg:w-[136px] h-auto"
                variants={slideInFromLeft}
                initial="hidden"
                whileInView="show"
              />
            </motion.div>
            <div className="flex-1 mt-4 lg:mt-0">
              <h3 className="text-[16px] lg:text-[20px] font-semibold text-[#1c1c1c] mb-2 text-center lg:text-left">
                End-to-End Expertise
              </h3>
              <p className="text-[15px] lg:text-[18px] leading-[1.6] font-normal text-[#333] text-center lg:text-left">
                From ideation to deployment—and beyond—we offer full-spectrum support across AI development,
                automation, data strategy, and digital consulting.
              </p>
            </div>
          </motion.div>
        )}

        {/* Feature 2 & 3 */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10 gap-10 flex-wrap lg:flex-nowrap">
          {/* Feature 2 */}
          {isReady && (
            <motion.div
              className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left flex-1 min-w-[300px] gap-5 lg:gap-7"
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] min-w-[80px] rounded-full bg-[#e3c67d] flex items-center justify-center mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={ChartIcon}
                  alt="Chart Icon"
                  className="w-[120px] lg:w-[136px] h-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.66 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </motion.div>

              <div className="flex-1 mt-4 lg:mt-0">
                <h3 className="text-[20px] lg:text-[20px] font-semibold text-[#1c1c1c] mb-2 text-center lg:text-left">
                  Enterprise-Grade, Future-Ready
                </h3>
                <p className="text-[15px] lg:text-[18px] font-normal leading-[1.6] text-[#333] text-center lg:text-left">
                  Our solutions are scalable, secure, and designed for growth. Whether you're a startup scaling up or an enterprise modernizing legacy systems, we engineer systems that evolve with you.
                </p>
              </div>
            </motion.div>
          )}
          {/* Feature 3 */}
          {isReady && (
            <motion.div
              className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left flex-1 min-w-[300px] gap-5 lg:gap-7"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Background circle */}
              <motion.div
                className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] min-w-[80px] 
             rounded-full bg-[#799ab6]/70 flex items-center justify-center 
             mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={HandshakeIcon}
                  alt="Chart Icon"
                  className="w-[120px] lg:w-[136px] h-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.66 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </motion.div>

              {/* Text content */}
              <div className="flex-1 mt-4 lg:mt-0">
                <h3 className="text-[20px] lg:text-[20px] font-semibold text-[#1c1c1c] mb-2 text-center lg:text-left">
                  Partnership Mindset
                </h3>
                <p className="text-[15px] lg:text-[18px] font-normal leading-[1.6] text-[#333] text-center lg:text-left">
                  We don't just deliver projects—we build relationships. We operate as a true extension of your team,
                  with proactive communication, transparency, and long-term alignment at the core of everything we do.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;