/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => ([
    {
      source: '/dashboard',
      destination: '/dashboard/home',
      permanent: true,
    },
  ]),
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['m.media-amazon.com', 'lh3.googleusercontent.com'],
  },
};
