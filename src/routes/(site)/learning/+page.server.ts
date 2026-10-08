import type { LearningPage } from '#lib/content.ts';
import { getEntry, getLayoutOptions } from '#lib/server/content.ts';
import { getTutorialTopics } from '#lib/server/tutorials.ts';

export function load() {
	const page = getEntry<LearningPage>('pages', 'learning');
	return { page, ...getLayoutOptions(page), topics: getTutorialTopics() };
}
