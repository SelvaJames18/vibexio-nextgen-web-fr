import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Expand } from "../../../components/Expand.jsx";
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
            <h2 className="text-[36px] font-bold mb-[16px]">Recents</h2>

            <Link to="/wealthai" className="flex flex-row max-[1360px]:flex-col gap-6 relative">
              <div className="bg-[#121212] w-[500px] h-[258px] rounded-[25px] flex justify-center items-center relative max-[1360px]:w-full">
                <div className="absolute inset-0 bg-white rounded-full blur-[64px] opacity-20 z-0" />
                <img className="mt-[76px] w-[250px] relative z-10" src={image0} alt="" />
              </div>

              <div className="flex gap-4 mt-[90px] max-[1360px]:mt-6 items-start">
                <div className="w-[7px] h-[160px] bg-[#D6CFC4] rounded-full" />
                <div className="group transition-all duration-300 cursor-pointer">
                  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#969593] leading-[165%] tracking-tight text-left transition-colors duration-300 group-hover:text-[#5B7C99]">
                    The Evolving Future of<br />
                    Finance: A Case Study on the<br />
                    <span className="flex items-center gap-2">
                      Intelligence Revolution
                      <span className="hover:scale-125 transition-transform duration-300">
                        <Expand stroke="#5B7C99" />
                      </span>
                    </span>
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#6E6E6E] italic mt-2">
                    July 28, 2025
                  </p>
                </div>

              </div>
            </Link>
          </section>

          {/* Our Blogs */}
          <section>
            <h2 className="text-[36px] text-[#121212] font-bold mb-[16px]">Our Blogs</h2>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-[24px]">
              {/* Blog 1 */}
              <Link to="/thinkai" className="group block w-full lg:w-[200px]">
                <div className="flex flex-col gap-[12px] mb-[50px] cursor-pointer">
                  <div className="relative w-[200px] h-[176px] rounded-[16px] overflow-hidden flex items-center justify-center">
                    {/* Same BG as image0 */}
                    <div className="absolute inset-0 bg-white rounded-full blur-[64px] opacity-20 z-0" />
                    <div className="absolute inset-0 bg-black opacity-80 blur-[1px] z-0 transition-colors duration-300" />
                    <img
                      src={image1}
                      alt="Blog 1"
                      className="relative z-10 w-[125px] h-[183px] rotate-[-7.03deg] mt-[70px] group-hover:grayscale transition duration-300"
                    />
                  </div>

                  <div className="flex gap-[8px] items-start min-h-[64px]">
                    <div className="w-[2px] bg-[#C9C1B7] rounded-sm mt-[2px] self-stretch h-[75px]" />
                    <div className="text-[#969593] text-[16px] font-medium leading-[165%] group-hover:text-[#5B7C99] transition-colors duration-300 flex flex-wrap items-center gap-1">
                      <span>Why Every Business</span>
                      <span>Needs an AI Strategy</span>
                      <span>in 2025</span>
                      <span className="hover:scale-125 transition-transform duration-300">
                        <Expand stroke="#5B7C99" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Blog 2 */}
              <Link to="/learnai" className="group block">
                <div className="flex flex-col gap-[12px] mb-[50px] cursor-pointer">
                  <div className="relative w-[290px] h-[172px] rounded-[16px] overflow-hidden flex items-center justify-center">
                    {/* White glow bg like image0 */}
                    <div className="absolute inset-0 bg-white rounded-full blur-[64px] opacity-20 z-0" />
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black opacity-80 blur-[1px] z-0" />

                    <div className="relative z-10 w-[96px] h-[96px] rounded-[16px] flex items-center justify-center shadow-white/10">
                      <img src={image3} alt="Blog 2" className="w-[200px] h-[176px] object-contain" />
                    </div>
                  </div>


                  <div className="flex gap-[8px] items-start">
                    <div className="w-[2px] bg-[#C9C1B7] rounded-sm mt-[2px] self-stretch h-[75px]" />
                    <div className="text-[#969593] text-[16px] font-medium leading-[165%] max-w-[270px] transition-colors duration-300 group-hover:text-[#5B7C99]">
                      <p>
                        Re-Architecting the Learning Stack:
                        <br />
                        Strategic AI Integration in the Future
                      </p>
                      <div className="flex items-center gap-1">
                        <span>of EdTech</span>
                        <span className="hover:scale-125 transition-transform duration-300">
                          <Expand stroke="#5B7C99" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Blog 3 */}
              <Link to="/marketai" className="block group">
                <div className="flex flex-col gap-[12px] mb-[50px] cursor-pointer">
                  <div className="relative w-[290px] h-[172px] rounded-[16px] overflow-hidden flex items-center justify-center">
                    {/* White glow bg like image0 */}
                    <div className="absolute inset-0 bg-white rounded-full blur-[64px] opacity-20 z-0" />
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black opacity-80 blur-[1px] z-0" />

                    <div className="relative z-10 w-[200px] h-[176px] rounded-[16px] flex items-center justify-center shadow-white/10">
                      <img src={image2} alt="Blog 3" className="w-[300px] h-[276px] object-contain" />
                    </div>
                  </div>
                  <div className="flex gap-[8px] items-start">
                    <div className="w-[3px] bg-[#C9C1B7] rounded-sm mt-[2px] self-stretch h-[55px]" />
                    <div className="group text-[#969593] text-[16px] font-medium leading-[165%] max-w-[220px] transition-colors duration-300 group-hover:text-[#5B7C99]">
                      <span className="block">Marketing in the Age</span>
                      <span className="flex items-center gap-[6px]">
                        of Agentic AI
                        <span className="hover:scale-125 transition-transform duration-300">
                          <Expand stroke="#5B7C99" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Blog 4 */}
              <Link to="/healthai" className="block">
                <div className="flex flex-col gap-[12px] mb-[50px] cursor-pointer">
                  <div className="relative w-[290px] h-[172px] rounded-[16px] overflow-hidden flex items-center justify-center">
                    {/* White glow bg like image0 */}
                    <div className="absolute inset-0 bg-white rounded-full blur-[74px] opacity-20 z-0" />
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black opacity-70 blur-[1px] z-0" />

                    <div className="relative z-10 w-[200px] h-[176px] rounded-[16px] flex items-center justify-center shadow-white/10">
                      <img src={image4} alt="Blog 4" className="w-[300px] h-[276px] object-contain" />
                    </div>
                  </div>
                  <div className="flex gap-[8px] items-start">
                    <div className="w-[2px] bg-[#C9C1B7] rounded-sm mt-[2px] self-stretch h-[55px]" />
                    <div className="group transition-all duration-300 cursor-pointer">
                      <p className="text-[#969593] text-[16px] font-medium leading-[165%] max-w-[250px] transition-colors duration-300 group-hover:text-[#5B7C99]">
                        Rethinking Healthcare in the Age <br />
                        <span className="flex items-center gap-2">
                          Intelligence
                          <span className="hover:scale-125 transition-transform duration-300">
                            <Expand stroke="#5B7C99" />
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ListPage;