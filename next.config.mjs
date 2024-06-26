/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['www.thecocktaildb.com', 'images.unsplash.com'],
    },
    
};

export default nextConfig;
