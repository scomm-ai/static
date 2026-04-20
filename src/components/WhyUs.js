"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function WhyUs() {
  return (
    <>
      {/* Why Users Prefer scomm.ai Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2A8E9C]/5 rounded-full blur-3xl -z-10"></div>
          
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-1.5 sm:mb-2">WHY US</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#023347] px-2">
                Why users prefer scomm.ai
              </h2>
            </div>
          </AnimateOnScroll>

          {/* Stats Card - Top Row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8 mb-6 sm:mb-7 lg:mb-8">
            {/* Stats Card */}
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm transform transition-smooth hover:scale-105 hover:shadow-md">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C8DA1] mb-1.5 sm:mb-2">50k+</div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Emails secured daily</p>
              </div>
            </AnimateOnScroll>

            {/* Visual Transfer Card */}
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm relative overflow-hidden transform transition-smooth hover:scale-105 hover:shadow-md">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Instant Encryption</h3>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2C8DA1]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 mx-2 sm:mx-4 flex items-center">
                  <div className="flex-1 h-0.5 bg-[#2C8DA1]/30"></div>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C8DA1] mx-1 sm:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="flex-1 h-0.5 bg-[#2C8DA1]/30"></div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2A8E9C]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2A8E9C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">End-to-end encryption in real-time</p>
              </div>
            </AnimateOnScroll>

            {/* Zero Data Risk Card */}
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm relative overflow-hidden transform transition-smooth hover:scale-105 hover:shadow-md">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Zero Data Risk</h3>
              
              {/* Visual Graphics */}
              <div className="relative mb-3 sm:mb-4">
                {/* Device Icon */}
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {/* Lock badge on device */}
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#2A8E9C] rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Data Flow Visualization */}
                <div className="space-y-1.5 sm:space-y-2">
                  {/* Email icons flowing to device */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-[#2C8DA1]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 h-0.5 bg-[#2C8DA1]/30"></div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#2C8DA1] flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-[10px] sm:text-xs font-medium text-[#2C8DA1]">Local</div>
                  </div>
                  
                  {/* Cloud crossed out */}
                  <div className="flex items-center gap-1.5 sm:gap-2 opacity-50">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gray-200 flex items-center justify-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-300"></div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 flex items-center justify-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="text-[10px] sm:text-xs font-medium text-gray-400">Cloud</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Your emails stay on your device. No cloud storage required unless you choose it.
              </p>
              </div>
            </AnimateOnScroll>

            {/* Growth Chart Card */}
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm transform transition-smooth hover:scale-105 hover:shadow-md">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Security Growth</h3>
                <select className="text-[10px] sm:text-xs text-gray-500 border border-gray-200 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                  <option>6 Months</option>
                </select>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C8DA1] mb-1.5 sm:mb-2">99.9%</div>
              <div className="h-16 sm:h-20 flex items-end gap-1.5 sm:gap-2">
                <div className="flex-1 bg-[#2C8DA1]/20 rounded-t" style={{ height: '40%' }}></div>
                <div className="flex-1 bg-[#2C8DA1]/30 rounded-t" style={{ height: '55%' }}></div>
                <div className="flex-1 bg-[#2C8DA1]/40 rounded-t" style={{ height: '65%' }}></div>
                <div className="flex-1 bg-[#2C8DA1]/50 rounded-t" style={{ height: '75%' }}></div>
                <div className="flex-1 bg-[#2C8DA1]/60 rounded-t" style={{ height: '85%' }}></div>
                <div className="flex-1 bg-[#2C8DA1] rounded-t" style={{ height: '100%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
            {/* Card 1: Offline Access */}
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-smooth transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Offline Access</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Compose & send emails offline. Drafts never leave your device until sent.
              </p>
              </div>
            </AnimateOnScroll>

            {/* Card 2: Advanced Security */}
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-smooth transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Advanced Security</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                AI-powered spam & phishing protection with local machine learning.
              </p>
              </div>
            </AnimateOnScroll>

            {/* Card 3: Peer-to-Peer Transfer */}
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-smooth transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Peer-to-Peer Transfer</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Encrypted file transfer using WebRTC. No data passes through our servers.
              </p>
              </div>
            </AnimateOnScroll>

            {/* Card 4: Customizable Themes */}
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-smooth transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Customizable Themes</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Switch between Gmail and Outlook themes in one click.
              </p>
              </div>
            </AnimateOnScroll>

            {/* Card 5: Cross-Platform */}
            <AnimateOnScroll animation="fadeInUp" delay={500}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-smooth transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Cross-Platform</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Works on Windows, macOS, Linux, Android, iOS, and web browsers.
              </p>
              </div>
            </AnimateOnScroll>

            {/* Card 6: History & Audit Trail */}
            <AnimateOnScroll animation="fadeInUp" delay={600}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-smooth transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">History & Audit Trail</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Complete log and audit trail for all email activities.
              </p>
              </div>
            </AnimateOnScroll>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

