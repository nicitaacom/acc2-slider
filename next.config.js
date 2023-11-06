/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ambgxbbsgequlwnbzchr.supabase.co",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
