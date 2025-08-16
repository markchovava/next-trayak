import type { NextConfig } from "next";
const { withNextVideo } = require('next-video/process')


const nextConfig: NextConfig = {
    /* config options here */
    eslint:{ 
        ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
};

module.exports = withNextVideo(nextConfig)


export default nextConfig;
