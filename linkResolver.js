const linkResolver = function (doc) {
  // Pretty URLs for known types
  if (doc.link_type === 'Web') return doc.url;
  // IMPORTANT: Always add a trailing / after every link
  if (doc.type === 'post') return `/posts/${doc.uid}/`;
  // Fallback for other types, in case new custom types get created
  return `/${doc.uid}/`;
};

module.exports = linkResolver;
