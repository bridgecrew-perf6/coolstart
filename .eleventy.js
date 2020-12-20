const Image = require('@11ty/eleventy-img');

module.exports = (config) => {
  config.addPassthroughCopy('./src/fonts');
  config.addPassthroughCopy('./src/img');
  config.addWatchTarget('./src/js/');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
