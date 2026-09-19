/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Showcase photography is served from Unsplash.
    // Replace with your own CDN/bucket when real project photos are available.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
