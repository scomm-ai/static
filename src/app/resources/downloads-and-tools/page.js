import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DownloadsAndToolsPage() {
  const downloads = [
    {
      title: "Desktop App",
      description: "Download scomm.ai for Windows, macOS, or Linux. Full encryption and offline support.",
      href: "/downloads",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Browser Extensions",
      description: "Add encryption to your existing webmail with our Chrome, Firefox, and Edge extensions.",
      href: "/add-ons",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9a9 9 0 009 9m0 0a9 9 0 009-9m-9 9a9 9 0 000 18m9-9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: "Mobile Apps",
      description: "Use scomm.ai on iOS and Android. Encrypted email on the go.",
      href: "/downloads",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Developer Tools",
      description: "APIs and SDKs for integrating encryption into your applications.",
      href: "#",
      icon: (
        <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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
              <span className="text-gray-900 font-medium">Downloads & Tools</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-4 sm:mb-6 leading-tight">
              Downloads & Tools
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Get scomm.ai on your devices. Desktop apps, browser extensions, and mobile apps — all with end-to-end encryption.
            </p>
          </div>
        </section>

        <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {downloads.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#2C8DA1] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#2C8DA1]/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2C8DA1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4 sm:mb-6">
              Ready to get started?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Head to our Downloads page to install scomm.ai on your preferred platform.
            </p>
            <Link
              href="/downloads"
              className="inline-block px-8 py-3.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Go to Downloads
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
