import type { GalleryPage, GalleryProject } from '#lib/content.ts';
import { getEntries, getEntry, getLayoutOptions } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<GalleryPage>('pages', 'gallery');

	return {
		page,
		...getLayoutOptions(page),
		// Projects follow the order set in the CMS. The list only needs their image and title.
		projects: getEntries<GalleryProject>('gallery')
			.sort(
				(a, b) => (a.order ?? Infinity) - (b.order ?? Infinity) || a.title.localeCompare(b.title)
			)
			.map(({ slug, title, image }) => ({ slug, title, image }))
	};
}
