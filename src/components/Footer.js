"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Footer() {
  return (
    <footer className="bg-[#F5F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo Section */}
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#023347]">
                  scomm.ai
                </h2>
              </Link>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-xs">
                Secure, private, and seamless email encryption for everyone.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Product Links Column */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div>
              <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Product</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/features" className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/downloads" className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors">
                    Download Apps
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Legal Links Column */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div>
              <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Legal</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="https://public.scomm.ai/privacy.html" className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="https://public.scomm.ai/ToS.html" className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/security-policy" className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors">
                    Security Policy
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Support Column */}
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div>
              <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/help-center" className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#2C8DA1] transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Social Media Section */}
        <AnimateOnScroll animation="fadeInUp" delay={400}>
          <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Follow us on</h3>
                <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                  {/* Twitter */}
                  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#023347] flex items-center justify-center hover:bg-[#01202a] transition-colors transform transition-smooth hover:scale-110">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#023347] flex items-center justify-center hover:bg-[#01202a] transition-colors transform transition-smooth hover:scale-110">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#023347] flex items-center justify-center hover:bg-[#01202a] transition-colors transform transition-smooth hover:scale-110">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 text-center sm:text-right">
                © scomm.ai 2025. All Rights Reserved.
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}

