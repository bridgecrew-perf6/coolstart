require("dotenv").config();

const Prismic = require("prismic-javascript");

const apiEndpoint = process.env.PRISMIC_ENDPOINT;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

const client = Prismic.client(apiEndpoint, { accessToken: accessToken });

module.exports = { client };
