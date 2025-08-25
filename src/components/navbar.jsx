import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/vibexiologo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close menu when clicking outside nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Blur Background */}
      <div className="fixed top-0 left-0 w-full h-[60px] z-50 pointer-events-none">
        <div className="absolute inset-0 backdrop-blur-[15px] saturate-[160%] pointer-events-auto"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/0 mask-image-linear"></div>
      </div>

      {/* Navbar Container */}
      <div
        className={`
          fixed mt-[20px] left-1/2 -translate-x-1/2 z-[1000]
          w-[1250px] max-w-[90%] h-[64px] 
          bg-[#121212] rounded-full lg:rounded-[100px]
          shadow-[0_0_6px_rgba(255,255,255,0.25)]
          flex items-center justify-between px-[50px]
          md:top-[10px]
        `}
        ref={navRef}
      >
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick}>
          <img
            src={logo}
            alt="VibeXio.ai Logo"
            className="h-[26px] opacity-[0.83] ml-5 md:ml-0 cursor-pointer"
          />
        </Link>

        {/* Hamburger */}
        <div
          className="flex flex-col gap-[6px] cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          <div className="w-[24px] h-[2px] bg-white"></div>
          <div className="w-[24px] h-[2px] bg-white"></div>
          <div className="w-[24px] h-[2px] bg-white"></div>
        </div>

        {/* Nav Links */}
        <nav
          className={`
            ${menuOpen ? 'flex' : 'hidden'}
            flex-col absolute top-[64px] right-6 bg-[#121212] rounded-[12px]
            p-5 gap-[20px] shadow-[0_0_10px_rgba(255,255,255,0.15)] z-[1000]
            lg:flex lg:flex-row lg:static lg:bg-transparent lg:rounded-none lg:gap-[40px] xl:gap-[70px] max-xl:pl-[35px] lg:shadow-none
          `}
        >
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-[#A7A7A8] text-[20px] lg:text-[16px] xl:text-[20px] font-normal font-inter hover:text-white  whitespace-nowrap"
          >
            Overview
          </Link>
          <Link
            to="/capabilities"
            onClick={handleLinkClick}
            className="text-[#A7A7A8] text-[20px] lg:text-[16px] xl:text-[20px] font-normal font-inter hover:text-white  whitespace-nowrap"
          >
            Capabilities
          </Link>
          <Link
            to="/industry-focus"
            onClick={handleLinkClick}
            className="text-[#A7A7A8] text-[20px] lg:text-[16px] xl:text-[20px] font-normal font-inter hover:text-white  whitespace-nowrap"
          >
            Industry Focus
          </Link>
          <Link
            to="/case-study"
            onClick={handleLinkClick}
            className="text-[#A7A7A8] text-[20px] lg:text-[16px] xl:text-[20px] font-normal font-inter hover:text-white  whitespace-nowrap"
          >
            Case Study
          </Link>
          <Link
            to="/blogs"
            onClick={handleLinkClick}
            className="text-[#A7A7A8] text-[20px] lg:text-[16px] xl:text-[20px] font-normal font-inter hover:text-white  whitespace-nowrap"
          >
            Blogs
          </Link>
          <Link
            to="/connect"
            onClick={handleLinkClick}
            className="text-[#A7A7A8] text-[20px] lg:text-[16px] xl:text-[20px] font-normal font-inter hover:text-white  whitespace-nowrap"
          >
            Connect
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;