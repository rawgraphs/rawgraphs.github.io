import type { DocumentationPage } from '#lib/content.ts';
import { getEntry, getLayoutOptions, renderMarkdown } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<DocumentationPage>('pages', 'documentation');

	return {
		page,
		...getLayoutOptions(page),
		boxes: (page.blocks ?? []).map(({ title, text, buttons = [] }) => ({
			title,
			html: renderMarkdown(text),
			buttons: buttons.map(({ label, url }) => ({ label, href: url }))
		}))
	};
}
