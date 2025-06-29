import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // This is required for Next.js to work in a dev container
    // https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
    allowedDevOrigins: ['https://*.cloudworkstations.dev'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
