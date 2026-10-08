import { fieldLabel } from '#lib/cms/labels.ts';
import type { AboutPage } from '#lib/content.ts';
import { getEntry, getLayoutOptions, renderMarkdown } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<AboutPage>('pages', 'about');

	return {
		page,
		...getLayoutOptions(page),
		// Section titles are the labels of the corresponding fields in the CMS configuration.
		titles: {
			team: fieldLabel('pages', 'about', 'team'),
			mainContributors: fieldLabel('pages', 'about', 'main_contributors'),
			contacts: fieldLabel('pages', 'about', 'contacts'),
			cite: fieldLabel('pages', 'about', 'cite')
		},
		team: (page.team ?? []).map((member) => ({
			...member,
			html: renderMarkdown(member.description)
		})),
		contacts: (page.contacts ?? []).map(({ text }) => renderMarkdown(text)),
		cite: page.cite && { html: renderMarkdown(page.cite.text), reference: page.cite.reference }
	};
}
