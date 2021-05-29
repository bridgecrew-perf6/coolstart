const imageShortcode = require('./transforms/shortcodes/imageShortcode');

module.exports = (config) => {
	const pug = require('pug');
	config.setLibrary('pug', pug);

	config.setTemplateFormats([
		// Templates:
		'html',
		'pug',
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

	config.addPassthroughCopy('assets');
	config.addPassthroughCopy('js');

	// 11ty Shortcodes
	config.addJavaScriptFunction('image', imageShortcode);
	config.addJavaScriptFunction('log', (val) => console.log(val));

	global.filters = config.javascriptFunctions;
	config.setPugOptions({
		globals: ['filters'],
	});

	return {
		dir: {
			input: 'views',
			output: '_site',
		},
	};
};
