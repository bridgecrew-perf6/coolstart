// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    _site: { url: '/', static: true },
  },
  plugins: [
    ['@snowpack/plugin-run-script', { cmd: 'eleventy', watch: '$1 --watch' }],
    [
      '@snowpack/plugin-run-script',
      { cmd: 'sass scss:_site/css', watch: '$1 --watch' },
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'babel --presets @babel/preset-typescript --extensions ".ts" js --out-dir _site/js',
        watch: '$1 --watch',
      },
    ],
    ['@snowpack/plugin-webpack', { htmlMinifierOptions: true }],
  ],
  installOptions: {},
  devOptions: {
    port: 3000,
    hmrDelay: 500,
  },
  buildOptions: {
    clean: true,
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};
