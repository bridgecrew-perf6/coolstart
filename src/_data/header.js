const { client } = require('../../prismic');

module.exports = async () => {
  const header = await client.getSingle('header');
  return header;
};
