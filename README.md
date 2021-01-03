# Static

Static is an 11ty starter built with [Snowpack](https://www.snowpack.dev/), managed with [Prismic](https://prismic.io/) and deployed on [Netlify](https://www.netlify.com/).

## Get Started

### Clone

`npx degit https://github.com/frzrbox/static/#main <site-name>`

### Run Locally

`npm start`

### Build

`npm run build`

## Features

- Inline critical styles
- Babel
- Image Optimization
- SCSS

## Contents

- [Meta Info](#meta-info)
- [Styling](#styling)
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

Out of the box Static uses SCSS for styling. It comes with helpful utility classes located at `src/scss/partials/_utils.scss` and a [Modern CSS Reset by Andy Bell](https://piccalil.li/blog/a-modern-css-reset/). If you like to write your styling from scratch you can also just delete the entire contents of the `scss` folder.

By default all files located directly in the `src/scss` folder will be passed to `dist/css` (note: all files located in a subfolder will not be passed through). To add multiple stylesheets per page you can set it in the specific layout located at `src/_includes/layouts`.

**Example**:

```tree
-- scss
---- styles.css
---- about.scss
```

Demo for: `src/_includes/layouts/about.njk`

```njk
{# Make sure to use relative paths: the css folder is located in the root #}
{% set pageStylesheets = ['css/styles.css', 'css/about.css'] %}
```

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

`netlify deploy`

### Thanks

This project was inspired by lessons learned from [Andy Bell's 11ty Course](https://piccalil.li/course/learn-eleventy-from-scratch/)
