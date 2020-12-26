# Static

Static is an 11ty starter deployed on Netlify.

## Get Started

Clone

`npx degit https://github.com/frzrbox/static/#main <site-name>`

Run Locally

`npm start`

Deploy To Netlify

`netlify deploy`

## Features

- Inline critical styles
- Babel
- [Image optimization](#image-optimization)
- SCSS and PostCSS

## Image Optimization

Static uses [eleventy-img](https://www.11ty.dev/docs/plugins/image/) and a nunjucks shortcode name `picture` to generate responsive images.

**Note:** The images will be all stored in the `img` folder in the root directory so name relative paths accordingly, configuration can also be changed in `.eleventy.js`

The shortcude is structured like this:

```njk
{% picture src alt className %}
```

- **src**: The path to the image
- **alt**: Alt text for the element (Note: the build will fail if no alt is added)
- **className**: Classes that should be added to the picture element by default all elements will recieve the class `responsive_image`

### Example

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
