import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpArticleContent from "@/components/help/HelpArticleContent";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getHelpArticleOrStub,
  getHelpCategoryById,
  getHelpStaticParams,
} from "@/data/helpCentre";

export async function generateStaticParams() {
  return getHelpStaticParams();
}

export const dynamicParams = false;

export default async function HelpArticlePage({ params }) {
  const { slug } = await params;
  const article = getHelpArticleOrStub(slug);
  if (!article) notFound();

  const category = getHelpCategoryById(article.categoryId);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <div className="pt-20 sm:pt-20 md:pt-22">
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
          <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10" />
          <div className="max-w-3xl mx-auto relative z-10 w-full min-w-0">
            <nav
              className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 leading-snug"
              aria-label="Breadcrumb"
            >
              <Link
                href="/help-center"
                className="hover:text-[#2C8DA1] transition-colors shrink-0 py-1"
              >
                Help Centre
              </Link>
              {category ? (
                <>
                  <span className="text-gray-400 shrink-0" aria-hidden="true">
                    /
                  </span>
                  <span className="shrink-0">{category.title}</span>
                </>
              ) : null}
              <span className="text-gray-400 shrink-0" aria-hidden="true">
                /
              </span>
              <span className="text-gray-900 font-medium break-words min-w-0">
                {article.title}
              </span>
            </nav>
            <HelpArticleContent article={article} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
