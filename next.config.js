/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      unoptimized: true,
      domains: ['https://mks-challenge-api-frontend.herokuapp.com', "s3-alpha-sig.figma.com"],
    },
}

module.exports = nextConfig
