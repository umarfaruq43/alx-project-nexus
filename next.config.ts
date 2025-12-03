// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//     /* config options here */
//     reactStrictMode: true,
//     images: {
//         domains: ["images.unsplash.com", "image.tmdb.org"],
//     },
// };

// export default nextConfig;

const withPWA = require("next-pwa")({
    dest: "public",
    // disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.unsplash.com", "image.tmdb.org"],
    },
    turbopack: {},
};

module.exports = withPWA(nextConfig);
