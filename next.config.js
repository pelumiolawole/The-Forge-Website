/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react/compiler-runtime": false,
    };
    return config;
  },
  async headers() {
    return [
      {
        // TODO: swap filename if the Canva export uses a different name
        source: "/PDFs/H2_Blueprint_2026.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="H2_Blueprint_2026.pdf"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
