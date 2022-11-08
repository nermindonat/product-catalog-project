/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
  // env: {
  //   // apiUrl: "http://127.0. 0.1:3000",
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://assignment-api.piton.com.tr/:path*", // Proxy to Backend
  //     },
  //   ];
  // },
};
module.exports = nextConfig;




// module.exports = () => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/api/:slug*",
//         destination: "https://assignment-api.piton.com.tr/:slug*",
//       },
//     ];
//   };
//   return {
//     rewrites
//   }
// };




// module.exports = {
//   async headers() {
//     return [
//       {
//         source: "/api/:path*",
//         headers: [
//           {
//             key: 'Access-Control-Expose-Headers',
//             value: '*, authorization',
//           }
//         ]
//       }
//     ]
//   },
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "https://assignment-api.piton.com.tr/:path*", // Proxy to Backend
  
//       }
//     ]
//   }
// }