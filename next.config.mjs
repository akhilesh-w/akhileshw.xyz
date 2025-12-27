/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/rss.xml",
        destination: "/api/rss",
      },
    ];
  },
};

export default nextConfig;
