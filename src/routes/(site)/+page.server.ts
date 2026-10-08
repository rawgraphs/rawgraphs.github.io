import { fieldLabel } from '#lib/cms/labels.ts';
import type { HomePage } from '#lib/content.ts';
import { getEntry, getLayoutOptions } from '#lib/server/content.ts';
import { getSponsorTiers } from '#lib/server/sponsors.ts';

export function load() {
	const page = getEntry<HomePage>('pages', 'home');

	return {
		page,
		// In the home page the ribbon follows the hero, instead of preceding the footer as in the
		// other pages: it is not passed to the layout as `ribbon`.
		heroRibbon: getLayoutOptions(page).ribbon,
		// Section titles are the labels of the corresponding fields in the CMS configuration.
		titles: {
			features: fieldLabel('pages', 'home', 'features'),
			sponsors: fieldLabel('pages', 'home', 'sponsor_tiers')
		},
		sponsorTiers: getSponsorTiers(page)
	};
}
