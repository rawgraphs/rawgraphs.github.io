import type { SupportUsPage } from '#lib/content.ts';
import { getEntry, getLayoutOptions, renderMarkdown } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<SupportUsPage>('pages', 'support-us');

	return {
		page,
		...getLayoutOptions(page),
		blocks: (page.blocks ?? []).map((block) => ({ ...block, html: renderMarkdown(block.text) }))
	};
}
