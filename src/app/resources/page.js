import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Documentation",
      description: "Technical docs and product reference.",
      pageHref: "/resources/documentation",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      links: [
        { label: "User guide", href: "/help-center" },
        { label: "Encryption overview", href: "/how-it-works" },
        { label: "Security & privacy", href: "/security" },
        { label: "Release notes", href: "/resources/documentation" }
      ]
    },
    {
      title: "Guides & Tutorials",
      description: "Step-by-step guides to get the most out of scomm.ai.",
      pageHref: "/resources/guides-and-tutorials",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      links: [
        { label: "Getting started", href: "/help-center" },
        { label: "Setting up encryption", href: "/how-it-works" },
        { label: "Add-ons setup", href: "/add-ons" },
        { label: "Best practices", href: "/security" }
      ]
    },
    {
      title: "Downloads & Tools",
      description: "Apps, extensions, and developer tools.",
      pageHref: "/resources/downloads-and-tools",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      links: [
        { label: "Download for desktop", href: "/downloads" },
        { label: "Browser extensions", href: "/add-ons" },
        { label: "Mobile apps", href: "/downloads" }
      ]
    },
    {
      title: "Support & Community",
      description: "Get help and connect with other users.",
      pageHref: "/resources/support-and-community",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      links: [
        { label: "Help Center", href: "/help-center" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact support", href: "/help-center" }
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
                Resources
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
                Documentation, guides, downloads, and support — everything you need to use scomm.ai with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {resourceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#2C8DA1] transition-all duration-300"
                >
                  <Link href={category.pageHref} className="block mb-4 sm:mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center hover:bg-[#2C8DA1]/20 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 mt-2 hover:text-[#2C8DA1] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 sm:mb-6">
                      {category.description}
                    </p>
                  </Link>
                  <ul className="space-y-3">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm sm:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors flex items-start gap-2"
                        >
                          <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4 sm:mb-6">
              Can&apos;t find what you need?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Check our Help Center or reach out to our team — we&apos;re here to help you get the most out of secure, encrypted email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/help-center"
                className="px-8 py-3.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base inline-block text-center"
              >
                Help Center
              </Link>
              <Link
                href="/faqs"
                className="px-8 py-3.5 border-2 border-[#2C8DA1] text-[#2C8DA1] hover:bg-[#2C8DA1] hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base inline-block text-center"
              >
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
