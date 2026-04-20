"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Features() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#023347]/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-0">
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3 uppercase tracking-wide">
                FEATURES
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-2 sm:mb-3 leading-tight">
                Everything You Need for a
                <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700">
                  Private, Encrypted Inbox
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Powerful features designed to give you complete control over your email privacy and security, 
                without compromising on functionality or ease of use.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Features Section */}
      <section id="features" className="relative pb-12 sm:pb-16 lg:pb-24 pt-0 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">

            {/* Feature 1: End-to-End Encryption */}
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">End-to-End Encryption</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Protect every message with strong E2EE — even when using Gmail, Outlook, or Hotmail. Your emails never touch our servers unencrypted.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Feature 2: Hybrid Storage Control */}
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Hybrid Storage Control</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                  Choose where your data lives:
                </p>
                <ul className="text-sm sm:text-base text-gray-600 space-y-2 mb-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Local device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Your cloud (S3, Google Cloud)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Both for redundancy</span>
                  </li>
                </ul>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                  You stay in control — your email provider or any mail server in between cannot read your emails.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Feature 3: On-Device AI Search */}
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">On-Device AI Search</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Search 50,000+ emails instantly with private AI indexing stored only on your device.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Feature 4: Peer-to-Peer File Transfer */}
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Peer-to-Peer File Transfer</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Send encrypted files directly between devices with no server routing.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Feature 5: Advanced Security Features */}
            <AnimateOnScroll animation="fadeInUp" delay={500}>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Advanced Security Features</h3>
                <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Local AI spam detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI-powered spam filtering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete audit trail logging</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Customizable Experience Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">Customizable Experience</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
                Switch between Gmail or Outlook visual themes. Works on Windows, Mac, Linux, Android, and iOS.
              </p>
            </div>
            {/* Theme Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/gmailtheme.png" alt="Gmail Theme" className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/outlooktheme.png" alt="Outlook Theme" className="w-full h-auto object-cover" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#023347]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-6">
              Ready to Experience Secure Email?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Download scomm.ai today and get all these powerful features. Start protecting your emails with end-to-end encryption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                Download scomm.ai
              </button>
              <button className="px-8 py-3.5 border-2 border-white text-white hover:bg-white hover:text-[#023347] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
