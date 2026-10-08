import type { GalleryProject } from '#lib/content.ts';
import { getEntries, getEntry, getLayoutOptions } from '#lib/server/content.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getEntries('gallery').map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const project = getEntry<GalleryProject>('gallery', params.slug);
	return { project, ...getLayoutOptions(project) };
};
