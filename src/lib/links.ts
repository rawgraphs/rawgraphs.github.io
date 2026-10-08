/** Whether an address leaves the site: such links open in a new tab. */
export const isExternal = (href?: string | null) => /^(https?:)?\/\//.test(href ?? '');

/** Attributes for a link that may be external. */
export const linkAttributes = (href?: string | null) =>
	isExternal(href) ? { target: '_blank', rel: 'noopener' } : {};

/** A web address without protocol and trailing slash, to show it as the text of a link. */
export const displayUrl = (href: string) => href.replace(/^https?:\/\//, '').replace(/\/$/, '');
