import createMDX from "@next/mdx";
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  basePath: "/drylab-inc.github.io",
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
    unoptimized: true, // Important for static export
  },
  experimental: {
    appDir: true,
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

// module.exports = nextConfig;

export default withContentlayer(nextConfig);

// export default withMDX(nextConfig);
// export  withContentlayer({})

// const nextConfig = {
//   output: 'export', // This is crucial for static export
//   basePath: '/your-repo-name', // Replace with your repo name
//   images: {
//     unoptimized: true // Important for static export
//   }
// }
