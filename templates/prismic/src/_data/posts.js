const { client } = require("../../prismic");
const Prismic = require("prismic-javascript");

module.exports = async () => {
  const allPosts = await client.query(
    Prismic.Predicates.at("document.type", "post")
  );

  return allPosts.results;
};
