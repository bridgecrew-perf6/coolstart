const path = require('path');
const Image = require('@11ty/eleventy-img');

module.exports = (config) => {
	config.setTemplateFormats([
		// Templates:
		'html',
		'njk',
		'md',
		// Static Assets:
		'css',
		'jpeg',
		'jpg',
		'png',
		'svg',
		'woff',
		'woff2',
	]);

	// 11ty Shortcodes
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
				outputDir: '_site/img',
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

	// Watch all 11ty specific directories
	config.addWatchTarget(path.join(__dirname, 'img'));
	config.addWatchTarget(path.join(__dirname, 'scss'));
	config.addWatchTarget(path.join(__dirname, 'includes'));
	config.addWatchTarget(path.join(__dirname, 'data'));
	config.addWatchTarget(path.join(__dirname, 'js'));
	config.addWatchTarget(path.join(__dirname, 'pages'));

	return {
		dir: {
			input: path.join(__dirname, 'pages'),
			// Relative to the 'pages' directory
			includes: '../includes',
			data: '../data',
			output: '_site',
		},
	};
};
