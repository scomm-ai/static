/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DocumentationPage() {
  const docSections = useMemo(
    () => [
      {
        id: "user-guide",
        title: "User Guide",
        description: "Learn how to use scomm.ai from setup to daily use.",
        href: "/help-center",
        icon: (
          <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        ),
        slides: [
          {
            id: "overview",
            label: "Overview",
            content:
              "Get a quick walkthrough of scomm.ai: setup, encryption basics, and how to start sending secure messages.",
          },
          {
            id: "setup",
            label: "Setup",
            content:
              "Connect your email account, verify access, and enable end-to-end encryption so your messages stay private end-to-end.",
          },
          {
            id: "daily",
            label: "Daily Use",
            content:
              "Learn how to send/receive encrypted email, manage contacts, and understand what scomm.ai does automatically.",
          },
        ],
      },
      {
        id: "encryption-overview",
        title: "Encryption Overview",
        description: "How end-to-end encryption works in scomm.ai.",
        href: "/how-it-works",
        icon: (
          <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        ),
        slides: [
          {
            id: "how-it-works",
            label: "How it works",
            content:
              "Understand where encryption happens and why intermediaries can’t read the contents of your messages.",
          },
          {
            id: "keys",
            label: "Keys & Trust",
            content:
              "Learn the role of keys, verification, and trust so you know who can decrypt what.",
          },
          {
            id: "scenarios",
            label: "Common scenarios",
            content:
              "See practical examples like sending to new recipients, device switching, and encrypted replies.",
          },
        ],
      },
      {
        id: "security-privacy",
        title: "Security & Privacy",
        description: "Security architecture and privacy practices.",
        href: "/security",
        icon: (
          <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
        slides: [
          {
            id: "threat-model",
            label: "Threat model",
            content:
              "A clear view of what we protect against, from data interception to unauthorized access attempts.",
          },
          {
            id: "recovery",
            label: "Backup & Recovery",
            content:
              "Learn how recovery works and what to do if you change devices or need to restore your security setup.",
          },
          {
            id: "best-practices",
            label: "Best practices",
            content:
              "Practical security tips for safer day-to-day encrypted email usage.",
          },
        ],
      },
      {
        id: "release-notes",
        title: "Release Notes",
        description: "Latest updates and version history.",
        href: "#",
        icon: (
          <svg className="w-6 h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        ),
        slides: [
          {
            id: "highlights",
            label: "Highlights",
            content:
              "A quick summary of what’s new: improvements, fixes, and usability updates across the product.",
          },
          {
            id: "upgrade",
            label: "Upgrade notes",
            content:
              "If a version affects settings or workflows, this section explains what to review after updating.",
          },
          {
            id: "archive",
            label: "Changelog",
            content:
              "Browse an archive of past releases and see changes over time (placeholder until the real feed is ready).",
          },
        ],
      },
    ],
    []
  );

  const [activeTopicId, setActiveTopicId] = useState(docSections[0]?.id ?? "");
  const activeTopic = docSections.find((t) => t.id === activeTopicId) ?? docSections[0];
  const [activeSlideId, setActiveSlideId] = useState(activeTopic.slides[0]?.id ?? "");
  const activeSlide = activeTopic.slides.find((s) => s.id === activeSlideId) ?? activeTopic.slides[0];

  useEffect(() => {
    // When topic changes, reset slides to the first one for that topic.
    setActiveSlideId(activeTopic.slides[0]?.id ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTopicId]);

  const backToTopic = () => {
    const firstSlideId = activeTopic.slides[0]?.id;
    if (firstSlideId) setActiveSlideId(firstSlideId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
              <span className="text-gray-900 font-medium">Documentation</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-4 sm:mb-6 leading-tight">
              Documentation
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Technical documentation and product reference for scomm.ai. Find user guides, encryption details, and security information.
            </p>
          </div>
        </section>

        <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 gap-10">
              {/* Mobile topic list */}
              <div className="lg:hidden mb-6">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {docSections.map((section) => {
                    const isActive = section.id === activeTopicId;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => setActiveTopicId(section.id)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm transition-colors ${
                          isActive
                            ? "bg-[#2C8DA1]/10 border-[#2C8DA1] text-[#023347]"
                            : "bg-white border-gray-200 text-gray-600 hover:border-[#2C8DA1]/40 hover:text-[#2C8DA1]"
                        }`}
                      >
                        {section.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Left sidebar */}
              <aside className="hidden lg:block lg:col-span-4">
                <h2 className="text-sm font-semibold text-gray-900 mb-4">Topics</h2>
                <div className="space-y-2">
                  {docSections.map((section) => {
                    const isActive = section.id === activeTopicId;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => setActiveTopicId(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          isActive
                            ? "bg-[#2C8DA1]/10 border-[#2C8DA1] text-[#023347]"
                            : "bg-white border-gray-200 text-gray-600 hover:border-[#2C8DA1]/40 hover:text-[#2C8DA1]"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">{section.icon}</div>
                          <div>
                            <div className="font-semibold text-gray-900">{section.title}</div>
                            <div className="text-xs text-gray-600 mt-1">{section.description}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Main content */}
              <div className="lg:col-span-8">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-[#023347]">{activeTopic.title}</h2>
                      <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
                        {activeTopic.description}
                      </p>
                    </div>

                    {activeTopic.href && activeTopic.href !== "#" ? (
                      <Link
                        href={activeTopic.href}
                        className="hidden sm:inline-block px-4 py-2.5 rounded-lg bg-[#2C8DA1] text-white font-semibold hover:bg-[#257a8d] transition-colors whitespace-nowrap"
                      >
                        Open full page
                      </Link>
                    ) : (
                      <span className="hidden sm:inline-block px-4 py-2.5 rounded-lg bg-gray-100 text-gray-500 font-semibold whitespace-nowrap">
                        Coming soon
                      </span>
                    )}
                  </div>

                  {/* Slides / tabs */}
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {activeTopic.slides.map((slide) => {
                        const isSlideActive = slide.id === activeSlideId;
                        return (
                          <button
                            key={slide.id}
                            type="button"
                            onClick={() => setActiveSlideId(slide.id)}
                            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                              isSlideActive
                                ? "bg-[#2C8DA1]/10 border-[#2C8DA1] text-[#023347]"
                                : "bg-white border-gray-200 text-gray-600 hover:border-[#2C8DA1]/40 hover:text-[#2C8DA1]"
                            }`}
                          >
                            {slide.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-5">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{activeSlide.content}</p>
                      <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center">
                        <button
                          type="button"
                          onClick={backToTopic}
                          className="inline-block px-4 py-2.5 rounded-lg bg-[#2C8DA1]/10 text-[#023347] font-semibold border border-[#2C8DA1] hover:bg-[#2C8DA1]/20 transition-colors"
                        >
                          Back to {activeTopic.title}
                        </button>

                        {activeTopic.href && activeTopic.href !== "#" && (
                          <Link
                            href={activeTopic.href}
                            className="inline-block text-sm font-semibold text-[#2C8DA1] hover:underline"
                          >
                            Open full page →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                {activeTopic.href && activeTopic.href !== "#" && (
                  <div className="mt-5 lg:hidden">
                    <Link
                      href={activeTopic.href}
                      className="inline-block px-4 py-2.5 rounded-lg bg-[#2C8DA1] text-white font-semibold hover:bg-[#257a8d] transition-colors whitespace-nowrap"
                    >
                      Open full page
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4 sm:mb-6">
              Explore more resources
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Guides, downloads, and community support are available from our main Resources hub.
            </p>
            <Link
              href="/resources"
              className="inline-block px-8 py-3.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              View All Resources
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
