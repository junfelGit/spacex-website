/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ["imgur.com", "i.imgur.com", "marinetraffic.com", "photos.marinetraffic.com", "placehold.co"]
    }
}

module.exports = nextConfig
