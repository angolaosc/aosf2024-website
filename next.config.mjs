/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cache.sessionize.com',
        port: '', 
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
