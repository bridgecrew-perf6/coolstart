const { client } = require('../../prismic');

module.exports = async () => {
	const about = await client.getByUID('page', 'about');

	return about;
};
