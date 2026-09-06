"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  HELP_CATEGORIES,
  getHelpArticleBySlug,
  getHelpArticles,
  slugifyHelpTitle,
} from "@/data/helpCentre";

const CATEGORY_ICONS = {
  "getting-started": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "account-settings": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  sentria: (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  "security-privacy": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  troubleshooting: (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

function articleHref(slug) {
  if (slug === "contact-support") return "/report-a-bug";
  if (getHelpArticleBySlug(slug)) return `/help-center/${slug}`;
  return null;
}

export default function HelpCentreHub() {
  const [query, setQuery] = useState("");
  const writtenArticles = getHelpArticles();

  const cards = useMemo(() => {
    return HELP_CATEGORIES.map((category) => {
      const fromData = writtenArticles.filter((article) => article.categoryId === category.id);
      const writtenSlugs = new Set(fromData.map((article) => article.slug));
      const written = fromData.map((article) => ({
        title: article.title,
        slug: article.slug,
        searchText: [article.title, article.summary, article.intro]
          .filter(Boolean)
          .join(" "),
      }));
      const stubs = (category.defaultArticleTitles || [])
        .map((title) => ({
          title,
          slug: slugifyHelpTitle(title),
          searchText: title,
        }))
        .filter((article) => !writtenSlugs.has(article.slug));

      return {
        ...category,
        articles: [...written, ...stubs],
      };
    }).filter((category) => category.articles.length > 0);
  }, [writtenArticles]);

  const grouped = useMemo(() => {
    const term = query.trim().toLowerCase();
    return cards
      .map((category) => ({
        ...category,
        articles: term
          ? category.articles.filter((article) => article.searchText.toLowerCase().includes(term))
          : category.articles,
      }))
      .filter((category) => category.articles.length > 0);
  }, [cards, query]);

  return (
    <>
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-[#023347]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight">
              Help Center
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-5 sm:mb-6 md:mb-8 px-1">
              Find answers to common questions and learn how to get the most out of scomm.ai
            </p>

            <div className="max-w-xl sm:max-w-2xl mx-auto w-full">
              <label htmlFor="help-search" className="sr-only">
                Search for help articles
              </label>
              <div className="relative">
                <input
                  id="help-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for help articles..."
                  className="w-full min-h-12 sm:min-h-11 px-4 sm:px-6 py-3 sm:py-4 pl-11 sm:pl-12 text-base text-gray-900 border-2 border-gray-200 rounded-xl sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C8DA1] focus:border-transparent shadow-sm"
                />
                <svg
                  className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-2 sm:pt-4 md:pt-6 pb-10 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {grouped.length === 0 ? (
            <p className="text-center text-gray-600 text-sm sm:text-base px-2 py-8">
              No articles match &ldquo;{query}&rdquo;. Try a different search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {grouped.map((category) => (
                <div key={category.id} className="h-full min-h-[28rem]">
                  <article className="flex flex-col justify-start h-full min-w-0 bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 hover:border-[#2C8DA1] hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 shrink-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center shrink-0">
                        {CATEGORY_ICONS[category.id]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                          {category.title}
                        </h2>
                        {category.description ? (
                          <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem]">
                            {category.description}
                          </p>
                        ) : (
                          <div className="min-h-[2.5rem] sm:min-h-[2.75rem]" aria-hidden="true" />
                        )}
                      </div>
                    </div>

                    <ul className="space-y-0.5 sm:space-y-1 md:space-y-1.5 shrink-0">
                      {category.articles.map((article) => {
                        const href = articleHref(article.slug);
                        const className =
                          "text-sm sm:text-[0.9375rem] md:text-base text-gray-600 hover:text-[#2C8DA1] active:text-[#2C8DA1] transition-colors flex items-start gap-2 py-2 min-h-10 sm:min-h-0 rounded-md";
                        const chevron = (
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C8DA1] shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        );

                        return (
                          <li key={article.slug} className="min-w-0">
                            {href ? (
                              <Link href={href} className={className}>
                                {chevron}
                                <span className="break-words">{article.title}</span>
                              </Link>
                            ) : (
                              <span className={`${className} cursor-default`}>
                                {chevron}
                                <span className="break-words">{article.title}</span>
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
