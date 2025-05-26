/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aneefdev.site',
        port: '',
        pathname: '/**',
      },
    ],
  },
webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, // Menonaktifkan linting saat build
  },
};

export default nextConfig;
