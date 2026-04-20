"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "Forever",
      description: "Everything you need for private, secure communication",
      features: [
        "End-to-end encryption",
        "On-device AI search",
        "Peer-to-peer file transfer",
        "Basic spam filtering",
        "Local storage control",
        "Offline search mode"
      ],
      buttonText: "Get Started Free",
      popular: true
    }
  ];

  const addOns = [
    {
      name: "Local AI",
      price: "$5/year",
      description: "On-device AI processing for smart email categorization and drafting without sending data to the cloud.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "SComm Connect",
      price: "$5/year",
      description: "Securely connect and synchronize with your favorite external services and workflows.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      name: "Local Spam Filter",
      price: "$5/year",
      description: "Advanced on-device spam and phishing detection using targeted machine learning models.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
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
                ADD-ONS
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-2 sm:mb-3 leading-tight">
                Enhance your experience with add-ons.
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Enhance your scomm.ai experience with optional premium add-ons to take control of your workflows.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-stretch">
            {plans.map((plan, index) => (
              <AnimateOnScroll key={index} animation="fadeInUp" delay={100 + (index * 100)}>
                <div className={`bg-gradient-to-br from-white to-[#F5F9FA] border-2 rounded-2xl p-5 sm:p-8 lg:p-10 h-full flex flex-col max-w-lg mx-auto ${
                  plan.popular 
                    ? 'border-[#2C8DA1] shadow-xl relative' 
                    : 'border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-max">
                      <span className="bg-[#023347] text-[10px] xs:text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg whitespace-nowrap">
                        Standard Core Features
                      </span>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2 text-center sm:text-left">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-base text-gray-600 mb-4 sm:mb-6 text-center sm:text-left leading-relaxed">
                      {plan.description}
                    </p>
                    
                    <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                      <div className="flex items-baseline gap-1 sm:gap-2">
                        <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#023347]">
                          {plan.price}
                        </span>
                        {plan.price !== "Custom" && (
                          <span className="text-xs sm:text-base text-gray-600">
                            /{plan.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full px-6 py-3 sm:py-3.5 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-[#2C8DA1] hover:bg-[#257a8d] text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-2 border-gray-200'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4">
                Premium Add-ons
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Enhance your scomm.ai experience with these optional add-ons
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {addOns.map((addOn, index) => (
              <AnimateOnScroll key={index} animation="fadeInUp" delay={100 + (index * 100)}>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-6">
                    {addOn.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    {addOn.name}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#2C8DA1] mb-4">
                    {addOn.price}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                    {addOn.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6 sm:space-y-8">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  Can I switch plans later?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  Is there a free trial?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  The Free plan is available forever with no trial period needed.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We accept all major credit cards and PayPal for add-on purchases.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

