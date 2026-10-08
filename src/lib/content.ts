// Shapes of the content files in `/content`. Keep them in sync with `cms/config.ts`.

/** A parsed content file: its fields, plus the file name and the rendered Markdown body. */
export type Entry<T> = T & { slug: string; html: string };

export type HomePage = {
	title: string;
	subtitle: string;
	cta_label: string;
	cta_url: string;
	repo_label: string;
	repo_url: string;
	video?: string;
	features?: { image?: string; title: string; text: string }[];
	sponsor_tiers?: string[];
	background_image?: string;
	ribbon?: string;
};

export type Sponsor = { image?: string; title: string; url?: string; tier: string; order?: number };

export type Link = { label: string; url: string };

export type Ribbon = { title: string; links: Link[] };

export type IconName = 'email' | 'github' | 'twitter' | 'newsletter';

export type Footer = { links?: Link[]; contacts?: (Link & { icon?: IconName })[] };

export type AboutPage = {
	title: string;
	intro?: string;
	/** `description` is Markdown. */
	team?: { title: string; description: string; url?: string; image?: string }[];
	main_contributors?: { name: string; affiliation?: string; url?: string }[];
	/** Markdown texts. */
	contacts?: { text: string }[];
	cite?: { text?: string; reference?: string };
	background_image?: string;
	ribbon?: string;
};

export type SupportUsPage = {
	title: string;
	intro?: string;
	/** `text` is Markdown. */
	blocks?: { title: string; text: string; button_label?: string; button_url?: string }[];
	background_image?: string;
	ribbon?: string;
};

export type SponsorsPage = {
	title: string;
	intro?: string;
	sponsor_tiers?: string[];
	background_image?: string;
	ribbon?: string;
};

/** A page listing the entries of a collection. */
export type ListPage = { title: string; background_image?: string; ribbon?: string };

export type NewsPost = {
	title: string;
	date: string;
	excerpt?: string;
	cover?: string;
	ribbon?: string;
};

export type GalleryProject = {
	title: string;
	image: string;
	author: string;
	author_url?: string;
	charts?: string[];
	url?: string;
	order?: number;
	ribbon?: string;
};

export type GalleryPage = ListPage & {
	intro?: string;
	submit?: { text: string; button_label: string; button_url: string };
};

export type Tutorial = {
	title: string;
	topic: string;
	updated: string;
	cover?: string;
	intro?: string;
	video?: string;
	resources_url?: string;
	order?: number;
	ribbon?: string;
};

export type DocumentationPage = {
	title: string;
	intro?: string;
	/** `text` is Markdown. */
	blocks?: { title: string; text: string; buttons?: Link[] }[];
	background_image?: string;
	ribbon?: string;
};

export type CustomChart = {
	title: string;
	updated: string;
	icon: string;
	image: string;
	author: string;
	author_url?: string;
	data_sample_url?: string;
	download_url?: string;
	repository_url?: string;
	ribbon?: string;
};

export type CustomChartsPage = ListPage & {
	intro?: string;
	charts_title: string;
	resources_title: string;
	resources?: Link[];
};

export type FaqPage = {
	title: string;
	intro?: string;
	/** `answer` is Markdown. */
	faqs?: { question: string; answer: string }[];
	background_image?: string;
	ribbon?: string;
};

export type Course = { title: string; date: string; duration: number };

export type CoursesPage = ListPage & {
	intro?: string;
	upcoming_title: string;
	/** Markdown. */
	upcoming_empty?: string;
	past_title: string;
};

export type LearningPage = ListPage & {
	intro?: string;
	/** Markdown. */
	tutorial_note?: string;
	resources_label: string;
};

export type TextPage = { title: string; background_image?: string; ribbon?: string };

export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	});
}
