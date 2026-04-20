"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F9FA] via-gray-50 to-[#F0F7F8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start relative z-10">
          {/* Left Side - Welcome Section */}
          <div className="flex flex-col justify-center lg:pr-8 space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-4 sm:mb-6 leading-tight">
                Create your account
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mb-6">
                Join scomm.ai today and start protecting your emails with end-to-end encryption
              </p>
            </div>

            {/* Benefits Section */}
            <div className="space-y-4 sm:space-y-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#023347] mb-3">
                Why Choose scomm.ai?
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2C8DA1]/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">Complete Privacy Control</h3>
                    <p className="text-sm sm:text-base text-gray-600">Store data locally or in your own cloud - you decide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2C8DA1]/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">Lightning Fast Performance</h3>
                    <p className="text-sm sm:text-base text-gray-600">Search 50,000+ emails instantly with on-device AI</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2C8DA1]/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">Advanced Security Features</h3>
                    <p className="text-sm sm:text-base text-gray-600">Local AI and advanced spam filtering</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2C8DA1]/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">Works Everywhere</h3>
                    <p className="text-sm sm:text-base text-gray-600">Windows, Mac, Linux, Android, iOS, and Web support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="pt-4 sm:pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Join thousands of users protecting their privacy</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>✓ Free Forever Plan</span>
                <span>✓ No Credit Card Required</span>
                <span>✓ Setup in 2 Minutes</span>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form Card */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C8DA1] focus:border-[#2C8DA1] transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C8DA1] focus:border-[#2C8DA1] transition-all"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  className="w-full px-3 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C8DA1] focus:border-[#2C8DA1] transition-all"
                  placeholder="At least 8 characters"
                />
                <p className="mt-1 text-xs text-gray-500">Use 8 or more characters with a mix of letters, numbers &amp; symbols</p>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C8DA1] focus:border-[#2C8DA1] transition-all"
                  placeholder="Confirm your password"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start pt-1">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 mt-0.5 text-[#2C8DA1] border-gray-300 rounded focus:ring-[#2C8DA1]"
                />
                <label htmlFor="agreeToTerms" className="ml-2 text-xs text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms-of-service" className="text-[#2C8DA1] hover:text-[#257a8d] transition-colors">
                    Terms of Service
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy-policy" className="text-[#2C8DA1] hover:text-[#257a8d] transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-medium text-sm rounded-md transition-all duration-200 shadow-sm hover:shadow mt-3"
              >
                Create account
              </button>

              {/* Divider */}
              <div className="relative my-5 sm:my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                </div>
              </div>

              {/* Social Signup Buttons */}
              <div className="space-y-2.5 sm:space-y-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm text-gray-700 font-medium">Continue with Google</span>
                </button>
              </div>
            </form>
            </div>

            {/* Sign in Link */}
            <div className="text-center mt-5 sm:mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/signin" className="text-[#2C8DA1] hover:text-[#257a8d] font-medium transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
