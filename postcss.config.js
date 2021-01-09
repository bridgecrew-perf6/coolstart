const flexGapPolyfill = require('flex-gap-polyfill');
const autoprefixer = require('autoprefixer');
const easyImport = require('postcss-easy-import');

module.exports = {
  plugins: [easyImport, autoprefixer, flexGapPolyfill],
};
