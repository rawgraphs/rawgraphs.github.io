import { sponsorTiers } from '#lib/cms/config.ts';
import type { Sponsor } from '#lib/content.ts';
import { getEntries } from './content.ts';

/**
 * The sponsors of the types selected in a page's "sponsor_tiers" field, grouped by type.
 * Within a type they follow the order set in the CMS. Types without sponsors are left out.
 */
export function getSponsorTiers(page: { sponsor_tiers?: string[] }) {
	const sponsors = getEntries<Sponsor>('sponsors').sort(
		(a, b) => (a.order ?? Infinity) - (b.order ?? Infinity) || a.title.localeCompare(b.title)
	);

	return sponsorTiers
		.filter((tier) => page.sponsor_tiers?.includes(tier.value))
		.map((tier) => ({ ...tier, sponsors: sponsors.filter((s) => s.tier === tier.value) }))
		.filter((tier) => tier.sponsors.length);
}

export type SponsorTier = ReturnType<typeof getSponsorTiers>[number];
