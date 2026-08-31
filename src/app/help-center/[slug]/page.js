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
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 sm:pt-28 md:pt-32 overflow-x-hidden">
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
              <Link href="/help-center" className="hover:text-[#2C8DA1] transition-colors">
                Help Centre
              </Link>
              {category ? (
                <>
                  <span className="mx-2" aria-hidden="true">
                    /
                  </span>
                  <span>{category.title}</span>
                </>
              ) : null}
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-gray-900 font-medium">{article.title}</span>
            </nav>
            <HelpArticleContent article={article} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
