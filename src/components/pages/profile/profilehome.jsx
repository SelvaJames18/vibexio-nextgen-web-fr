import React from 'react'
import clientsucbgimg from "../../../assets/clientsuccess/clientsucbgimg.png";
import robotasset from "../../../assets/clientsuccess/robotasset.png";
import buttonarrow from "../../../assets/clientsuccess/buttonarrow.png";

const profilehome = () => {
    return (
        <div className="w-full px-0 lg:px-[40px] pt-0 md:pt-[110px]">
            <div
                className="w-full lg:rounded-[30px] bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${clientsucbgimg})` }}
            >
                {/* Flex container */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 gap-8 text-white">

                    {/* Left Content */}
                    <div className="flex-1 space-y-6">
                        <h1 className="font-kollektif font-bold text-[28px] lg:text-[32px] xl:text-[48px] leading-[1.2] text-slateblue mt-[100px] md:mt-0">
                            Accelerate Business Growth with Advanced AI & Digital Solutions (2025)
                        </h1>

                        <p className="font-avenir font-bold text-[14px] lg:text-[16px] leading-[1.6] text-darkblue max-w-[700px] text-slateblue">
                            Discover our 2025 innovation portfolio showcasing transformative and
                            next-generation success stories across industries.
                        </p>

                        <button className="group relative font-avenir font-semibold text-[15px] lg:text-[18px] leading-[100%] text-softwhite bg-[#24333f] px-[49px] py-[17px] rounded-full flex justify-center items-center overflow-hidden">
                            {/* Button text */}
                            <span className="transition-transform duration-500 group-hover:-translate-x-3">
                                Connect with Us
                            </span>

                            {/* Arrow icon in white circle - absolutely positioned */}
                            <span className="absolute right-6 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
                                <img src={buttonarrow} alt="arrow" className="w-[12px] h-[12px] object-contain" />
                            </span>
                        </button>

                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center items-center md:pt-10">
                        <img src={robotasset} alt="Robot" className="w-full  h-auto" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default profilehome
