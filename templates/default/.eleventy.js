const path = require('path');
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

	// 11ty Shortcodes
	config.addJavaScriptFunction('image', imageShortcode);
	config.addJavaScriptFunction('log', (val) => console.log(val));

	global.filters = config.javascriptFunctions;
	config.setPugOptions({
		globals: ['filters'],
	});

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
