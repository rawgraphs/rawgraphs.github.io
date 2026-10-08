import type { CmsConfig } from '@sveltia/cms';

export const config: CmsConfig = {
	// The configuration lives here, so no `config.yml` is fetched at runtime.
	load_config_file: false,
	backend: {
		name: 'github',
		repo: 'rawgraphs/rawgraphs.github.io',
		branch: 'develop'
	},
	media_folder: 'static/uploads',
	public_folder: '/uploads',
	collections: [
		{
			name: 'blog',
			label: 'Blog',
			label_singular: 'Post',
			folder: 'content/blog',
			create: true,
			slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
			fields: [
				{ name: 'title', label: 'Title', widget: 'string' },
				{ name: 'date', label: 'Date', widget: 'datetime' },
				{ name: 'body', label: 'Body', widget: 'markdown' }
			]
		}
	]
};
