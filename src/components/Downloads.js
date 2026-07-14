"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { FaLinux, FaApple, FaAndroid } from "react-icons/fa";

export default function Downloads() {
  const platforms = [
    { 
      name: "Windows", 
      version: "v2.1.0",
      size: "45 MB",
      price: "Free",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.35"/>
        </svg>
      ),
      description: "Windows 10/11 (64-bit)",
      requirements: "Windows 10 or later",
      downloadText: "Download for Windows",
      color: "bg-blue-500"
    },
    { 
      name: "macOS", 
      version: "v2.1.0",
      size: "52 MB",
      price: "Free",
      icon: (
        <FaApple className="w-full h-full" />
      ),
      description: "macOS 11.0 or later",
      requirements: "Intel or Apple Silicon",
      downloadText: "Download for Mac",
      color: "bg-gray-800"
    },
    { 
      name: "Linux", 
      version: "v2.1.0",
      size: "48 MB",
      price: "US$5/yr",
      icon: (
        <FaLinux className="w-full h-full" />
      ),
      description: "AppImage, DEB, RPM",
      requirements: "Ubuntu 20.04+, Fedora 34+",
      downloadText: "Purchase for Linux",
      color: "bg-yellow-500"
    },
    { 
      name: "Android", 
      version: "v2.1.0",
      size: "28 MB",
      price: "Free",
      icon: (
        <FaAndroid className="w-full h-full" />
      ),
      description: "Android 8.0 or later",
      requirements: "Google Play or APK",
      downloadText: "Get on Google Play",
      color: "bg-green-500"
    },
    { 
      name: "iOS", 
      version: "v2.1.0",
      size: "32 MB",
      price: "Free",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
      ),
      description: "iPhone & iPad",
      requirements: "iOS 14.0 or later",
      downloadText: "Download on App Store",
      color: "bg-gray-900"
    },

  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-0">
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3 uppercase tracking-wide">
                DOWNLOAD scomm.ai
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-2 sm:mb-3 leading-tight">
                Get scomm.ai on Your Device
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Download scomm.ai for Windows, Mac, Linux, Android, iOS, or use it directly in your browser. 
                All platforms support the same powerful encryption and privacy features.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="relative pt-4 sm:pt-6 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Temporary Notice Banner */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="mb-10 sm:mb-12 max-w-3xl mx-auto">
              <div className="bg-[#2C8DA1]/5 border border-[#2C8DA1]/20 rounded-2xl p-4 sm:p-6 flex items-start gap-4 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2C8DA1]/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-[#2C8DA1]/10 transition-colors duration-500"></div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center flex-shrink-0 text-[#2C8DA1]">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-[#023347] font-semibold text-base sm:text-lg mb-1 leading-tight">
                    Temporary Notice
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Download links will be made <span className="text-[#2C8DA1] font-semibold">live on our launch date:</span> Saturday 1st of August 2026.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {platforms.map((platform, index) => (
              <AnimateOnScroll key={index} animation="fadeInUp" delay={100 + (index * 100)}>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#2C8DA1] hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  {/* Platform Icon & Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${platform.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-8 h-8 sm:w-10 sm:h-10">
                        {platform.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                        {platform.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {platform.version} • {platform.size} • <span className={platform.price === "Free" ? "text-green-600 font-semibold" : "text-[#2C8DA1] font-semibold"}>{platform.price}</span>
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {platform.description}
                  </p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">System Requirements:</p>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium">{platform.requirements}</p>
                  </div>

                  {/* Download Button */}
                  <button className="w-full px-6 py-3 sm:py-3.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {platform.downloadText}
                  </button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4 sm:mb-6">
                Why Download scomm.ai?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-[#2C8DA1]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  End-to-End Encryption
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  All your emails are encrypted before they leave your device. Your privacy is protected across all platforms.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-[#2C8DA1]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Free &amp; Open Source
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  scomm.ai is free to download and use. No hidden fees, no subscriptions required for basic features.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-[#2C8DA1]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Sync Across Devices
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Access your encrypted emails from any device. Your data syncs securely across all your platforms.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-[#2C8DA1]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Fast Installation
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Get started in minutes. Download, install, and connect your email account — no technical knowledge required.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

