"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function ProFeatures() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3 lg:mb-4">
              PAID ADD-ONS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#023347] mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
              Enhance Your Inbox.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-12 lg:mb-16 items-stretch">
          {/* Feature 1: Linux Version */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow transform transition-smooth hover:scale-105 h-full flex flex-col">
            <div className="mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Linux Version
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3">
                $5/year
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto mb-5">
              Experience scomm.ai natively on your Linux distribution.
            </p>
            <button className="w-full px-4 py-2.5 font-medium rounded-lg transition-all duration-300 text-sm sm:text-base bg-[#2C8DA1] hover:bg-[#023347] text-white shadow-md hover:shadow-xl mt-auto transform hover:-translate-y-1 flex justify-center items-center gap-2 cursor-pointer">
              Purchase
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          </AnimateOnScroll>

          {/* Feature 2: Local-AI */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow transform transition-smooth hover:scale-105 h-full flex flex-col">
            <div className="mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Local-AI
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3">
                $5/year
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto mb-5">
              On-device AI processing for smart email categorization and drafting without sending data to the cloud.
            </p>
            <button className="w-full px-4 py-2.5 font-medium rounded-lg transition-all duration-300 text-sm sm:text-base bg-[#2C8DA1] hover:bg-[#023347] text-white shadow-md hover:shadow-xl mt-auto transform hover:-translate-y-1 flex justify-center items-center gap-2 cursor-pointer">
              Purchase
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          </AnimateOnScroll>

          {/* Feature 3: SComm Connect */}
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow transform transition-smooth hover:scale-105 h-full flex flex-col">
            <div className="mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                SComm Connect
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3">
                $5/year
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto mb-5">
              Securely connect and synchronize with your favorite external services and workflows (up to five devices per user).
            </p>
            <button className="w-full px-4 py-2.5 font-medium rounded-lg transition-all duration-300 text-sm sm:text-base bg-[#2C8DA1] hover:bg-[#023347] text-white shadow-md hover:shadow-xl mt-auto transform hover:-translate-y-1 flex justify-center items-center gap-2 cursor-pointer">
              Purchase
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          </AnimateOnScroll>

          {/* Feature 4: PGP Cryptography */}
          <AnimateOnScroll animation="fadeInUp" delay={400}>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow transform transition-smooth hover:scale-105 h-full flex flex-col">
            <div className="mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                PGP Cryptography
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3">
                $5/year
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto mb-5">
              Advanced encryption for your communications using industry-standard PGP.
            </p>
            <button className="w-full px-4 py-2 font-medium rounded-lg transition-all duration-300 text-sm bg-gray-100 hover:bg-[#2C8DA1] hover:text-white text-gray-900 mt-auto">
              Purchase Add-on
            </button>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

