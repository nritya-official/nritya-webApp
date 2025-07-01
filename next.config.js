// import type { NextConfig } from 'next'
 
const nextConfig = {
    distDir: 'build', // or any folder name you like
    eslint: {
        ignoreDuringBuilds: true
    }
}
 
module.exports = nextConfig