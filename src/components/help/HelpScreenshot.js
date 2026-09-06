const basePath = process.env.NODE_ENV === "production" ? "/static" : "";

export default function HelpScreenshot({ image }) {
  if (!image?.src) return null;

  const src = image.src.startsWith("http")
    ? image.src
    : `${basePath}${image.src}`;

  return (
    <figure className="mt-3 sm:mt-4 w-full max-w-[16rem] sm:max-w-[18rem] md:max-w-[20rem] rounded-lg sm:rounded-xl border border-gray-200 bg-[#F5F9FA] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={image.alt || ""}
        className="w-full h-auto max-h-[22rem] sm:max-h-[26rem] object-contain object-top bg-white"
        loading="lazy"
        decoding="async"
      />
      {image.caption ? (
        <figcaption className="px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm text-gray-600 border-t border-gray-200 leading-snug">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
