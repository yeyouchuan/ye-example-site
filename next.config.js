/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/media",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
