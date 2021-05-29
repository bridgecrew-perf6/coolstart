const imageShortcode = require('./transforms/shortcodes/imageShortcode');
const handleRichText = require('./transforms/shortcodes/handleRichText');
const {
	handleLinkResolver,
} = require('./transforms/shortcodes/handleLinkResolver');

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
	config.addJavaScriptFunction('richText', handleRichText);
	config.addJavaScriptFunction('link', handleLinkResolver);
	config.addJavaScriptFunction('log', (val) => console.log('log', val));

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
