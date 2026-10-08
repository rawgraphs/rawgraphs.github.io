import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { Entry, Ribbon } from '#lib/content.ts';

const files = import.meta.glob<string>('/content/**/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

/**
 * Renders Markdown, e.g. a field other than the body of the file.
 * A YouTube address alone in a paragraph becomes an embedded video.
 */
export const renderMarkdown = (markdown = '') =>
	marked
		.parse(markdown, { async: false })
		.replace(
			/<p><a href="https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)">[^<]*<\/a><\/p>/g,
			'<iframe class="aspect-video w-full" src="https://www.youtube-nocookie.com/embed/$1" title="YouTube video" allowfullscreen loading="lazy"></iframe>'
		);

function parse<T>(path: string, raw: string): Entry<T> {
	const { data, content } = matter(raw);
	// YAML dates are parsed as `Date`: keep them as strings so every field is plain data.
	for (const [key, value] of Object.entries(data)) {
		if (value instanceof Date) data[key] = value.toISOString();
	}
	return {
		...data,
		slug: path.split('/').pop()!.replace(/\.md$/, ''),
		html: renderMarkdown(content)
	} as Entry<T>;
}

/** All the entries of a collection, i.e. the Markdown files in `/content/<collection>`. */
export function getEntries<T>(collection: string): Entry<T>[] {
	const prefix = `/content/${collection}/`;
	return Object.entries(files)
		.filter(([path]) => path.startsWith(prefix))
		.map(([path, raw]) => parse<T>(path, raw));
}

/** A single entry, or a 404 if the file does not exist. */
export function getEntry<T>(collection: string, slug: string): Entry<T> {
	const path = `/content/${collection}/${slug}.md`;
	if (!(path in files)) error(404, 'Not found');
	return parse<T>(path, files[path]);
}

/**
 * What the site layout shows around a page, from the page's "Background Image" and "Ribbon"
 * fields. Spread it in the data returned by the page's `load`. A ribbon deleted from the CMS is
 * ignored.
 */
export function getLayoutOptions(page: { background_image?: string; ribbon?: string }) {
	const path = `/content/ribbons/${page.ribbon}.md`;
	return {
		backgroundImage: page.background_image,
		ribbon: path in files ? parse<Ribbon>(path, files[path]) : undefined
	};
}

export const byDateDesc = (a: { date: string }, b: { date: string }) =>
	b.date.localeCompare(a.date);
