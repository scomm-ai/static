"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const RESOURCES_LINKS = [
  { label: "Documentation", href: "/resources/documentation" },
  { label: "Guides & Tutorials", href: "/resources/guides-and-tutorials" },
  { label: "Downloads & Tools", href: "/resources/downloads-and-tools" },
  { label: "Support & Community", href: "/resources/support-and-community" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const resourcesDropdownTimeoutRef = useRef(null);

  const openResourcesDropdown = () => {
    if (resourcesDropdownTimeoutRef.current) {
      clearTimeout(resourcesDropdownTimeoutRef.current);
      resourcesDropdownTimeoutRef.current = null;
    }
    setIsResourcesDropdownOpen(true);
  };

  const closeResourcesDropdown = () => {
    resourcesDropdownTimeoutRef.current = setTimeout(() => {
      setIsResourcesDropdownOpen(false);
    }, 100);
  };

  const cancelCloseResourcesDropdown = () => {
    if (resourcesDropdownTimeoutRef.current) {
      clearTimeout(resourcesDropdownTimeoutRef.current);
      resourcesDropdownTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Clean up resources dropdown timeout on unmount
  useEffect(() => {
    return () => {
      if (resourcesDropdownTimeoutRef.current) clearTimeout(resourcesDropdownTimeoutRef.current);
    };
  }, []);

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#F5F9FA] flex flex-col ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
      {/* Launch Banner */}
      <div className="w-full bg-gradient-to-r from-[#023347] to-[#2A8E9C] text-white py-1.5 lg:py-1 px-4 shadow-sm border-b border-[#237a87]/30">
        <div className="max-w-7xl mx-auto text-center flex items-center justify-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-50">
            Launch date: <span className="font-bold text-white">Saturday 1st of August 2026</span>
          </span>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-[#023347]">
            scomm.ai
          </h2>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
          <Link href="/features" className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base transition-smooth">
            Features
          </Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base transition-smooth">
            How It Works
          </Link>
          <Link href="/downloads" className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base transition-smooth">
            Downloads
          </Link>
          <Link href="/security" className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base transition-smooth">
            Security
          </Link>
          <Link href="/add-ons" className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base transition-smooth">
            Add-Ons
          </Link>
          {/* Resources dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={openResourcesDropdown}
            onMouseLeave={closeResourcesDropdown}
          >
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base transition-smooth flex items-center gap-1"
              aria-expanded={isResourcesDropdownOpen}
              aria-haspopup="true"
            >
              Resources
              <svg className={`w-4 h-4 transition-transform ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute top-full left-0 pt-0.5 z-30 transition-opacity duration-200 ${isResourcesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onMouseEnter={cancelCloseResourcesDropdown}
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 pt-3 min-w-[200px]">
                {RESOURCES_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#2C8DA1]/10 hover:text-[#2C8DA1] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/resources"
                  className="block px-4 py-2.5 text-sm font-medium text-[#2C8DA1] border-t border-gray-100 mt-1 pt-2 hover:bg-[#2C8DA1]/10 transition-colors"
                >
                  All Resources
                </Link>
              </div>
            </div>
          </div> */}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 md:gap-4">
          <Link href="/signin" className="px-3 md:px-4 py-1.5 md:py-2 text-gray-700 hover:text-gray-900 font-medium text-xs sm:text-sm lg:text-base transition-smooth border border-gray-300 rounded-lg hover:border-gray-400 transform hover:scale-105">
            Sign in
          </Link>
          <Link href="/signup" className="px-3 md:px-4 py-1.5 md:py-2 bg-[#2A8E9C] hover:bg-[#237a87] text-white font-semibold text-xs sm:text-sm lg:text-base rounded-lg transition-smooth transform hover:scale-105">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors transform transition-smooth hover:scale-110 active:scale-95"
          aria-label="Toggle menu"
        >
          <svg className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-[#F5F9FA] border-t border-gray-200 shadow-lg animate-slide-in-down">
          <nav className="px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3">
            <Link
              href="/features"
              className="block py-2.5 sm:py-3 px-2 sm:px-3 text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base transition-all duration-300 transform transition-smooth hover:translate-x-3 hover:text-[#2C8DA1] hover:bg-[#2C8DA1]/5 rounded-lg opacity-0 animate-slide-in-left-scale"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: '0.05s' }}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="block py-2.5 sm:py-3 px-2 sm:px-3 text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base transition-all duration-300 transform transition-smooth hover:translate-x-3 hover:text-[#2C8DA1] hover:bg-[#2C8DA1]/5 rounded-lg opacity-0 animate-slide-in-left-scale"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: '0.1s' }}
            >
              How It Works
            </Link>
            <Link
              href="/downloads"
              className="block py-2.5 sm:py-3 px-2 sm:px-3 text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base transition-all duration-300 transform transition-smooth hover:translate-x-3 hover:text-[#2C8DA1] hover:bg-[#2C8DA1]/5 rounded-lg opacity-0 animate-slide-in-left-scale"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: '0.15s' }}
            >
              Downloads
            </Link>
            <Link
              href="/security"
              className="block py-2.5 sm:py-3 px-2 sm:px-3 text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base transition-all duration-300 transform transition-smooth hover:translate-x-3 hover:text-[#2C8DA1] hover:bg-[#2C8DA1]/5 rounded-lg opacity-0 animate-slide-in-left-scale"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: '0.2s' }}
            >
              Security
            </Link>
            <Link
              href="/add-ons"
              className="block py-2.5 sm:py-3 px-2 sm:px-3 text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base transition-all duration-300 transform transition-smooth hover:translate-x-3 hover:text-[#2C8DA1] hover:bg-[#2C8DA1]/5 rounded-lg opacity-0 animate-slide-in-left-scale"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: '0.25s' }}
            >
              Add-Ons
            </Link>
            <div style={{ animationDelay: '0.3s' }} className="opacity-0 animate-slide-in-left-scale">
              <button
                type="button"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full py-2.5 sm:py-3 px-2 sm:px-3 text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base"
              >
                Resources
                <svg className={`w-5 h-5 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-[#2C8DA1]/30 ml-2">
                  {RESOURCES_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 px-2 text-gray-600 hover:text-[#2C8DA1] text-sm"
                      onClick={() => { setIsMenuOpen(false); setIsResourcesOpen(false); }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/resources"
                    className="block py-2 px-2 text-[#2C8DA1] font-medium text-sm"
                    onClick={() => { setIsMenuOpen(false); setIsResourcesOpen(false); }}
                  >
                    All Resources
                  </Link>
                </div>
              )}
            </div>
            <div className="pt-3 sm:pt-4 border-t border-gray-200 space-y-2 sm:space-y-3">
              <Link 
                href="/signin"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base transition-all duration-300 border border-gray-300 rounded-lg hover:border-[#2C8DA1] hover:bg-[#2C8DA1]/5 transform transition-smooth hover:scale-[1.02] active:scale-[0.98] opacity-0 animate-slide-in-up-scale inline-block text-center"
                style={{ animationDelay: '0.35s' }}
              >
                Sign in
              </Link>
              <Link 
                href="/signup"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#2A8E9C] hover:bg-[#237a87] text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 transform transition-smooth hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg opacity-0 animate-slide-in-up-scale inline-block text-center"
                style={{ animationDelay: '0.4s' }}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
 