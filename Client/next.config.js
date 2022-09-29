/** @type {import('next').NextConfig} */
const path = require('path');
const withPWA  = require("next-pwa");
module.exports = WithPWA(
  {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "abstracts/variables.scss";
        @import "abstracts/mixins.scss";
        `,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
};
)
