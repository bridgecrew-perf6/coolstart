// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    dist: {
      url: '/',
      static: true,
    },
  },
  plugins: [
    // '@snowpack/plugin-webpack',
    ['@snowpack/plugin-run-script', { cmd: 'eleventy', watch: '$1 --watch' }],
    [
      '@snowpack/plugin-run-script',
      { cmd: 'sass src/scss:dist/css --no-source-map', watch: '$1 --watch' },
    ],
    [
      '@snowpack/plugin-run-script',
      { cmd: 'babel ./src/js --out-dir ./dist/js', watch: '$1 --watch' },
    ],
  ],
  installOptions: {},
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: 'es2015',
    },
  },
  devOptions: {
    port: 3000,
    bundle: false,
  },
  buildOptions: {
    out: 'dist',
  },
};
