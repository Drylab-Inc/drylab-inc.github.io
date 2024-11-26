/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/drylab-inc.github.io",
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

// const nextConfig = {
//   output: 'export', // This is crucial for static export
//   basePath: '/your-repo-name', // Replace with your repo name
//   images: {
//     unoptimized: true // Important for static export
//   }
// }
