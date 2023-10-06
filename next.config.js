const path = require(`path`);
const withBundleAnalyzer = require(`@next/bundle-analyzer`)({
  enabled: process.env.ANALYZE === `true`,
});
/**
 * @type {import('next').NextConfig}
 **/
module.exports = () =>
  withBundleAnalyzer({
    reactStrictMode: true,
    pageExtensions: [`page.tsx`, `page.ts`],
    compiler: {
      emotion: true,
    },
    typescript: {
      // Run as part of linting checks
      ignoreBuildErrors: true,
    },
    eslint: {
      // Run as part of linting checks
      ignoreDuringBuilds: true,
    },
    output: `standalone`,
    images: {
      // ionic uses `next export` which doesn't support optimized images
      unoptimized: true,
    },
    experimental: {
      // B/c of our monorepo:
      //   https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
      outputFileTracingRoot: path.join(__dirname, `../../`),

      // To compile monorepo TS dependencies:
      //   https://github.com/vercel/next.js/discussions/26420
      externalDir: true,

      // To be removed when we switch to ESM, `true` or `loose` breaks
      //   after compiling with ncc
      esmExternals: false,
    },

    // Will be available on both server and client
    publicRuntimeConfig: {
      NODE_ENV: process.env.NODE_ENV,
      PUBLIC_URL: process.env.PUBLIC_URL,
    },
  });
