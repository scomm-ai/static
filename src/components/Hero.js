"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section className="relative min-h-screen sm:min-h-[90vh] md:min-h-fit max-h-screen flex items-start sm:items-center md:items-start px-4 sm:px-6 md:px-8 lg:px-8 overflow-hidden pt-16 max-[400px]:pt-16 sm:pt-16 md:pt-20 lg:pt-32 pb-12 sm:pb-16 md:pb-8 lg:pb-24 bg-[#F5F9FA]">
      {/* Hero Content - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center py-4 sm:py-6 md:pt-4 md:pb-0 lg:py-0">
        {/* Left Column - Text Content */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 text-center md:text-left lg:text-left">
          {/* Main Headline */}
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight px-2 md:px-0">
              <span className="block text-[#023347]">Secure. Private. Seamless.</span>
              <span className="block mt-1 sm:mt-2 md:mt-3 lg:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-800">
                The Next-Generation Encrypted Email Client.
              </span>
            </h1>
          </AnimateOnScroll>

          {/* Subheadline */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <p className="text-sm sm:text-base md:text-base lg:text-xl text-gray-600 leading-relaxed font-normal max-w-xl md:max-w-lg lg:max-w-xl mx-auto md:mx-0 lg:mx-0 px-2 md:px-0">
              Keep using your existing @gmail.com, @outlook.com, or @hotmail.com email with full end-to-end encryption, offline access, and AI-powered privacy tools.
              {/* <span className="block mt-2 sm:mt-3 md:mt-4 lg:mt-3 text-xs sm:text-sm md:text-base lg:text-base font-medium text-gray-700">
              With scomm.ai, your email provider or any mail server in between cannot read your emails.
              </span> */}
              {/*    Your emails stay on your device only — our servers are never involved. */}
            </p>
          </AnimateOnScroll>

          {/* CTA Section */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-4 pt-2 sm:pt-4 md:pt-6 lg:pt-2 max-w-md md:max-w-lg mx-auto md:mx-0 lg:mx-0 px-2 md:px-0">
              <div className="flex-1 w-full">
                <input
                  type="email"
                  placeholder="Your business email"
                  className="w-full px-4 sm:px-4 md:px-5 py-2.5 sm:py-2.5 md:py-3 lg:py-3 text-xs sm:text-sm md:text-base lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-smooth"
                />
              </div>
              <button className="px-4 sm:px-5 md:px-6 lg:px-6 py-2.5 sm:py-2.5 md:py-3 lg:py-3 text-xs sm:text-sm md:text-base lg:text-base bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold rounded-lg transition-smooth shadow-sm hover:shadow-md flex items-center justify-center gap-2 whitespace-nowrap transform hover:scale-105">
                Get Started
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right Column - Email Product Image */}
        <AnimateOnScroll animation="fadeInRight" delay={300}>
          <div className="relative flex items-center justify-center md:justify-end lg:justify-end mt-6 sm:mt-8 md:mt-0 lg:mt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[400px] lg:max-w-lg xl:max-w-xl mx-auto md:mx-0 lg:mx-0">
              {/* Main Image Container */}
              <div className="relative w-full transform transition-smooth hover:scale-105">
                <img 
                  src="/scommio.png" 
                  alt="Email Client Interface" 
                  className="relative w-full h-auto max-w-full object-contain drop-shadow-2xl"
                  style={{ maxHeight: '70vh' }}
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
