import HelpScreenshot from "./HelpScreenshot";

export default function HelpArticleContent({ article }) {
  return (
    <article className="max-w-3xl w-full min-w-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#023347] mb-3 sm:mb-4 md:mb-6 leading-tight break-words">
        {article.title}
      </h1>
      {article.intro ? (
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-10">
          {article.intro}
        </p>
      ) : null}

      {article.steps?.length ? (
        <ol className="space-y-6 sm:space-y-8 md:space-y-10">
          {article.steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3 sm:gap-4 md:gap-5 min-w-0">
              <span
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-[#2C8DA1] text-white font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center mt-0.5"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="min-w-0 flex-1 pt-0.5">
                {step.title ? (
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1.5 sm:mb-2 leading-snug break-words">
                    {step.title}
                  </h2>
                ) : null}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line break-words">
                  {step.instruction}
                </p>
                <HelpScreenshot image={step.image} />
              </div>
            </li>
          ))}
        </ol>
      ) : null}
    </article>
  );
}
