/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.unsplash.com", "res.cloudinary.com"]
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: ""
      }
    ]
  }
};

export default nextConfig;
