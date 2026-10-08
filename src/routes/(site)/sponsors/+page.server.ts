import type { SponsorsPage } from '#lib/content.ts';
import { getEntry, getLayoutOptions } from '#lib/server/content.ts';
import { getSponsorTiers } from '#lib/server/sponsors.ts';

export function load() {
	const page = getEntry<SponsorsPage>('pages', 'sponsors');
	return { page, ...getLayoutOptions(page), sponsorTiers: getSponsorTiers(page) };
}
