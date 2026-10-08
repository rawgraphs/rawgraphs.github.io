import { tutorialTopics } from '#lib/cms/config.ts';
import type { Tutorial } from '#lib/content.ts';
import { getEntries } from './content.ts';

/**
 * The tutorials grouped by topic, without their text. Within a topic they follow the order set
 * in the CMS. Topics without tutorials are left out.
 */
export function getTutorialTopics() {
	const tutorials = getEntries<Tutorial>('learning')
		.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity) || a.title.localeCompare(b.title))
		.map(({ slug, title, topic, updated, cover }) => ({ slug, title, topic, updated, cover }));

	return tutorialTopics
		.map((topic) => ({ ...topic, tutorials: tutorials.filter((t) => t.topic === topic.value) }))
		.filter((topic) => topic.tutorials.length);
}
