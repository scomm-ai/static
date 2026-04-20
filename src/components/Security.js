"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Security() {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All emails are encrypted with AES-256 encryption before leaving your device. Only you and your intended recipient can decrypt messages.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "bg-[#2C8DA1]"
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "We never see your encryption keys or unencrypted data. Your emails are encrypted on your device before transmission.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "bg-[#2C8DA1]"
    },
    {
      title: "On-Device Processing",
      description: "All encryption, decryption, and AI search happens locally on your device. Your data never leaves your control.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-[#2C8DA1]"
    },
    {
      title: "Hybrid Storage Control",
      description: "Choose where your encrypted data is stored: locally, in your cloud (S3, Google Cloud), or both for redundancy.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "bg-[#2C8DA1]"
    },
    {
      title: "Advanced Threat Protection",
      description: "AI-powered spam filtering, local machine learning models, and real-time threat detection keep your inbox safe.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: "bg-[#2C8DA1]"
    },
    {
      title: "Complete Audit Trails",
      description: "Detailed logging of all email activities for compliance and security monitoring. Access logs are encrypted and tamper-proof.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: "bg-[#2C8DA1]"
    }
  ];

  const securityStandards = [
    { name: "AES-256 Encryption", description: "Military-grade encryption standard" },
    { name: "RSA-4096 Keys", description: "Strong public-key cryptography" },
    { name: "Perfect Forward Secrecy", description: "New keys for each session" },
    { name: "Zero-Knowledge Proof", description: "We can't access your data" },
  ];

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
                SECURITY & PRIVACY
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-2 sm:mb-3 leading-tight">
                Enterprise-Grade Security
                <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700">
                  Built for Everyone
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your emails are protected with military-grade encryption. We use zero-knowledge architecture, 
                meaning we never see your data. You stay in complete control.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4">
                How We Protect You
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple layers of security ensure your emails remain private and secure
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {securityFeatures.map((feature, index) => (
              <AnimateOnScroll key={index} animation="fadeInUp" delay={100 + (index * 100)}>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Security Standards Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <AnimateOnScroll animation="fadeInLeft" delay={0}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-6">
                  Industry-Leading Security Standards
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                  scomm.ai uses the same encryption standards trusted by banks, governments, and security experts worldwide.
                </p>
                <div className="space-y-4">
                  {securityStandards.map((standard, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2C8DA1] flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                          {standard.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          {standard.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInRight" delay={200}>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-gray-200 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-[#2C8DA1]/10 flex items-center justify-center">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Your Privacy Guarantee
                  </h3>
                </div>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">We never see your encryption keys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">No data stored on our servers unencrypted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">Open source code for transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">Regular security audits and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">You control where your data is stored</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Encryption Flow Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4">
                How Encryption Works
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Your emails are encrypted before they leave your device, ensuring complete privacy
              </p>
            </div>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="bg-gradient-to-r from-[#F5F9FA] to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-gray-200">
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2C8DA1] text-white flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Email Composed on Your Device
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        You write your email using scomm.ai. The message stays on your device until you're ready to send.
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2C8DA1] text-white flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Automatic Encryption
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        scomm.ai automatically encrypts your email using AES-256 encryption before it leaves your device. 
                        Only the recipient can decrypt it.
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2C8DA1] text-white flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Secure Transmission
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        The encrypted email is sent through your existing email provider (Gmail, Outlook, etc.) 
                        but remains encrypted throughout the journey.
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2C8DA1] text-white flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Decryption on Recipient's Device
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        The recipient's scomm.ai app automatically decrypts the email on their device. 
                        If they don't use scomm.ai, they receive secure viewing instructions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#023347]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-6">
              Ready to Secure Your Emails?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust scomm.ai for their private communications. 
              Download now and start protecting your emails today.
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

