import type { CmsConfig } from '@sveltia/cms';

/**
 * Sponsor types, in the order they are shown on the site. The labels are the section titles,
 * and `columns` is the number of logos per row on large screens.
 * The CMS sorts the groups of its entry list by the stored value, hence the numbered values.
 */
export const sponsorTiers = [
	{ key: 'platinum', label: 'Platinum sponsors', value: '1. Platinum', columns: 4 },
	{ key: 'gold', label: 'Gold sponsors', value: '2. Gold', columns: 5 },
	{ key: 'silver', label: 'Silver sponsors', value: '3. Silver', columns: 6 },
	{ key: 'contributors', label: 'Contributors', value: '4. Contributors', columns: 6 }
];

/**
 * Tutorial topics, in the order they are shown on the site. The labels are the section titles.
 * As for the sponsor types, the values are numbered to sort the groups of the CMS entry list.
 */
export const tutorialTopics = [
	{ key: 'getting-started', label: 'Getting started', value: '1. Getting started' },
	{ key: 'data', label: 'Data', value: '2. Data' },
	{ key: 'mapping', label: 'Mapping', value: '3. Mapping' },
	{ key: 'customize', label: 'Customize', value: '4. Customize' },
	{ key: 'export', label: 'Export', value: '5. Export' },
	{
		key: 'charts-and-templates',
		label: 'Charts and templates',
		value: '6. Charts and templates',
		// Many short tutorials: listed with small cards on two columns.
		compact: true
	}
];

const sponsorTierOptions = sponsorTiers.map(({ label, value }) => ({ label, value }));

/** Optional image shown behind the title of a page. */
const backgroundImageField = {
	name: 'background_image',
	label: 'Background Image',
	widget: 'image',
	required: false
} as const;

/** Lets a page choose the ribbon shown right before the footer. */
const ribbonField = {
	name: 'ribbon',
	label: 'Ribbon',
	hint: 'Bar of links shown at the bottom of the page, right before the footer. In the home page, right after the opening.',
	widget: 'relation',
	collection: 'ribbons',
	value_field: '{{slug}}',
	display_fields: ['title'],
	search_fields: ['title'],
	required: false
} as const;

