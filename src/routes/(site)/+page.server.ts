import { fieldLabel } from '#lib/cms/labels.ts';
import type { HomePage, NewsPost } from '#lib/content.ts';
import { byDateDesc, getEntries, getEntry, getLayoutOptions } from '#lib/server/content.ts';
import { getSponsorTiers } from '#lib/server/sponsors.ts';

export function load() {
	const page = getEntry<HomePage>('pages', 'home');

	return {
		page,
		...getLayoutOptions(page),
		// Section titles are the labels of the corresponding fields in the CMS configuration.
		titles: {
			features: fieldLabel('pages', 'home', 'features'),
			sponsors: fieldLabel('pages', 'home', 'sponsor_tiers')
		},
		sponsorTiers: getSponsorTiers(page),
		news: getEntries<NewsPost>('news').sort(byDateDesc).slice(0, 3)
	};
}
