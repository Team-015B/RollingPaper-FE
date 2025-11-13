import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `rolling_${hash}`,
});

/** @type {import('next').NextConfig} */
const nextConfig = withVanillaExtract({
  // output: 'export',
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
