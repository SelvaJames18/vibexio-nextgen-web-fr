import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Expand } from "../../../components/Expand.jsx";
import { ArrowRight } from "lucide-react";
import image0 from "../../../assets/blog/aistonks.png";
import image1 from "../../../assets/blog/aibrain.png";
import image2 from "../../../assets/blog/brainset.png";
import image3 from "../../../assets/blog/chipbook.png";
import image4 from "../../../assets/blog/books.png";
export const categories = [
  { name: "All", path: "/blogs" },
  { name: "EdTech", path: "/learnai" },
  { name: "Engineering", },
  { name: "Marketing", path: "/marketai" },
  { name: "Design", },
  { name: "Finance", path: "/wealthai" },
  { name: "Cyber Security", },
  { name: "Healthcare", path: "/healthai" },
];

const ListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="font-sans min-h-screen bg-[#EDECE9] text-gray-800">
      {/* Header */}
      <div className="bg-[#121212] text-white rounded-b-[40px] px-6 md:px-6 lg:px-[80px] py-16 h-[420px]">
        <div className="flex flex-col items-center justify-center mt-[100px] text-center gap-4 lg:flex-row lg:items-center lg:justify-center lg:text-left lg:gap-6">
          <h1 className="text-[32px] md:text-[48px] lg:text-[96px] font-bold tracking-tight">
            BLOGS<span className="inline-block text-[#B0A48D]">.</span>
          </h1>
          <p className="text-[16px] md:text-[20px] lg:text-[32px] font-normal text-[#656564] lg:ml-6 leading-[1.6]">
            Decoding <span className="font-bold">Innovation</span>,<br />
            One <span className="font-bold">Blog</span> at a Time.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row px-[24px] md:px-[80px] py-[40px] gap-[40px]">
        {/* Category Dropdown (mobile) */}
        <div className="lg:hidden mb-6">
          <h2 className="text-[24px] font-semibold mb-[16px] text-gray-500">Category</h2>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center justify-between w-full px-4 py-3 text-[20px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm"
          >
            {selectedCategory}
            <svg
              className={`w-5 h-5 ml-2 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showDropdown && (
            <ul className="mt-2 space-y-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {categories.map((cat) => (
                <li key={cat.name} className="px-4 py-2 hover:bg-gray-100">
                  <Link
                    to={cat.path}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setShowDropdown(false);
                    }}
                    className={`block cursor-pointer ${selectedCategory === cat.name ? "font-semibold text-blue-700" : "text-gray-700"}`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block lg:w-[20%]">
          <h2 className="text-[24px] font-semibold mb-[16px] text-gray-500">Category</h2>
          <ul className="space-y-0 text-[20px] font-normal text-gray-700">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <li key={cat.name}>
                  <Link
                    to={cat.path}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`relative block px-[8px] py-[12px] transition-all duration-300 ease-in-out
          ${isSelected
                        ? "border-l-[4px] border-blue-500 font-bold text-black text-[24px]"
                        : "border-l-[4px] border-transparent text-gray-500 hover:text-black"
                      }`}
                  >
                    {cat.name}
                    <div className="absolute bottom-0 left-0 w-[162px] h-[1px] bg-gray-300" />
                  </Link>
                </li>
              );
            })}

          </ul>
        </aside>

        {/* Blog Content */}
        <main className="flex-1">
          {/* Recents */}
          <section className="mb-[48px]">
            <h2 className="text-[36px] font-bold mb-[16px] text-[rgba(18,18,18,0.83)]">Recents</h2>

           <Link
  to="/wealthai"
  className="flex flex-row max-[1360px]:flex-col gap-6 relative group w-full"
>
  {/* Left Image Section */}
  <div className="bg-[#121212] w-full max-w-[500px] h-[258px] rounded-[25px] flex justify-center items-center relative">
    <div className="absolute inset-0 bg-white rounded-full blur-[64px] opacity-20 z-0" />
    <img
      className="mt-[76px] w-[250px] max-w-full h-auto relative z-10"
      src={image0}
      alt=""
    />
  </div>

  {/* Right Text Section */}
  <div className="flex gap-[24px] mt-[90px] w-full max-[1360px]:mt-0 ">
    <div className="w-[5px] md:w-[7px] h-[120px] md:h-[160px] bg-[#D6CFC4] rounded-full shrink-0" />
    <div>
      <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[rgba(18,18,18,0.48)] leading-[165%] tracking-tight text-left transition-colors duration-300">
        The Evolving Future of <br />
        Finance: A Case Study on the <br />
        Intelligence Revolution
        <span className="text-[#5b7c99] duration-300 ease-in-out text-[16px] sm:text-[18px] inline-flex items-center ml-2">
          Read More
          <ArrowRight
            size={16}
            className="ml-0.5 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
          />
        </span>
      </h3>

      <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#6E6E6E] italic mt-2">
        July 28, 2025
      </p>
    </div>
  </div>
</Link>

          </section>

          {/* Our Blogs */}
          <h2 className="text-[28px] md:text-[36px] text-[rgba(18,18,18,0.83)] font-bold mb-[16px]">
            Our Blogs
          </h2>

          <Link to="/wealthai" className="flex flex-col relative w-full sm:w-fit group">
            <div className="bg-[#121212] w-full max-w-[187px] h-[176px] sm:w-[187px] rounded-[25px] flex justify-center items-center relative">
              <div className="absolute inset-0 bg-white rounded-full blur-[44px] opacity-20 z-0" />
              <img
                className="mt-[66px] max-w-[138px] w-full relative z-10 rotate-5"
                src={image1}
                alt=""
              />
            </div>

            <div className="flex gap-[16px] items-start mt-[24px]">
              <div className="w-[2px] h-[66px] bg-[#D6CFC4] rounded-full" />
              <div className="transition-all duration-300 cursor-pointer">
                <p className="font-[Avenir LT Std] font-semibold text-[14px] sm:text-[16px] leading-[165%] tracking-[0] text-[rgba(18,18,18,0.48)]">
                  Why Every Business <br />
                  Needs an AI Strategy <br />
                  in 2025
                  <span className="relative inline-flex ml-2 items-center text-[#5b7c99] group-hover:text-[#5b7c99] duration-300 ease-in-out">
                    Read More
                    <ArrowRight
                      size={16}
                      className="ml-0.5 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </span>
                </p>
              </div>
            </div>
          </Link>

          {/* Blog Grid */}
          <div className="mt-[44px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {/* Blog Card 1 */}
            <Link to="/learnai" className="flex flex-col relative w-full group">
              <div className="bg-[#121212] w-full h-[172px] rounded-[25px] flex justify-center items-center relative">
                <div className="absolute inset-0 bg-white rounded-full blur-[44px] opacity-20 z-0" />
                <img
                  className="mt-[30px] max-w-[108px] w-full relative z-10 rotate-5"
                  src={image3}
                  alt=""
                />
              </div>

              <div className="flex gap-[16px] items-start mt-[24px]">
                <div className="w-[2px] h-[66px] bg-[#D6CFC4] rounded-full" />
                <div className="transition-all duration-300 cursor-pointer">
                  <p className="font-[Avenir LT Std] font-semibold text-[14px] sm:text-[16px] leading-[165%] tracking-[0] text-[rgba(18,18,18,0.48)]">
                    Re-Architecting the Learning Stack: Strategic AI Integration in the Future of EdTech
                    <span className="relative inline-flex ml-2 items-center text-[#5b7c99] group-hover:text-[#5b7c99] duration-300 ease-in-out">
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-0.5 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </Link>

            {/* Blog Card 2 */}
            <Link to="/marketai" className="flex flex-col relative w-full group">
              <div className="bg-[#121212] w-full h-[172px] rounded-[25px] flex justify-center items-center relative">
                <div className="absolute inset-0 bg-white rounded-full blur-[44px] opacity-20 z-0" />
                <img
                  className="mt-[12px] max-w-[224px] w-full relative z-10 rotate-5"
                  src={image2}
                  alt=""
                />
              </div>

              <div className="flex gap-[16px] items-start mt-[24px]">
                <div className="w-[2px] h-[54px] bg-[#D6CFC4] rounded-full" />
                <div className="transition-all duration-300 cursor-pointer">
                  <p className="font-[Avenir LT Std] font-semibold text-[14px] sm:text-[16px] leading-[165%] tracking-[0] text-[rgba(18,18,18,0.48)]">
                    Marketing in the Age of Agentic AI
                    <span className="relative inline-flex ml-2 items-center text-[#5b7c99] group-hover:text-[#5b7c99] duration-300 ease-in-out">
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-0.5 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </Link>

            {/* Blog Card 3 */}
            <Link to="/healthai" className="flex flex-col relative w-full group">
              <div className="bg-[#121212] w-full h-[172px] rounded-[25px] flex justify-center items-center relative">
                <div className="absolute inset-0 bg-white rounded-full blur-[44px] opacity-20 z-0" />
                <img
                  className="p-[10px] max-w-[225px] w-full relative z-10 rotate-5 opacity-[83%]"
                  src={image4}
                  alt=""
                />
              </div>

              <div className="flex gap-[16px] items-start mt-[24px]">
                <div className="w-[2px] h-[54px] bg-[#D6CFC4] rounded-full" />
                <div className="transition-all duration-300 cursor-pointer">
                  <p className="font-[Avenir LT Std] font-semibold text-[14px] sm:text-[16px] leading-[165%] tracking-[0] text-[rgba(18,18,18,0.48)]">
                    Rethinking Healthcare in the Age of Intelligence
                    <span className="relative inline-flex ml-2 items-center text-[#5b7c99] group-hover:text-[#5b7c99] duration-300 ease-in-out">
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-0.5 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>

        </main>
      </div>
    </div>
  );
};

export default ListPage;