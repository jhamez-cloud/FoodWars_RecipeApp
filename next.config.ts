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
};

export default nextConfig;

