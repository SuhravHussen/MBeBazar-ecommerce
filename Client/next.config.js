/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
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
    },
};
