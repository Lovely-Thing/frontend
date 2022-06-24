/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    disableStaticImages: true,
  },
}

module.exports = nextConfig
