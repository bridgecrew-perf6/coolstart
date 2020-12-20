const { dest, src } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const log = require("fancy-log");

const input = "./src/scss";
const output = "dist/css";

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === "production";

const scss = () => {
  const postcssPlugins = [autoprefixer(), cssnano()];

  return src(input)
    .pipe(
      sass().on("error", (err) => {
        log.error(err.message);
      })
    )
    .pipe(postcss(postcssPlugins))
    .pipe(dest(output, { sourcemaps: !isProduction }));
};

module.exports = scss;
