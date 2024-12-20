/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
