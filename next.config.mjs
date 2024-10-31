/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/examples/basic-chat',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  