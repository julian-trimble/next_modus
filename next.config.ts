/** @type {import('next').NextConfig} */
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Output a static export suitable for GitHub Pages
  output: "export",
  // When deploying to GitHub Project Pages the site is hosted at /<repo>
  // Drive basePath and assetPrefix from env so local dev remains root
  ...(repoBasePath
    ? { basePath: repoBasePath, assetPrefix: repoBasePath }
    : {}),
  // Prefer directory-style routes to avoid .html lookups on Pages
  trailingSlash: true,
  images: {
    // Disable image optimization for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

export default nextConfig;
