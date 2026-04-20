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
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-12 lg:mb-16 items-stretch">
          {/* Feature 1: Local AI */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow transform transition-smooth hover:scale-105 h-full flex flex-col">
            <div className="mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Local AI
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3">
                $5/year
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto">
              On-device AI processing for smart email categorization and drafting without sending data to the cloud.
            </p>
          </div>
          </AnimateOnScroll>

          {/* Feature 2: SComm Connect */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
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
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto">
              Securely connect and synchronize with your favorite external services and workflows.
            </p>
          </div>
          </AnimateOnScroll>

          {/* Feature 3: Local Spam Filter */}
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow transform transition-smooth hover:scale-105 h-full flex flex-col">
            <div className="mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Local Spam Filter
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3">
                $5/year
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto">
              Advanced on-device spam and phishing detection using targeted machine learning models.
            </p>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

