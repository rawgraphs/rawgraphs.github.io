import type { ListPage, NewsPost } from '#lib/content.ts';
import { byDateDesc, getEntries, getEntry, getLayoutOptions } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<ListPage>('pages', 'news');
	return {
		page,
		...getLayoutOptions(page),
		// The list only needs the fields of the posts, not their text.
		posts: getEntries<NewsPost>('news')
			.sort(byDateDesc)
			.map(({ slug, title, date, excerpt, cover }) => ({ slug, title, date, excerpt, cover }))
	};
}
