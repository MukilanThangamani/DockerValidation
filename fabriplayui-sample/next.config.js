/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // required for Docker deployment
  reactStrictMode: true,
};

module.exports = nextConfig;
