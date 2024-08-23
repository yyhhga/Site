/** @type {import('next').NextConfig} */
const nextConfig = {
   //for docker
   // output: 'standalone',
   output: 'export',
   images: {
      unoptimized: true,
   },
}

export default nextConfig
