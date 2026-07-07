/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: false,
  typescript: {
    // Don't fail build on TypeScript errors (if any)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
