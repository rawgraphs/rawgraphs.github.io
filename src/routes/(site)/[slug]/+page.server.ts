import type { TextPage } from '#lib/content.ts';
import { getEntries, getEntry, getLayoutOptions } from '#lib/server/content.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getEntries('text-pages').map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const page = getEntry<TextPage>('text-pages', params.slug);
	return { page, ...getLayoutOptions(page) };
};
