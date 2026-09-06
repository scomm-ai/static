import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpCentreHub from "@/components/help/HelpCentreHub";
import Link from "next/link";

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <div className="pt-20 sm:pt-20 md:pt-22">
        <HelpCentreHub />

        <section className="relative py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-3 sm:mb-4 md:mb-6 leading-tight px-1">
              Still need help?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-md sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed px-1">
              Our support team is here to help you. Get in touch and we&apos;ll respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-xs sm:max-w-none mx-auto">
              <Link
                href="/report-a-bug"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-3.5 min-h-12 bg-[#2C8DA1] hover:bg-[#257a8d] active:bg-[#257a8d] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base inline-flex items-center justify-center text-center"
              >
                Contact Support
              </Link>
              <Link
                href="/faqs"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-3.5 min-h-12 border-2 border-[#2C8DA1] text-[#2C8DA1] hover:bg-[#2C8DA1] hover:text-white active:bg-[#2C8DA1] active:text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center text-center"
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
