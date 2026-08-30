import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BugReportForm from "@/components/BugReportForm";
import Link from "next/link";

export default function ReportABugPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 sm:pt-28 md:pt-32 overflow-x-hidden">
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#023347]/5 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-3xl mx-auto relative z-10">
            <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
              <Link href="/help-center" className="hover:text-[#2C8DA1] transition-colors">
                Support
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-gray-900 font-medium">Report a Bug</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#023347] mb-4 sm:mb-6 leading-tight">
              Report a Bug
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10">
              Tell us what went wrong. Only the description is required — everything else is optional and helps us investigate faster.
            </p>
            <BugReportForm />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
