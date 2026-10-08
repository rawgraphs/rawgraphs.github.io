import type { DocumentationPage } from '#lib/content.ts';
import { getEntry, getLayoutOptions, renderMarkdown } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<DocumentationPage>('pages', 'documentation');

	return {
		page,
		...getLayoutOptions(page),
		blocks: (page.blocks ?? []).map((block) => ({ ...block, html: renderMarkdown(block.text) }))
	};
}
