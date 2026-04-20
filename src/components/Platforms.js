"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { FaLinux, FaApple, FaAndroid } from "react-icons/fa";

export default function Platforms() {
  const platforms = [
    { 
      name: "Windows", 
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.35"/>
        </svg>
      ), 
      description: "Full desktop experience" 
    },
    { 
      name: "MacOS", 
      icon: (
        <FaApple className="w-full h-full" />
      ), 
      description: "Native Mac application" 
    },
    { 
      name: "Linux", 
      icon: (
        <FaLinux className="w-full h-full" />
      ), 
      description: "Open source support" 
    },
    { 
      name: "Android", 
      icon: (
        <FaAndroid className="w-full h-full" />
      ), 
      description: "Mobile app available" 
    },
    { 
      name: "iOS", 
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
      ), 
      description: "iPhone & iPad ready" 
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#023249] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2A8E9C]/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3 uppercase tracking-wide">
              WORKS EVERYWHERE YOU WORK
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight px-2">
              One Experience, All Platforms.
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Whether you're on a laptop, desktop, or mobile, scomm.ai is built to keep your privacy intact across devices.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Platforms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
          {platforms.map((platform, index) => (
            <AnimateOnScroll key={index} animation="fadeInUp" delay={100 + (index * 100)}>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-[#2C8DA1]/50 group transform transition-smooth hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                      {platform.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-white mb-1.5 sm:mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                    {platform.description}
                  </p>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

