/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  transpilePackages: ["geist"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
