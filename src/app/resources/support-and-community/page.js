import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SupportAndCommunityPage() {
  const supportOptions = [
    {
      title: "Help Center",
      description: "Search our knowledge base for answers to common questions and how-to articles.",
      href: "/help-center",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "FAQs",
      description: "Quick answers to the most frequently asked questions about scomm.ai.",
      href: "/faqs",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Contact Support",
      description: "Reach our support team for personalized help. We typically respond within 24 hours.",
      href: "/help-center",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Community",
      description: "Connect with other scomm.ai users, share tips, and get advice from the community.",
      href: "#",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-4 sm:pt-6">
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#023347]/5 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <nav className="text-sm text-gray-600 mb-6">
              <Link href="/resources" className="hover:text-[#2C8DA1] transition-colors">Resources</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Support & Community</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-4 sm:mb-6 leading-tight">
              Support & Community
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Get help when you need it. Browse our Help Center, check FAQs, contact support, or connect with other users.
            </p>
          </div>
        </section>

        <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {supportOptions.map((option, index) => (
                <Link
                  key={index}
                  href={option.href}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#2C8DA1] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#2C8DA1]/20 transition-colors">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2C8DA1] transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {option.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4 sm:mb-6">
              Still need help?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here for you. Reach out and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/help-center"
                className="inline-block px-8 py-3.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base text-center"
              >
                Contact Support
              </Link>
              <Link
                href="/resources"
                className="inline-block px-8 py-3.5 border-2 border-[#2C8DA1] text-[#2C8DA1] hover:bg-[#2C8DA1] hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base text-center"
              >
                All Resources
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
