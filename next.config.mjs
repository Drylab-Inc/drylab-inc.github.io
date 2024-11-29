import { withContentlayer } from "next-contentlayer";
import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  basePath: "/drylab-inc.github.io",
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  experimental: {
    appDir: true,
  },
};

// module.exports = nextConfig;

export default withContentlayer(nextConfig);
