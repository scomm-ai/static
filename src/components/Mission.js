"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Mission() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mission Header Section */}
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3 lg:mb-4">
              OUR MISSION
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#023347] mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
              We're redefining secure email for everyone
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Privacy should not require changing your email address or trusting someone else&apos;s servers.
              scomm.ai lets individuals and businesses keep using Gmail, Outlook, and Hotmail — while gaining full End-to-End Encryption, on-device AI search, and complete control over where data is stored.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Statistics/Features Section */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Feature 1: 100% Control */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="text-center transform transition-smooth hover:scale-105">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-1.5 sm:mb-2 lg:mb-3">
                100%
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Control
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed px-2">
                Your emails stay where you choose — locally, in your cloud, or both.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Feature 2: 50,000+ Emails Indexed */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div className="text-center transform transition-smooth hover:scale-105">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-1.5 sm:mb-2 lg:mb-3">
                50,000+
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Emails Indexed Instantly
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed px-2">
                Blazing-fast mailbox search powered by on-device AI.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Feature 3: Zero Migration */}
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div className="text-center transform transition-smooth hover:scale-105">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-1.5 sm:mb-2 lg:mb-3">
                Zero
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Migration Required
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed px-2">
                Use your existing email accounts. No server switch. No data upload.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

