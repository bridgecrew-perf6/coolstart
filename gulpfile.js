const { parallel, watch } = require("gulp");

const scss = require("./gulp-tasks/scss");
const runBabel = require("./gulp-tasks/runBabel");

const watcher = () => {
  watch("./src/scss/**/*", { ignoreInitial: true }, scss);
  watch("./src/js/**/*", { ignoreInitial: true }, runBabel);
};

exports.default = parallel(scss, runBabel);

exports.watch = watcher;
