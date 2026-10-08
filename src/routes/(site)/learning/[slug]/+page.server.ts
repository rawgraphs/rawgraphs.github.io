import type { LearningPage, Tutorial } from '#lib/content.ts';
import { getEntries, getEntry, getLayoutOptions, renderMarkdown } from '#lib/server/content.ts';
import { getTutorialTopics } from '#lib/server/tutorials.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getEntries('learning').map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const tutorial = getEntry<Tutorial>('learning', params.slug);
	const { resources_label, tutorial_note } = getEntry<LearningPage>('pages', 'learning');

	return {
		tutorial,
		...getLayoutOptions(tutorial),
		topics: getTutorialTopics(),
		// A YouTube address alone becomes an embedded video.
		videoHtml: renderMarkdown(tutorial.video),
		resourcesLabel: resources_label,
		noteHtml: renderMarkdown(tutorial_note)
	};
};
