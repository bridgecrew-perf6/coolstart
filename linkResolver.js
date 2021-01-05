const linkResolver = function (doc) {
  // Pretty URLs for known types
  if (doc.link_type === 'Web') return doc.url;
  if (doc.type === 'post') return '/posts/' + doc.uid;
  if (doc.type === 'page') return '/' + doc.uid;
  // Fallback for other types, in case new custom types get created
  return '/doc/' + doc.id;
};

module.exports = linkResolver;
