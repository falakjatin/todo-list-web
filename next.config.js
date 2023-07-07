/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: [],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
                pathname: '/img/**'
            }
        ]
    },
}

module.exports = nextConfig
