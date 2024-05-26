/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
        port: "",
        pathname: "/1920x1080.png"
      },
      {
        protocol: "https",
        hostname: "placehold.jp",
        port: "",
        pathname: "/1280x720.png"
      }
    ]
  }
};

export default nextConfig;
