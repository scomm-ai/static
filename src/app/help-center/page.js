import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Getting Started",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      articles: [
        "How to install scomm.ai",
        "Connecting your email account",
        "Setting up encryption",
        "First steps guide"
      ]
    },
    {
      title: "Account & Settings",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      articles: [
        "Managing your account",
        "Changing password",
        "Storage settings",
        "Notification preferences"
      ]
    },
    {
      title: "Security & Privacy",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      articles: [
        "Understanding encryption",
        "Backup and recovery",
        "Privacy settings",
        "Security best practices"
      ]
    },
    {
      title: "Troubleshooting",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      articles: [
        "Common issues and solutions",
        "Email sync problems",
        "Performance issues",
        "Contact support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-4 sm:pt-6">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#023347]/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-4 sm:mb-6 leading-tight">
                Help Center
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
                Find answers to common questions and learn how to get the most out of scomm.ai
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for help articles..."
                    className="w-full px-6 py-4 pl-12 text-sm sm:text-base text-gray-900 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C8DA1] focus:border-transparent"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#2C8DA1] transition-all duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4 sm:mb-6">
              Still need help?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you. Get in touch and we&apos;ll respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
                Contact Support
              </button>
              <Link href="/faqs" className="px-8 py-3.5 border-2 border-[#2C8DA1] text-[#2C8DA1] hover:bg-[#2C8DA1] hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base inline-block text-center">
                View FAQs
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

