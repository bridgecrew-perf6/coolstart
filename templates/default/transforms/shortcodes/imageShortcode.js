const Image = require("@11ty/eleventy-img");

function imageShortcode(src, alt = "", className = "", sizes = "100vw") {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let options = {
    widths: [300, 600],
    class: "responsive_iamge",
    formats: ["avif", "jpeg"],
    outputDir: "_site/img",
  };

  Image(src, options);

  let metadata = Image.statsSync(src, options);

  let lowsrc = metadata.jpeg[0];

  return `<picture class="responsive_image">
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${
          imageFormat[0].sourceType
        }" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(", ")}" sizes="${sizes}">`;
      })
      .join("\n")}
      <img
        src="${lowsrc.url}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>`;
}

module.exports = imageShortcode;
