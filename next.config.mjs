/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  ...(isGitHubPages
    ? {
        assetPrefix: '/magic-portfolio-site/',
        basePath: '/magic-portfolio-site',
      }
    : {}),
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
