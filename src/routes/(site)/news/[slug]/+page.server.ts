import type { NewsPost } from '#lib/content.ts';
import { getEntries, getEntry, getLayoutOptions } from '#lib/server/content.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getEntries('news').map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const post = getEntry<NewsPost>('news', params.slug);
	return { post, ...getLayoutOptions(post) };
};
