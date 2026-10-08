import type { SupportUsPage } from '#lib/content.ts';
import { getEntry, getLayoutOptions, renderMarkdown } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<SupportUsPage>('pages', 'support-us');

	return {
		page,
		...getLayoutOptions(page),
		boxes: (page.blocks ?? []).map(({ title, text, button_label, button_url }) => ({
			title,
			html: renderMarkdown(text),
			buttons: button_label && button_url ? [{ label: button_label, href: button_url }] : []
		}))
	};
}
