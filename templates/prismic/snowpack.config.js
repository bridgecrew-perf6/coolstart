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
	],
	installOptions: {},
	devOptions: {
		port: 3000,
		hmrDelay: 300,
	},
	optimize: {
		bundle: true,
		minify: true,
		target: 'es2015',
	},
};
