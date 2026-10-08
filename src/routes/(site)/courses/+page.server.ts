import type { Course, CoursesPage } from '#lib/content.ts';
import { getEntries, getEntry, getLayoutOptions, renderMarkdown } from '#lib/server/content.ts';

export function load() {
	const page = getEntry<CoursesPage>('pages', 'courses');

	return {
		page,
		...getLayoutOptions(page),
		upcomingEmptyHtml: renderMarkdown(page.upcoming_empty),
		courses: getEntries<Course>('courses').map(({ slug, title, date, duration }) => ({
			slug,
			title,
			date,
			duration
		})),
		builtAt: new Date().toISOString()
	};
}
