import HelpScreenshot from "./HelpScreenshot";

export default function HelpArticleContent({ article }) {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#023347] mb-4 sm:mb-6 leading-tight">
        {article.title}
      </h1>
      {article.intro ? (
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10">
          {article.intro}
        </p>
      ) : null}

      <ol className="space-y-8 sm:space-y-10">
        {article.steps.map((step, index) => (
          <li key={index} className="flex gap-4 sm:gap-5">
            <span
              className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2C8DA1] text-white font-semibold text-sm sm:text-base flex items-center justify-center"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              {step.title ? (
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h2>
              ) : null}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {step.instruction}
              </p>
              <HelpScreenshot image={step.image} />
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
