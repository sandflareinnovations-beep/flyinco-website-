/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image files are imported as plain URL strings (Vite-style) so the
  // existing `<img src={imported}>` usage in packagesData keeps working.
  images: { disableStaticImages: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|svg)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name].[hash:8][ext]' },
    });
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
