import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/Home',
                destination: '/',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'forkify-api.herokuapp.com',
                pathname: '/images/**',
            },
        ],
    },
};

export default nextConfig;

