const { client } = require('../../prismic');

module.exports = async () => {
	const home = await client.getSingle('homepage');

	return home;
};
