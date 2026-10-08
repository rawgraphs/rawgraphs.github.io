import type { CustomChart, CustomChartsPage } from '#lib/content.ts';
import { getEntries, getEntry, getLayoutOptions } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<CustomChartsPage>('pages', 'custom-charts');

	return {
		page,
		...getLayoutOptions(page),
		// Most recently updated first. The list only needs the fields of the charts, not their text.
		charts: getEntries<CustomChart>('custom-charts')
			.sort((a, b) => b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title))
			.map(({ slug, title, updated, icon }) => ({ slug, title, updated, icon }))
	};
}
