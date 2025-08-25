import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../capabilities/animation.css'

import img1 from "../../../assets/capabilities-main/img-1.png";
import img2 from "../../../assets/capabilities-main/img-2.png";
import img3 from "../../../assets/capabilities-main/img-3.png";
import img4 from "../../../assets/capabilities-main/img-4.png";
import img5 from "../../../assets/capabilities-main/img-5.png";
import img6 from "../../../assets/capabilities-main/img-6.png";
import img7 from "../../../assets/capabilities-main/img-7.png";
import img8 from "../../../assets/capabilities-main/img-8.png";
import img9 from "../../../assets/capabilities-main/img-9.png";

import icon1 from "../../../assets/capabilities-main/code-1.png";
import icon2 from "../../../assets/capabilities-main/gear-1.png";
import icon3 from "../../../assets/capabilities-main/cart-2.png";
import icon4 from "../../../assets/capabilities-main/bars-2.png";
import icon5 from "../../../assets/capabilities-main/phone-3.png";
import icon6 from "../../../assets/capabilities-main/cloud.png";
import icon7 from "../../../assets/capabilities-main/exe-4.png";
import icon8 from "../../../assets/capabilities-main/fingerPrint.png";
import icon9 from "../../../assets/capabilities-main/docker.png";
import arrow1 from "../../../assets/capabilities-main/arrow-2.png"
import arrow2 from "../../../assets/capabilities-main/arrow-1.png"
import mobileScreen from "../../../assets/capabilities-main/mobile-screen.png"
import { bounceFromTop } from "../../varients";