export const config: CmsConfig = {
	// The configuration lives here, so no `config.yml` is fetched at runtime.
	load_config_file: false,
	backend: {
		name: 'github',
		repo: 'rawgraphs/rawgraphs.github.io',
		branch: 'svelte-website'
	},
	media_folder: 'static/uploads',
	public_folder: '/uploads',
	collections: [
		{
			// Unique pages: each one has its own route in `src/routes/(site)` and its own fields.
			name: 'pages',
			label: 'Pages',
			files: [
				{
					name: 'home',
					label: 'Home',
					file: 'content/pages/home.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'subtitle', label: 'Subtitle', widget: 'text' },
						{ name: 'cta_label', label: 'Button label', widget: 'string' },
						{ name: 'cta_url', label: 'Button URL', widget: 'string' },
						{ name: 'repo_label', label: 'Button label', widget: 'string' },
						{ name: 'repo_url', label: 'Button URL', widget: 'string' },
						{
							name: 'video',
							label: 'Intro video',
							widget: 'file',
							accept: 'video/*',
							required: false
						},
						{
							// The label is also the title of the section on the site.
							name: 'features',
							label: 'Main Features',
							label_singular: 'Feature',
							widget: 'list',
							fields: [
								{ name: 'image', label: 'Image', widget: 'image' },
								{ name: 'title', label: 'Title', widget: 'string' },
								{ name: 'text', label: 'Text', widget: 'text' }
							]
						},
						{
							// The label is also the title of the section on the site.
							name: 'sponsor_tiers',
							label: 'Sponsors',
							hint: 'Sponsor types shown in the home page.',
							widget: 'select',
							multiple: true,
							options: sponsorTierOptions,
							required: false
						},
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						backgroundImageField,
						ribbonField
					]
				},
				{
					name: 'about',
					label: 'About',
					file: 'content/pages/about.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'intro', label: 'Intro', widget: 'text', required: false },
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						{
							name: 'team',
							label: 'Behind RAWGraphs',
							label_singular: 'Member',
							widget: 'list',
							required: false,
							fields: [
								{ name: 'title', label: 'Title', widget: 'string' },
								{ name: 'description', label: 'Description', widget: 'markdown' },
								{ name: 'url', label: 'URL', widget: 'string', required: false },
								{ name: 'image', label: 'Image', widget: 'image', required: false }
							]
						},
						{
							// The label is also the title of the section on the site.
							name: 'main_contributors',
							label: 'Main Contributors',
							label_singular: 'Contributor',
							widget: 'list',
							required: false,
							fields: [
								{ name: 'name', label: 'Name', widget: 'string' },
								{ name: 'affiliation', label: 'Affiliation', widget: 'string', required: false },
								{ name: 'url', label: 'URL', widget: 'string', required: false }
							]
						},
						{
							// The label is also the title of the section on the site.
							name: 'contacts',
							label: 'Contacts',
							label_singular: 'Contact',
							widget: 'list',
							required: false,
							fields: [{ name: 'text', label: 'Text', widget: 'markdown' }]
						},
						{
							// The label is also the title of the section on the site.
							name: 'cite',
							label: 'How to cite RAWGraphs',
							widget: 'object',
							required: false,
							fields: [
								{ name: 'text', label: 'Text', widget: 'markdown', required: false },
								{ name: 'reference', label: 'Reference', widget: 'text', required: false }
							]
						},
						backgroundImageField,
						ribbonField
					]
				},
				{
					name: 'support-us',
					label: 'Support us',
					file: 'content/pages/support-us.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'intro', label: 'Intro', widget: 'text', required: false },
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						{
							name: 'blocks',
							label: 'Blocks',
							label_singular: 'Block',
							widget: 'list',
							required: false,
							fields: [
								{ name: 'title', label: 'Title', widget: 'string' },
								{ name: 'text', label: 'Text', widget: 'markdown' },
								{ name: 'button_label', label: 'Button label', widget: 'string', required: false },
								{ name: 'button_url', label: 'Button URL', widget: 'string', required: false }
							]
						},
						backgroundImageField,
						ribbonField
					]
				},
				{
					name: 'documentation',
					label: 'Documentation',
					file: 'content/pages/documentation.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'intro', label: 'Intro', widget: 'text', required: false },
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						{
							name: 'blocks',
							label: 'Blocks',
							label_singular: 'Block',
							widget: 'list',
							required: false,
							fields: [
								{ name: 'title', label: 'Title', widget: 'string' },
								{ name: 'text', label: 'Text', widget: 'markdown' },
								{
									name: 'buttons',
									label: 'Buttons',
									label_singular: 'Button',
									widget: 'list',
									required: false,
									fields: [
										{ name: 'label', label: 'Label', widget: 'string' },
										{ name: 'url', label: 'URL', widget: 'string' }
									]
								}
							]
						},
						backgroundImageField,
						ribbonField
					]
				},
				{
					// The page listing the entries of the "Custom charts" collection.
					name: 'custom-charts',
					label: 'Custom charts',
					file: 'content/pages/custom-charts.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'intro', label: 'Intro', widget: 'text', required: false },
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						{ name: 'charts_title', label: 'Charts title', widget: 'string' },
						{ name: 'resources_title', label: 'Resources title', widget: 'string' },
						{
							name: 'resources',
							label: 'Resources',
							label_singular: 'Resource',
							widget: 'list',
							required: false,
							fields: [
								{ name: 'label', label: 'Label', widget: 'string' },
								{ name: 'url', label: 'URL', widget: 'string' }
							]
						},
						backgroundImageField,
						ribbonField
					]
				},
				{
					name: 'faq',
					label: 'FAQs',
					file: 'content/pages/faq.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'intro', label: 'Intro', widget: 'text', required: false },
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						{
							name: 'faqs',
							label: 'FAQs',
							label_singular: 'FAQ',
							widget: 'list',
							required: false,
							fields: [
								{ name: 'question', label: 'Question', widget: 'string' },
								{ name: 'answer', label: 'Answer', widget: 'markdown' }
							]
						},
						backgroundImageField,
						ribbonField
					]
				},
				{
					// The page listing the entries of the "Gallery" collection.
					name: 'gallery',
					label: 'Gallery',
					file: 'content/pages/gallery.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'intro', label: 'Intro', widget: 'text', required: false },
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						{
							name: 'submit',
							label: 'Submission banner',
							hint: 'Shown below the projects.',
							widget: 'object',
							required: false,
							fields: [
								{ name: 'text', label: 'Text', widget: 'text' },
								{ name: 'button_label', label: 'Button label', widget: 'string' },
								{ name: 'button_url', label: 'Button URL', widget: 'string' }
							]
						},
						backgroundImageField,
						ribbonField
					]
				},
				{
					// The page listing the entries of the "Courses" collection.
					name: 'courses',
					label: 'Courses',
					file: 'content/pages/courses.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'intro', label: 'Intro', widget: 'text', required: false },
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						{ name: 'upcoming_title', label: 'Upcoming courses title', widget: 'string' },
						{
							name: 'upcoming_empty',
							label: 'Text without upcoming courses',
							widget: 'markdown',
							required: false
						},
						{ name: 'past_title', label: 'Past courses title', widget: 'string' },
						backgroundImageField,
						ribbonField
					]
				},
				{
					// The page listing the entries of the "Learning" collection.
					name: 'learning',
					label: 'Learning',
					file: 'content/pages/learning.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'intro', label: 'Intro', widget: 'text', required: false },
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						{
							name: 'tutorial_note',
							label: 'Tutorial note',
							hint: 'Shown at the end of every tutorial.',
							widget: 'markdown',
							required: false
						},
						{
							name: 'resources_label',
							label: 'Resources button label',
							hint: 'Label of the button of the tutorials with a "Resources URL".',
							widget: 'string'
						},
						backgroundImageField,
						ribbonField
					]
				},
				{
					// The page listing the entries of the "Sponsors" collection.
					name: 'sponsors',
					label: 'Sponsors',
					file: 'content/pages/sponsors.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'intro', label: 'Intro', widget: 'text', required: false },
						{ name: 'body', label: 'Body', widget: 'markdown', required: false },
						{
							name: 'sponsor_tiers',
							label: 'Sponsor types',
							hint: 'Sponsor types shown in this page.',
							widget: 'select',
							multiple: true,
							options: sponsorTierOptions,
							required: false
						},
						backgroundImageField,
						ribbonField
					]
				},
				{
					// The page listing the entries of the "News" collection.
					name: 'news',
					label: 'News',
					file: 'content/pages/news.md',
					fields: [
						{ name: 'title', label: 'Title', widget: 'string' },
						{ name: 'body', label: 'Intro', widget: 'markdown', required: false },
						backgroundImageField,
						ribbonField
					]
				}
			]
		},
		{
			name: 'news',
			label: 'News',
			label_singular: 'Post',
			folder: 'content/news',
			create: true,
			slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
			fields: [
				{ name: 'title', label: 'Title', widget: 'string' },
				{ name: 'date', label: 'Date', widget: 'datetime' },
				{ name: 'excerpt', label: 'Excerpt', widget: 'text', required: false },
				{ name: 'cover', label: 'Cover image', widget: 'image', required: false },
				{ name: 'body', label: 'Body', widget: 'markdown' },
				ribbonField
			]
		},
		{
			name: 'gallery',
			label: 'Gallery',
			label_singular: 'Project',
			folder: 'content/gallery',
			create: true,
			// Projects are sorted by dragging them in the entry list.
			reorder: true,
			fields: [
				{ name: 'title', label: 'Title', widget: 'string' },
				{ name: 'image', label: 'Image', widget: 'image' },
				{ name: 'body', label: 'Description', widget: 'markdown', required: false },
				{ name: 'author', label: 'Author', widget: 'string' },
				{ name: 'author_url', label: 'Author URL', widget: 'string', required: false },
				{
					name: 'charts',
					label: 'Charts used',
					label_singular: 'Chart',
					widget: 'list',
					required: false,
					field: { name: 'chart', label: 'Chart', widget: 'string' }
				},
				{ name: 'url', label: 'Project URL', widget: 'string', required: false },
				ribbonField
			]
		},
		{
			name: 'learning',
			label: 'Learning',
			label_singular: 'Tutorial',
			folder: 'content/learning',
			create: true,
			// As for the sponsors: the entry list is grouped by topic, and tutorials are sorted by
			// dragging them within their topic.
			view_groups: {
				groups: [{ name: 'topic', label: 'Topic', field: 'topic' }],
				default: 'topic'
			},
			view_filters: tutorialTopics.map(({ label, value }) => ({
				label,
				field: 'topic',
				pattern: value
			})),
			reorder: { group: 'topic' },
			fields: [
				{ name: 'title', label: 'Title', widget: 'string' },
				{
					name: 'topic',
					label: 'Topic',
					widget: 'select',
					options: tutorialTopics.map(({ label, value }) => ({ label, value }))
				},
				{ name: 'updated', label: 'Latest update', widget: 'datetime' },
				{ name: 'cover', label: 'Thumbnail', widget: 'image', required: false },
				{ name: 'intro', label: 'Intro', widget: 'text', required: false },
				{ name: 'body', label: 'Body', widget: 'markdown', required: false },
				{
					name: 'video',
					label: 'Video',
					hint: 'Address of a YouTube video, e.g. https://www.youtube.com/watch?v=…',
					widget: 'string',
					required: false
				},
				{
					name: 'resources_url',
					label: 'Resources URL',
					hint: 'File offered by the "Download the resources" button.',
					widget: 'string',
					required: false
				},
				ribbonField
			]
		},
		{
			// Plain text pages, served at `/<slug>` by a single route.
			name: 'text-pages',
			label: 'Text pages',
			label_singular: 'Text page',
			folder: 'content/text-pages',
			create: true,
			fields: [
				{ name: 'title', label: 'Title', widget: 'string' },
				{ name: 'body', label: 'Body', widget: 'markdown' },
				backgroundImageField,
				ribbonField
			]
		},
		{
			name: 'sponsors',
			label: 'Sponsors',
			label_singular: 'Sponsor',
			folder: 'content/sponsors',
			create: true,
			// The entry list is grouped by type, and entries are sorted by dragging them within
			// their type: the position is saved in an `order` field added by the CMS.
			view_groups: { groups: [{ name: 'type', label: 'Type', field: 'tier' }], default: 'type' },
			view_filters: sponsorTiers.map(({ label, value }) => ({
				label,
				field: 'tier',
				pattern: value
			})),
			reorder: { group: 'type' },
			fields: [
				{
					name: 'image',
					label: 'Image',
					hint: 'Optional for Contributors only: they are listed by name.',
					widget: 'image',
					required: false
				},
				{ name: 'title', label: 'Title', widget: 'string' },
				{
					name: 'url',
					label: 'URL',
					hint: 'Optional for Contributors only.',
					widget: 'string',
					required: false
				},
				{ name: 'tier', label: 'Type', widget: 'select', options: sponsorTierOptions }
			]
		},
		{
			name: 'custom-charts',
			label: 'Custom charts',
			label_singular: 'Custom chart',
			folder: 'content/custom-charts',
			create: true,
			fields: [
				{ name: 'title', label: 'Title', widget: 'string' },
				{ name: 'updated', label: 'Latest update', widget: 'datetime' },
				{ name: 'icon', label: 'Icon', widget: 'image' },
				{ name: 'image', label: 'Image', widget: 'image' },
				{ name: 'body', label: 'Description', widget: 'markdown' },
				{ name: 'author', label: 'Author', widget: 'string' },
				{ name: 'author_url', label: 'Author URL', widget: 'string', required: false },
				{ name: 'data_sample_url', label: 'Data sample URL', widget: 'string', required: false },
				{ name: 'download_url', label: 'Download URL', widget: 'string', required: false },
				{ name: 'repository_url', label: 'Repository URL', widget: 'string', required: false },
				ribbonField
			]
		},
		{
			// Courses have no page of their own: they are listed in the "Courses" page, split
			// between upcoming and past ones by their date.
			name: 'courses',
			label: 'Courses',
			label_singular: 'Course',
			folder: 'content/courses',
			create: true,
			slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
			sortable_fields: {
				fields: ['date', 'title'],
				default: { field: 'date', direction: 'descending' }
			},
			fields: [
				{ name: 'title', label: 'Title', widget: 'string' },
				{ name: 'date', label: 'Date', widget: 'datetime' },
				{ name: 'duration', label: 'Duration (hours)', widget: 'number', value_type: 'float' }
			]
		},
		{
			// Bands of links that pages can show before the footer, through their "Ribbon" field.
			name: 'ribbons',
			label: 'Ribbons',
			label_singular: 'Ribbon',
			folder: 'content/ribbons',
			create: true,
			fields: [
				{ name: 'title', label: 'Name', widget: 'string', hint: 'Not shown on the site.' },
				{
					name: 'links',
					label: 'Links',
					label_singular: 'Link',
					widget: 'list',
					fields: [
						{ name: 'label', label: 'Label', widget: 'string' },
						{ name: 'url', label: 'URL', widget: 'string' }
					]
				}
			]
		},
		{
			// Content shared by every page.
			name: 'site',
			label: 'Site',
			files: [
				{
					name: 'footer',
					label: 'Footer',
					file: 'content/site/footer.md',
					fields: [
						{ name: 'body', label: 'Credits', widget: 'markdown' },
						{
							name: 'links',
							label: 'Links',
							label_singular: 'Link',
							widget: 'list',
							required: false,
							fields: [
								{ name: 'label', label: 'Label', widget: 'string' },
								{ name: 'url', label: 'URL', widget: 'string' }
							]
						},
						{
							name: 'contacts',
							label: 'Contacts',
							label_singular: 'Contact',
							widget: 'list',
							required: false,
							fields: [
								{
									name: 'icon',
									label: 'Icon',
									widget: 'select',
									options: ['mail', 'github', 'twitter', 'newsletter'],
									required: false
								},
								{ name: 'label', label: 'Label', widget: 'string' },
								{ name: 'url', label: 'URL', widget: 'string' }
							]
						}
					]
				}
			]
		}
	]
};
