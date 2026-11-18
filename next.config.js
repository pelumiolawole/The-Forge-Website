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
  async redirects() {
    return [
      // /h2 is already linked from emails and posts — keep it working
      // permanently, preserving UTM query strings (Next.js forwards
      // the incoming query string by default when the destination
      // doesn't declare its own).
      {
        source: "/h2/",
        destination: "/resources/h2/",
        permanent: true,
      },
      {
        source: "/h2/download/",
        destination: "/resources/h2/download/",
        permanent: true,
      },
      // No /resources index page yet — temporary (not permanent) so
      // this is easy to replace once a real index page exists.
      {
        source: "/resources/",
        destination: "/",
        permanent: false,
      },
    ];
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
