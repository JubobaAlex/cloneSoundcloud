/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
  // Явно указываем корневую директорию
  turbopack: {
    root: process.cwd(),
  },
};

module.exports = nextConfig;