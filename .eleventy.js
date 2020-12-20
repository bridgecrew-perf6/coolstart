// Transforms
const htmlMinTransform = require("./src/transforms/html-min.js");

const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
  config.addPassthroughCopy("./src/fonts");
  config.addPassthroughCopy("./src/img");
  config.addWatchTarget("./src/js/");

  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform);
  }

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
