import type { FaqPage } from '#lib/content.ts';
import { getEntry, getLayoutOptions, renderMarkdown } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<FaqPage>('pages', 'faq');

	return {
		page,
		...getLayoutOptions(page),
		faqs: (page.faqs ?? []).map(({ question, answer }) => ({
			question,
			html: renderMarkdown(answer)
		}))
	};
}
