/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                pathname: '/**', // Allows all paths under flagcdn.com
            },
        ],
    },
};

export default nextConfig;