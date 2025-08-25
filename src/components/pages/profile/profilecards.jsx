import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../../../assets/clientsuccess/img1.png";
import img2 from "../../../assets/clientsuccess/img2.png";
import img3 from "../../../assets/clientsuccess/img3.png";
import img4 from "../../../assets/clientsuccess/img4.png";
import img5 from "../../../assets/clientsuccess/img5.png";
import buttonarrow from "../../../assets/clientsuccess/buttonarrow.png";


const caseStudies = [
    {
        title: "FinTech AI",
        client: "Acme Finance",
        description: "AI-powered fraud detection",
        image: img1,
    },
    {
        title: "Healthcare ERP",
        client: "HealthCorp",
        description: "Streamlined operations for a healthcare provider",
        image: img2,
    },
    {
        title: "E-Commerce Automation",
        client: "ShopEasy",
        description: "Automated inventory management",
        image: img3,
    },
    {
        title: "Manufacturing AI",
        client: "TechFab",
        description: "AI-driven quality control system",
        image: img4,
    },
    {
        title: "Retail Analytics",
        client: "MegaMart",
        description: "Customer insights and demand forecasting",
        image: img5,
    },
];


const ProfileCards = () => {
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        checkScroll();

        container.addEventListener("scroll", checkScroll);

        return () => {
            container.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <div className="bg-[#edece9] px-[120px] py-[60px] mt-[100px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">Case Studies</h1>
                <p className="text-center mt-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste doloremque!
                </p>
            </div>

          <div className="relative mt-6">
  {/* Left Arrow */}
  {showLeft && (
    <button
      onClick={() => scroll("left")}
      className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-30 bg-white shadow-md rounded-full p-2"
    >
      <FaChevronLeft />
    </button>
  )}

  {/* Scrollable Cards */}
  <div
    ref={scrollRef}
    className="flex overflow-x-auto scrollbar-hide scroll-smooth space-x-6 mx-[20px] px-20"
  >
    {caseStudies.map((study, index) => (
      <div
        key={index}
        className="group min-w-[280px] h-[400px] rounded-xl bg-[linear-gradient(180deg,_#c4c4c4_0px,_#fff_220px)] flex flex-col shadow-md hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Image */}
        <div className="h-1/2 w-full relative overflow-hidden rounded-t-xl">
          <img
            src={study.image}
            alt={study.title}
            className="h-full w-full object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between px-4 mt-4 h-1/2">
          <div>
            <h2 className="text-lg font-bold">{study.title}</h2>
            <p className="font-semibold">{study.client}</p>
            <p className="mt-2 text-gray-600 text-sm">{study.description}</p>
          </div>

          {/* Button */}
          <div className="flex justify-center mb-6">
            <button className="group relative font-avenir font-medium text-[13px] leading-[100%] text-softwhite bg-[#121212] px-[28px] py-[10px] rounded-full flex justify-center items-center gap-4 overflow-hidden">
              <span className="transition-transform duration-500 group-hover:-translate-x-2">
                Know More
              </span>
              <span className="absolute right-4 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out w-[15px] h-[15px] bg-white rounded-full flex items-center justify-center">
                <img
                  src={buttonarrow}
                  alt="arrow"
                  className="w-[10px] h-[10px] object-contain"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Left Fade Shadow */}
  {showLeft && (
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#edece9] to-transparent blur-xl z-20" />
  )}

  {/* Right Fade Shadow */}
  {showRight && (
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#edece9] to-transparent blur-xl z-20" />
  )}

  {/* Right Arrow */}
  {showRight && (
    <button
      onClick={() => scroll("right")}
      className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-30 bg-white shadow-md rounded-full p-2"
    >
      <FaChevronRight />
    </button>
  )}
</div>


        </div>
    );
};

export default ProfileCards;