const CapabilitiesContent = () => {
  const capabilitiesData = [
    {
      id: 1,
      title: "Intelligent Web Engineering",
      image: img1,
      intro:
        "Designing and deploying performance‑driven, scalable websites that align with your brand’s digital vision. Our web engineering solutions are rooted in responsive architecture.",
      bullets: [
        "AI‑powered speed, personalization, and precision",
        "Future‑ready, scalable tech architecture",
        "Unified experience across all platforms",
        "Modular, secure, innovation‑first systems",
      ],
    },
    {
      id: 2,
      title: "Cross‑Platform App Experiences",
      image: img2,
      intro:
        "Build once, deploy everywhere. We craft seamless mobile and desktop applications with native‑like performance and pixel‑perfect UI.",
      bullets: [
        "React Native, Flutter & PWA expertise",
        "Shared code‑base, native feel",
        "Optimized for App Store & Play Store",
        "Continuous delivery & OTA updates",
      ],
    },
    {
      id: 3,
      title: "Scalable E‑Commerce Architecture",
      image: img3,
      intro:
        "Modern storefronts that convert and scale. From headless commerce to micro‑services, we engineer platforms built for growth.",
      bullets: [
        "Composable commerce patterns",
        "Fast, secure, and SEO‑ready",
        "Multi‑currency & localized catalogues",
        "Built‑in analytics & recommendation",
      ],
    },
    {
      id: 4,
      title: "Data-Driven Intelligence & Insights",
      image: img4,
      intro:
        "Transforming raw data into strategic advantage through real-time dashboards, predictive models, and automated reporting systems.",
      bullets: [
        "Real-time data pipelines for instant access",
        "Predictive models revealing trends and outcomes",
        "Unified analytics for smarter decisions",
        "Scalable insights tailored for business growth",
      ],
    },
    {
      id: 5,
      title: "Experience-First Interface Design",
      image: img5,
      intro:
        "Our design thinking process results in intuitive, accessible, and brand-aligned digital experiences.",
      bullets: [
        "AI-powered behavior insights for adaptive UX",
        "Data-led UX to boost engagement",
        "Scalable design systems with smart workflows",
        "Inclusive, accessible design for all users",
      ],
    },
    {
      id: 6,
      title: "Infrastructure & Systems Orchestration",
      image: img6,
      intro:
        "Designing high-performance backends and resilient architectures to support data flow, scale, and security.",
      bullets: [
        "AI-first infrastructure planning for scalability",
        "Smart orchestration across hybrid environments",
        "Automated monitoring with predictive insights",
        "Secure pipelines for real-time AI ops",
      ],
    },
    {
      id: 7,
      title: "Purpose-Built Software Solutions",
      image: img7,
      intro:
        "Custom-built platforms designed around your workflows, processes, and growth goals.",
      bullets: [
        "AI-powered software tailored to business logic",
        "Scalable systems built for smart automation",
        "Agile development driven by user insights",
        "Seamless integration with third-party systems",
      ],
    },
    {
      id: 8,
      title: "Emerging Tech & Smart Systems",
      image: img8,
      intro:
        "We implement next-gen solutions that incorporate automation, intelligent prediction, and cognitive capabilities.",
      bullets: [
        "Cognitive automation with intelligent agent architectures",
        "Real-time, event-driven digital-physical integration",
        "Modular infrastructures for scalable tech evolution",
        "Predictive AI with edge and autonomous systems",
      ],
    },
    {
      id: 9,
      title: "Agile DevOps & Scalable Deployments",
      image: img9,
      intro:
        "Accelerate development velocity and reliability through modern DevOps practices.",
      bullets: [
        "AI-driven CI/CD with autonomous rollback orchestration",
        "Elastic deployments with self-healing container clusters",
        "Proactive monitoring via anomaly and telemetry AI",
        "IaC frameworks for scalable MLOps automation",
      ],
    },
  ];
  const [activeId, setActiveId] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handlePointerDown = (e) => {
      setIsTouchDevice(e.pointerType === "touch");
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-[#EDECE9]">
      <div className="hidden lg:block">
        {/* flex1 */}
        {/* img-1 */}
        <div className="w-full bg-[#EDECE9] pt-[108px] px-10 card-container pb-[200px] ">
          <div className="flex justify-start pl-[200px] relative group ">
            {/* Default visible section */}
            <div className="flex items-center gap-10 relative z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 group-hover:delay-200 max-[1338px]:flex-col">
              <img src={img1} alt="" />
              <p className="text-[20px] font-[Kollektif] font-normal leading-[100%] tracking-[0em] max-[1338px]:mt-6">Intelligent Web Engineering</p>
              <p className="absolute text-[96px] font-[AvenirLTStd-black] leading-[100%] tracking-[0em] left-[360px] text-[#5B7C99] opacity-[29%] top-[70px] max-[1338px]:left-[100px] max-[1338px]:top-[255px]">1</p>
            </div>

            {/* Hover content */}
            <div className="absolute left-0 top-0 w-full flex justify-start pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] ease-out z-20 [@media(max-width:1100px)]:justify-center">
              <div className="flex relative gap-[23px] pt-[30px]">
                <div className="absolute -top-[0px] left-[630px] font-kollektif font-normal text-[20px] leading-[100%] tracking-[0em] opacity-[58%]">Intelligent Web Engineering</div>

                <div className="w-[495px] h-[317px]  rounded-[32px] bg-[rgba(201,210,215,0.58)] pop-right">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[70px] pt-[74px] !opacity-100">
                    Designing and deploying performance-driven, scalable websites that align with your brand’s digital vision. Our web engineering solutions are rooted in responsive architecture, optimized front-end frameworks, and modular backends for enterprise resilience.
                  </p>
                </div>

                <div className="">
                  <img className="absolute w-[160px] h-[164px] -top-[60px] left-[438px] z-10" src={img1} />
                </div>

                <div className="w-[495px] h-[317px] opacity-100 rounded-[32px] bg-[#C9D2D7] pop-left">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[85px] pt-[95px] space-y-2 pop-right-text">
                    <li>AI-powered speed, personalization, and precision</li>
                    <li>Future-ready, scalable tech architecture</li>
                    <li>Unified experience across all platforms</li>
                    <li>Modular, secure, innovation-first systems</li>
                  </p>
                </div>
              </div>
            </div>
            <div className="transition-opacity duration-500 group-hover:opacity-0">
              <img className="pl-[250px] icon-1" src={icon1} alt="" />
            </div>
          </div>

          {/* img-2 */}
          <div className="flex justify-end pr-[200px] group relative mt-[120px]">
            {/* Default visible section */}
            <div className="transition-opacity duration-500 group-hover:opacity-0">
              <img className="pr-[250px] w-[450px] h-[200px] icon-2" src={icon2} alt="" />
            </div>
            <div className="flex items-center gap-10 relative z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 group-hover:delay-200 max-[1338px]:flex-col">
              <img src={img2} alt="" />
              <p className="text-[20px] font-[Kollektif] font-normal leading-[100%] tracking-[0em] max-[1338px]:mt-6">Cross-Platform App Experiences</p>
              <p className="absolute text-[96px] font-[AvenirLTStd-black] leading-[100%] tracking-[0em] right-[100px] text-[#5B7C99] opacity-[29%] top-[70px] max-[1338px]:left-[120px] max-[1338px]:top-[255px]">2</p>
            </div>

            {/* Hover content */}
            <div className="absolute right-0 top-[50px] w-full flex justify-end pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] ease-out z-20 [@media(max-width:1100px)]:justify-center">
              <div className="flex relative gap-[23px] pt-[30px]">
                <div className="absolute -top-[0px] left-[630px] font-kollektif font-normal text-[20px] leading-[100%] tracking-[0em] opacity-[58%]">Cross-Platform App Experiences</div>

                <div className="w-[495px] h-[317px] rounded-[32px] bg-[rgba(201,210,215,0.58)] pop-right">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[86px] pt-[85px] !opacity-100">
                    Building unified digital experiences across iOS, Android, and web from a single codebase. Our agile app development approach ensures native performance, intuitive UI, and accelerated go-to-market.
                  </p>
                </div>

                <div>
                  <img className="absolute w-[160px] h-[164px] -top-[60px] right-[438px] z-10" src={img2} />
                </div>

                <div className="w-[495px] h-[317px] opacity-100 rounded-[32px] bg-[#C9D2D7] pop-left" >
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[70px] pt-[105px] space-y-2">
                    <li>Real-time architecture with adaptive UX focus</li>
                    <li>Unified codebase for cross-device delivery</li>
                    <li>Scalable APIs and smart data integration</li>
                    <li>Predictive, personalized features via analytics</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* flex2 */}
        {/* img-3 */}
        <div className="w-full bg-[#EDECE9] pt-[108px] px-10 card-container pb-[200px]">
          <div className="flex justify-start pl-[200px] group relative">
            {/* Default visible section */}
            <div className="flex items-center gap-10 relative z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 group-hover:delay-200 max-[1338px]:flex-col">
              <img src={img3} alt="" />
              <p className="text-[20px] font-[Kollektif] font-normal leading-[100%] tracking-[0em] max-[1338px]:mt-6">Scalable E-Commerce Architecture</p>
              <p className="absolute text-[96px] font-[AvenirLTStd-black] leading-[100%] tracking-[0em] left-[360px] text-[#5B7C99] opacity-[29%] top-[670x] max-[1338px]:left-[130px] max-[1338px]:top-[255px]">3</p>
            </div>

            {/* Hover content */}
            <div className="absolute left-0 top-0 w-full flex justify-start pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] ease-out z-20 [@media(max-width:1100px)]:justify-center">
              <div className="flex relative gap-[23px] pt-[30px]">
                <div className="absolute -top-[0px] left-[630px] font-kollektif font-normal text-[20px] leading-[100%] tracking-[0em] opacity-[58%]">Scalable E-Commerce Architecture</div>

                <div className="w-[495px] h-[317px] rounded-[32px] bg-[rgba(201,210,215,0.58)] pop-right">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[76px] pt-[92px] !opacity-100">
                    We architect e-commerce platforms that drive conversions, boost user retention, and adapt to scale. Whether custom-built or platform-based, our solutions are fast, secure, and optimized for sales performance.
                  </p>
                </div>

                <div>
                  <img className="absolute w-[160px] h-[164px] -top-[60px] left-[438px] z-10" src={img3} />
                </div>

                <div className="w-[495px] h-[317px] opacity-100 rounded-[32px] bg-[#C9D2D7] pop-left" >
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[70px] pt-[95px] space-y-2">
                    <li>Adaptive commerce built for scale and speed</li>
                    <li>AI insights for engagement and retention</li>
                    <li>Unified backend for inventory and logistics</li>
                    <li>Real-time analytics for conversion growth</li>
                  </p>
                </div>
              </div>
            </div>
            <div className="transition-opacity duration-500 group-hover:opacity-0">
              <img className="pl-[250px] w-[425px] h-[185px] icon-3" src={icon3} alt="" />
            </div>
          </div>


          {/* img-4 */}
          <div className="flex justify-end pr-[200px] group relative mt-[120px]">
            {/* Default visible section */}
            <div className="flex flex-col transition-opacity duration-500 group-hover:opacity-0">
              <img className="w-[135px] h-[100px] arrow-1" src={arrow1} alt="" />
              <img className="pr-[250px] w-[425px] h-[165px] icon-4 -mt-12" src={icon4} alt="" />
            </div>
            <div className="flex items-center gap-10 relative z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 group-hover:delay-200 max-[1338px]:flex-col">
              <img src={img4} alt="" />
              <p className="text-[20px] font-[Kollektif] font-normal leading-[100%] tracking-[0em] max-[1338px]:mt-6">Data-Driven Intelligence & Insights</p>
              <p className="absolute text-[96px] font-[AvenirLTStd-black] leading-[100%] tracking-[0em] right-[100px] text-[#5B7C99] opacity-[29%] top-[70px] max-[1338px]:left-[120px] max-[1338px]:top-[255px]">4</p>
            </div>

            {/* Hover content */}
            <div className="absolute right-0 top-[50px] w-full flex justify-end pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] ease-out z-20 [@media(max-width:1100px)]:justify-center">
              <div className="flex relative gap-[23px] pt-[30px]">
                <div className="absolute -top-[0px] left-[630px] font-kollektif font-normal text-[20px] leading-[100%] tracking-[0em] opacity-[58%]">Data-Driven Intelligence & Insights</div>

                <div className="w-[495px] h-[317px] rounded-[32px] bg-[rgba(201,210,215,0.58)] pop-right">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[63px] pt-[96px] !opacity-100">
                    Transforming raw data into strategic advantage through real-time dashboards, predictive models, and automated reporting systems. Our data solutions integrate seamlessly with existing operations.
                  </p>
                </div>

                <div>
                  <img className="absolute w-[160px] h-[164px] -top-[60px] right-[438px] z-10" src={img4} />
                </div>

                <div className="w-[495px] h-[317px] opacity-100 rounded-[32px] bg-[#C9D2D7] pop-left" >
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[66px] pt-[90px] space-y-2">
                    <li>Real-time data pipelines for instant access</li>
                    <li>Predictive models revealing trends and outcomes</li>
                    <li>Unified analytics for smarter decisions</li>
                    <li>Scalable insights tailored for business growth</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* flex3 */}
        {/* img-5 */}
        <div className="w-full bg-[#EDECE9] pt-[108px] px-10 card-container pb-[200px]">
          <div className="flex justify-start pl-[200px] group relative">
            {/* Default visible section */}
            <div className="flex items-center gap-10 relative z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 group-hover:delay-200 max-[1338px]:flex-col">
              <img src={img5} alt="" />
              <p className="text-[20px] font-[Kollektif] font-normal leading-[100%] tracking-[0em] max-[1338px]:mt-6">Experience-First Interface Design</p>
              <p className="absolute text-[96px] font-[AvenirLTStd-black] leading-[100%] tracking-[0em] left-[360px] text-[#5B7C99] opacity-[29%] top-[670x] max-[1338px]:left-[110px] max-[1338px]:top-[255px]">5</p>
            </div>

            {/* Hover content */}
            <div className="absolute left-0 top-0 w-full flex justify-start pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] ease-out z-20 [@media(max-width:1100px)]:justify-center">
              <div className="flex relative gap-[23px] pt-[30px]">
                <div className="absolute -top-[0px] left-[630px] font-kollektif font-normal text-[20px] leading-[100%] tracking-[0em] opacity-[58%]">Experience-First Interface Design</div>

                <div className="w-[495px] h-[317px] rounded-[32px] bg-[rgba(201,210,215,0.58)] pop-right">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[106px] pt-[90px] !opacity-100">
                    Our design thinking process results in intuitive, accessible, and brand-aligned digital experiences. Every touchpoint is crafted for clarity, usability, and conversion.
                  </p>
                </div>

                <div>
                  <img className="absolute w-[160px] h-[164px] -top-[60px] left-[438px] z-10" src={img5} />
                </div>

                <div className="w-[495px] h-[317px] opacity-100 rounded-[32px] bg-[#C9D2D7] pop-left" >
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[69px] pt-[89px] space-y-2">
                    <li>AI-powered behavior insights for adaptive UX</li>
                    <li>Data-led UX to boost engagement</li>
                    <li>Scalable design systems with smart workflows</li>
                    <li>Inclusive, accessible design for all users</li>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-[150px] ml-[300px] transition-opacity duration-500 group-hover:opacity-0">
              <img className="opacity-[22%] icon-5 transition-opacity duration-500" src={icon5} alt="" />
              <img className="ml-[-138px] mt-[26px] max-[1338px]:mt-[46px] w-[130px] h-[220px] screen-1 transition-opacity duration-500" src={mobileScreen} alt="" />
            </div>
          </div>


          {/* img-6 */}
          <div className="flex justify-end pr-[200px] group relative mt-[120px]">
            {/* Default visible section */}
            <div className="flex flex-col transition-opacity duration-500 group-hover:opacity-0">
              <img className="pr-[250px] w-[465px] h-[155px] icon-6 transition-opacity duration-500" src={icon6} alt="" />
              <img className="w-[60px] h-[80px] ml-[76px] mt-[-60px] arrow-2 transition-opacity duration-500 max-[1074px]:ml-[64px]" src={arrow2} alt="" />
            </div>
            <div className="flex items-center gap-10 relative z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 group-hover:delay-200 max-[1338px]:flex-col">
              <img src={img6} alt="" />
              <p className="text-[20px] font-[Kollektif] font-normal leading-[100%] tracking-[0em] max-[1338px]:mt-6">Infrastructure & Systems Orchestration</p>
              <p className="absolute text-[96px] font-[AvenirLTStd-black] leading-[100%] tracking-[0em] right-[150px] text-[#5B7C99] opacity-[29%] top-[70px] max-[1338px]:left-[140px] max-[1338px]:top-[255px]">6</p>
            </div>
            {/* Hover content */}
            <div className="absolute right-0 top-[50px] w-full flex justify-end pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] ease-out z-20 [@media(max-width:1100px)]:justify-center">
              <div className="flex relative gap-[23px] pt-[30px]">
                <div className="absolute -top-[0px] left-[630px] font-kollektif font-normal text-[20px] leading-[100%] tracking-[0em] opacity-[58%]">Infrastructure & Systems Orchestration</div>

                <div className="w-[495px] h-[317px] rounded-[32px] bg-[rgba(201,210,215,0.58)] pop-right">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[64px] pt-[104px] !opacity-100">
                    Designing high-performance backends and resilient architectures to support data flow, scale, and security. We orchestrate infrastructure that adapts and grows with your business.
                  </p>
                </div>

                <div>
                  <img className="absolute w-[160px] h-[164px] -top-[60px] right-[438px] z-10" src={img6} />
                </div>

                <div className="w-[495px] h-[317px] opacity-100 rounded-[32px] bg-[#C9D2D7] pop-left" >
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[66px] pt-[80px] space-y-2">
                    <li>AI-first infrastructure planning for scalability</li>
                    <li>Smart orchestration across hybrid environments</li>
                    <li>Automated monitoring with predictive insights</li>
                    <li>Secure pipelines for real-time AI ops</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* flex4 */}
        {/* img-7 */}
        <div className="w-full bg-[#EDECE9] pt-[108px] px-10 card-container pb-[200px]">
          <div className="flex justify-start pl-[200px] group relative">
            {/* Default visible section */}
            <div className="flex items-center gap-10 relative z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 group-hover:delay-200 max-[1338px]:flex-col">
              <img src={img7} alt="" />
              <p className="text-[20px] font-[Kollektif] font-normal leading-[100%] tracking-[0em] max-[1338px]:mt-6">Purpose-Built Software Solutions</p>
              <p className="absolute text-[96px] font-[AvenirLTStd-black] leading-[100%] tracking-[0em] left-[360px] text-[#5B7C99] opacity-[29%] top-[670x] max-[1338px]:left-[120px] max-[1338px]:top-[255px]">7</p>
            </div>

            {/* Hover content */}
            <div className="absolute left-0 top-0 w-full flex justify-start pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] ease-out z-20 [@media(max-width:1100px)]:justify-center">
              <div className="flex relative gap-[23px] pt-[30px]">
                <div className="absolute -top-[0px] left-[630px] font-kollektif font-normal text-[20px] leading-[100%] tracking-[0em] opacity-[58%]">Purpose-Built Software Solutions</div>

                <div className="w-[495px] h-[317px] rounded-[32px] bg-[rgba(201,210,215,0.58)] pop-right">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[92px] pt-[99px] !opacity-100">
                    Custom-built platforms designed around your workflows, processes, and growth goals. From MVPs to enterprise-grade systems, we engineer with purpose and precision.
                  </p>
                </div>

                <div className="">
                  <img className="absolute w-[160px] h-[164px] -top-[60px] left-[438px] z-10" src={img7} />
                </div>

                <div className="w-[495px] h-[317px] opacity-100 rounded-[32px] bg-[#C9D2D7] pop-left" >
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[65px] pt-[111px] space-y-2">
                    <li>AI-powered software tailored to business logic</li>
                    <li>Scalable systems built for smart automation</li>
                    <li>Agile development driven by user insights</li>
                    <li>Seamless integration with third-party systems</li>
                  </p>
                </div>
              </div>
            </div >
            <div className="transition-opacity duration-500 group-hover:opacity-0">
              <img className="pl-[250px] w-[390px] h-[160px] icon-7 " src={icon7} alt="" />
            </div>
          </div>


          {/* img-8 */}
          <div className="flex justify-end pr-[200px] group relative mt-[120px]">
            {/* Default visible section */}
            <div className="transition-opacity duration-500 group-hover:opacity-0">
              <img className="pr-[240px] w-[405px] h-[165px] icon-7" src={icon8} alt="" />
            </div>
            <div className="flex items-center gap-10 relative z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 group-hover:delay-200 max-[1338px]:flex-col">
              <img src={img8} alt="" />
              <p className="text-[20px] font-[Kollektif] font-normal leading-[100%] tracking-[0em] max-[1338px]:mt-6">Emerging Tech & Smart Systems</p>
              <p className="absolute text-[96px] font-[AvenirLTStd] font-black leading-[100%] tracking-[0em] right-[100px] text-[#5B7C99] opacity-[29%] top-[65px] max-[1338px]:left-[110px] max-[1338px]:top-[255px]">8</p>
            </div>

            {/* Hover content */}
            <div className="absolute right-0 top-[50px] w-full flex justify-end pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] ease-out z-20 [@media(max-width:1100px)]:justify-center">
              <div className="flex relative gap-[23px] pt-[30px]">
                <div className="absolute -top-[0px] left-[630px] font-kollektif font-normal text-[20px] leading-[100%] tracking-[0em] opacity-[58%]">Emerging Tech & Smart Systems</div>

                <div className="w-[495px] h-[317px] rounded-[32px] bg-[rgba(201,210,215,0.58)] pop-right">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[60px] pt-[118px] !opacity-100">
                    We implement next-gen solutions that incorporate automation, intelligent prediction, and cognitive capabilities to future-proof your business.
                  </p>
                </div>

                <div>
                  <img className="absolute w-[160px] h-[164px] -top-[60px] right-[438px] z-10" src={img8} />
                </div>

                <div className="w-[495px] h-[317px] opacity-100 rounded-[32px] bg-[#C9D2D7] pop-left" >
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[46px] pt-[101px] space-y-2">
                    <li>Cognitive automation with intelligent agent architectures</li>
                    <li>Real-time, event-driven digital-physical integration</li>
                    <li>Modular infrastructures for scalable tech evolution</li>
                    <li>Predictive AI with edge and autonomous systems</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          -        </div>


        {/* flex5 */}
        {/* img-9 */}
        <div className="w-full bg-[#EDECE9] pt-[108px] px-10 card-container pb-[200px]">
          <div className="flex justify-start pl-[200px] group relative">
            {/* Default visible section */}
            <div className="flex items-center gap-10 relative z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 group-hover:delay-200 max-[1338px]:flex-col">
              <img src={img9} alt="" />
              <p className="text-[20px] font-[Kollektif] font-normal leading-[100%] tracking-[0em] max-[1338px]:mt-6">Agile DevOps & Scalable Deployments</p>
              <p className="absolute text-[96px] font-[AvenirLTStd-black] leading-[100%] tracking-[0em] left-[360px] text-[#5B7C99] opacity-[29%] top-[670x] max-[1338px]:left-[140px] max-[1338px]:top-[255px]">9</p>
            </div>

            {/* Hover content */}
            <div className="absolute left-0 top-0 w-full flex justify-start pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] ease-out z-20 [@media(max-width:1100px)]:justify-center">
              <div className="flex relative gap-[23px] pt-[30px]">
                <div className="absolute -top-[0px] left-[630px] font-kollektif font-normal text-[20px] leading-[100%] tracking-[0em] opacity-[58%]">Agile DevOps & Scalable Deployments</div>

                <div className="w-[495px] h-[317px] rounded-[32px] bg-[rgba(201,210,215,0.58)] pop-right">
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[76px] pt-[108px] !opacity-100">
                    Accelerate development velocity and reliability through modern DevOps practices. Our pipelines are automated, our environments are elastic, and our delivery is continuous.
                  </p>
                </div>

                <div>
                  <img className="absolute w-[160px] h-[164px] -top-[60px] left-[438px] z-10" src={img9} />
                </div>

                <div className="w-[495px] h-[317px] opacity-100 rounded-[32px] bg-[#C9D2D7] pop-left" >
                  <p className="font-normal text-[16px] leading-[160%] tracking-[0.01em] px-[53px] pt-[89px] space-y-2">
                    <li>AI-driven CI/CD with autonomous rollback orchestration</li>
                    <li>Elastic deployments with self-healing container clusters</li>
                    <li>Proactive monitoring via anomaly and telemetry AI</li>
                    <li>IaC frameworks for scalable MLOps automation</li>
                  </p>
                </div>
              </div>
            </div>
            <div className="transition-opacity duration-500 group-hover:opacity-0">
              <img className="pl-[250px] w-[470px] h-[180px] icon-8" src={icon9} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden space-y-10 px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {capabilitiesData.map(({ id, title, image, intro, bullets }) => (
          <div
            key={id}
            className="w-full max-w-[1280px] mx-auto"
          >
            <article className="bg-[#c9d2d7] rounded-xl p-4 sm:p-10 shadow-sm relative overflow-hidden">
              <div
                className={`flex items-center gap-4 md:gap-8 ${id % 2 !== 0 ? "flex-row-reverse" : "flex-row"
                  }`}
              >
                {/* Image */}
                <div className="w-24 h-24 md:w-40 md:h-40 bg-[#7a97ad] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>

                {/* Title + ID */}
                <div
                  className={`flex flex-col justify-center ${id % 2 !== 0 ? "items-end text-right" : "items-start text-left"
                    }`}
                >
                  <span className="relative -top-1 md:-top-2 text-3xl md:text-4xl font-bold text-[#5b7c99] opacity-20 leading-none">
                    {id.toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-black break-words">
                    {title}
                  </h3>
                </div>
              </div>

              {/* Intro + Bullet Points */}
              <div className="mt-4 md:mt-6 relative">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  {intro}
                </p>
                <ul className="list-disc pl-5 space-y-1 md:space-y-2">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="text-gray-700 text-sm md:text-base">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapabilitiesContent;