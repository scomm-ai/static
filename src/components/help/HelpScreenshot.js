export default function HelpScreenshot({ image }) {
  if (!image?.src) return null;

  return (
    <figure className="mt-4 rounded-xl border border-gray-200 bg-[#F5F9FA] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt || ""}
        className="w-full h-auto object-contain bg-white"
      />
      {image.caption ? (
        <figcaption className="px-4 py-3 text-sm text-gray-600 border-t border-gray-200">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
