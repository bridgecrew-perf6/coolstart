---
layout: layouts/post.njk
pagination:
  data: posts
  size: 1
  alias: post
permalink: '/posts/{{post.uid | slug}}/index.html'
post_content:
---

{{post.data.content}}
