/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "abstracts/variables.scss";`,
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};
