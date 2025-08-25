import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/vibexiologo.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const slideUpContainer = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const SOCIAL_LINKS = [
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/vibexio/', label: 'LinkedIn' },
  { icon: 'fab fa-instagram', href: 'https://instagram.com/vibexio_ai/', label: 'Instagram' },
  { icon: 'fab fa-whatsapp', href: 'https://wa.me/916374404451', label: 'WhatsApp' },
  { icon: 'fab fa-youtube', href: 'https://youtube.com/@vibe-xio?si=8xeffDfqElLR2fQN', label: 'YouTube' },
  { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=61574111908388', label: 'Facebook' },
  { icon: 'fab fa-x', href: 'https://x.com/VibeXio_ai?s=08', label: 'Twitter/X' },
  { icon: 'fas fa-envelope', href: 'mailto:info@vibexio.ai', label: 'Email' },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full mx-auto lg:mt-[40px] lg:px-[40px]">
      <motion.footer
        className="bg-[#1a1a1a] text-white py-[60px] pb-[30px] font-sans
         rounded-md  mx-auto shadow-[0_4px_4px_rgba(255,255,255,0.1)] backdrop-blur-sm overflow-hidden h-auto"
        style={{ willChange: 'transform' }}
        variants={slideUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-start md:pb-[40px] gap-10">
          {/* Left Section - Centered on mobile/tablet */}
          <motion.div
            className="w-full lg:flex-1 min-w-[280px] flex flex-col gap-8 items-center md:items-center lg:items-start md:ml-0 lg:ml-[100px] relative"
            variants={fadeInUp}
          >
            <Link
              to="/"
              onClick={scrollToTop}
              aria-label="Vibexio Home"
              className="block"
            >
              <motion.img
                src={Logo}
                alt="Vibexio Logo"
                className="w-40 mb-2 ml-[-12px] mt-[-25px] cursor-pointer max-[1023px]:mx-auto"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            <div className="flex flex-col gap-[50px] text-[#A7A7A8] text-center md:text-center lg:text-left">
              {/* Location Section */}
              <div className="flex flex-col gap-8 mt-[30px]">
                <a className='text-[#A7A7A8] flex gap-6' href="https://www.google.com/maps/place/VibeXio.ai/@12.5757285,77.8350705,18.04z/data=!4m6!3m5!1s0x3bae71d9fc618235:0x44534610b8a33226!8m2!3d12.5766692!4d77.8380607!16s%2Fg%2F11mcbysh7z?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Our location on Google Maps">
                  <i className="fas fa-map-marker-alt text-3xl"></i>
                  <div className="flex flex-col items-start mt-[-12px]">
                    <p className='text-base font-bold leading-[165%] hover:text-white transition-colors'>Hosur</p>
                    <p className="text-base font-bold leading-[165%] hover:text-white transition-colors">Coimbatore</p>
                  </div>
                </a>

                {/* Email Section */}
                <a className='text-[#A7A7A8] flex gap-6' href="mailto:info@vibexio.ai"
                  aria-label="Email us">
                  <i className="fas fa-envelope text-2xl"></i>
                  <p className='text-base font-bold leading-[165%] hover:text-white transition-colors'>info@vibexio.ai</p>
                </a>

                {/* Phone Section */}
                <div className='text-[#A7A7A8] flex gap-6' href="">
                  <i className="fas fa-phone text-2xl"></i>
                  <p className='text-base font-bold leading-[165%] hover:text-white transition-colors'>+91 63744 04451</p>
                </div>
              </div>

            </div>

            <div className="hidden lg:block absolute top-[80px] bottom-[97px] h-[132px] lg:left-[270px] xl:left-[370px] border-l border-white border-opacity-70"></div>

          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:flex-[2] text-center flex flex-col gap-8 items-center 
            justify-center relative mt-0 md:mt-10 lg:mt-[100px]"
            variants={fadeInUp}
            custom={2}
          >
            <ul className="flex flex-col md:flex-row justify-center flex-wrap gap-4 lg:gap-5 xl:gap-8 list-none p-0 m-0">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="font-semibold text-base text-[#9c9c9c] hover:text-white transition-colors duration-300"
                >
                  OVERVIEW
                </Link>
              </li>
              <li>
                <Link
                  to="/industry-focus"
                  className="font-semibold text-base text-[#9c9c9c] hover:text-white transition-colors duration-300"
                >
                  INDUSTRY FOCUS
                </Link>
              </li>
              <li>
                <Link
                  to="/capabilities"
                  className="font-semibold text-base text-[#9c9c9c] hover:text-white transition-colors duration-300"
                >
                  CAPABILITIES
                </Link>
              </li>
              <li>
                <Link
                  to="/case-study"
                  className="font-semibold text-base text-[#9c9c9c] hover:text-white transition-colors duration-300"
                >
                  CASE STUDY
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="font-semibold text-base text-[#9c9c9c] hover:text-white transition-colors duration-300"
                >
                  BLOGS
                </Link>
              </li>
              <li>
                <Link
                  to="/connect"
                  className="font-semibold text-base text-[#9c9c9c] hover:text-white transition-colors duration-300"
                >
                  CONNECT
                </Link>
              </li>
            </ul>
            <motion.div
              className="flex justify-center gap-4 xl:gap-6 flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {SOCIAL_LINKS.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.label}
                  className="no-underline outline-none hover:no-underline focus:no-underline active:no-underline"
                >
                  <i className={`${item.icon} bg-[#333] rounded-full pt-[18px] text-lg text-[#EDECE9] w-12 h-12 md:w-14 md:h-14 max-[767px]:pt-4 flex justify-center items-center shadow-[1px_2px_6.8px_0px_rgba(0,0,0,0.25)_inset] backdrop-blur-sm hover:bg-[#555] hover:-translate-y-1 transition-all duration-300`} aria-hidden="true"></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-between mt-8 text-xs text-[#888] gap-5 text-center px-5"
          variants={fadeInUp}
          custom={3}
        >
          <Link to="/privacypolicy" className="w-full md:flex-1 hover:text-white duration-200 ease-in-out">Terms and Conditions</Link>
          <Link to="/privacypolicy" className="w-full md:flex-1 hover:text-white duration-200 ease-in-out">Privacy Policy and Data Collection</Link>
          <p className="w-full md:flex-1">Copyright © 2025 VibeXio.ai | All Rights Reserved</p>
        </motion.div>
      </motion.footer>
    </div>
  );
}

export default Footer;