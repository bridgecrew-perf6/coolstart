const linkResolver = function (doc) {
	// Pretty URLs for known types
	if (doc.link_type === 'Web') return doc.url;
	// Fallback for other types, in case new custom types get created
	return `/${doc.uid}/`;
};

const handleLinkResolver = (
	link,
	content,
	classNames = '',
	target = '_self'
) => {
	const resolvedPath = linkResolver(link);
	return `<a class="prismic_link ${classNames}" href="${resolvedPath}" target="${target}">${content}</a>`;
};

module.exports = { handleLinkResolver, linkResolver };
