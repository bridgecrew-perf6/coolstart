const Image = require('@11ty/eleventy-img');

function imageShortcode(src, alt, className = '', sizes = '100vw') {
	if (alt === undefined) {
		// You bet we throw an error on missing alt (alt="" works okay)
		throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
	}

	let options = {
		widths: [300, 600],
		formats: ['avif', 'jpeg'],
		outputDir: '_site/img',
	};

	Image(src, options);
	let metadata = Image.statsSync(src, options);

	let imageAttributes = {
		alt,
		sizes,
		class: className,
		loading: 'lazy',
		decoding: 'async',
	};

	// You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
	return Image.generateHTML(metadata, imageAttributes, {
		whitespaceMode: 'inline',
	});
}

module.exports = imageShortcode;
