/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAILCHIMP_ENDPOINT: process.env.MAILCHIMP_ENDPOINT,
  },
}

module.exports = nextConfig
