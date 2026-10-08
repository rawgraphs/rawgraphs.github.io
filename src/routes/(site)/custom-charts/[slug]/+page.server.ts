import type { CustomChart } from '#lib/content.ts';
import { getEntries, getEntry, getLayoutOptions } from '#lib/server/content.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
	getEntries('custom-charts').map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const chart = getEntry<CustomChart>('custom-charts', params.slug);
	return { chart, ...getLayoutOptions(chart) };
};
