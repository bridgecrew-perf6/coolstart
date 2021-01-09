# Static

Static is an [11ty](https://11ty.dev/) starter built with [Snowpack](https://www.snowpack.dev/), deployed on [Netlify](https://www.netlify.com/) and has the option to be managed with [Prismic](https://prismic.io/).

## Get Started

### Clone

**Default**:
`npx degit https://github.com/frzrbox/static/#main <site-name>`

**Prismic** (not ready for production):
`npx degit https://github.com/frzrbox/static/#prismic <site-name>`

### Run Locally

`npm start`

### Build

`npm run build`

## Features

- Typescript
- Babel
- PostCSS
- Image Optimization

## Contents

- [Meta Info](#meta-info)
- [Styling](#styling)
- [Typescript](#typescript)
- [Image optimization](#image-optimization)
- [Deployment](#deployment)

## Meta Info

By default you can globally set meta information in `src/_data/site.json`. You can also customize per page by editing the `metaDesc` and `title` values in the pages frontmatter.

**Example**:

```yaml
---
title: About
metaDesc: This is the meta description for the about page.
---

```

## Styling

Out of the box Static uses PostCSS for styling. It comes with helpful utility classes located at `src/css/partials/_utils.css` and a [Modern CSS Reset by Andy Bell](https://piccalil.li/blog/a-modern-css-reset/). If you like to write your styling from scratch you can also just delete the entire contents of the `css` folder.

All functionality can be extended in `postcss.config.css` and `snowpack.config.js`.

By default all files located directly in the `src/css/out` folder will be passed to `dist/css` (note: all files located in a different subfolder will not be passed through). To add multiple stylesheets per page you can set it in the frontmatter as `pageStylesheets` or in the specific layout located at `src/_includes/layouts`.

**Example**:

In this example `out/styles.css` and `out/about.css` will be passed to `dist/css`, but `partials/_config.css` will not be.

```tree
-- css
---- partials
------ _config.css
---- out
------ styles.css
------ about.scss
```

Set in frontmatter: `src/post/post-one.md`

```yaml
# Make sure to use relative paths: the css folder is located in the root
# Must be wrapped in an array even if there is only one stylesheet
pageStylesheets: ['../css/styles.css']
```

Set in layout: `src/_includes/layouts/about.njk`

```njk
{# Make sure to use relative paths: the css folder is located in the root #}
{% set pageStylesheets = ['css/styles.css', 'css/about.css'] %}
```

## Typescript

All files located in `src/js` support typescript out of the box. It also uses babel to transpile all code, so modern features like `import / export` and `async / await` can be used. If you need further customization you can edit the babel cli in `snowpack.conifg.js`.

## Image Optimization

Static uses [eleventy-img](https://www.11ty.dev/docs/plugins/image/) and a nunjucks shortcode name `picture` to generate responsive images.

**Note:** The images will be all stored in the `img` folder in the root directory so name relative paths accordingly, configuration can also be changed in `.eleventy.js`

The shortcude is structured like this:

```njk
{% picture src alt className %}
```

- **src**: The path to the image
- **alt**: Alt text for the element (Note: the build will fail if no alt is added)
- **className** (optional): Classes that should be added to the picture element by default all elements will recieve the class `responsive_image`

**Example**:

```yaml
---
image:
  url: src/img/my-cool-image.jpg
  alt: This is a really cool image
---

```

```njk
{% picture image.url, image.alt, 'cool_image width__100' %}
```

## Deployment

**Note:** While this site can be deployed anyhwere, to get the best out of Static we reccomend deploying on [Netlify](https://www.netlify.com/).

[![Deploy to Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/frzrbox/static)

## Thanks

This project was inspired by lessons learned from:

- [Andy Bell's 11ty Course](https://piccalil.li/course/learn-eleventy-from-scratch/)
- [Levelup Tutorials Snowpack & ESM](https://www.leveluptutorials.com/tutorials/esm-and-snowpack)
