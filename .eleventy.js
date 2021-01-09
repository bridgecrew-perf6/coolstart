const Image = require('@11ty/eleventy-img');

module.exports = (config) => {
  config.addPassthroughCopy('./src/static/fonts');
  config.addWatchTarget('./src');

  config.addNunjucksAsyncShortcode(
    'picture',

    async function (src, alt, className = '', sizes = '100vw') {
      if (alt === undefined) {
        // You bet we throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
      }
      let metadata = await Image(src, {
        widths: [300, 600, 900],
        formats: ['webp', 'jpeg'],
        outputDir: 'dist/img',
      });

      let lowsrc = metadata.jpeg[0];

      return `<picture class="[ responsive_image ] ${className}">
              ${Object.values(metadata)
                .map((imageFormat) => {
                  return `  <source type="image/${
                    imageFormat[0].format
                  }" srcset="${imageFormat
                    .map((entry) => entry.srcset)
                    .join(', ')}" sizes="${sizes}">`;
                })
                .join('\n')}        
              <img src="${lowsrc.url}" width="${lowsrc.width}" height="${
        lowsrc.height
      }" alt="${alt}">      
            </picture>`;
    }
  );

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
