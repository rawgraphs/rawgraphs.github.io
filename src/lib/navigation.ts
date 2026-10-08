// Main menu of the site, shown by the `Navbar` organism.

export type NavLinkItem = { label: string; href: string };
export type NavGroup = { label: string; items: NavLinkItem[] };
export type NavItem = NavLinkItem | NavGroup;

export const navigation: NavItem[] = [
	{ label: 'About', href: '/about' },
	{ label: 'News', href: '/news' },
	{
		label: 'Support us',
		items: [
			{ label: 'How to support us', href: '/support-us' },
			{ label: 'Donate', href: 'https://github.com/sponsors/rawgraphs?frequency=one-time&sponsor' },
			{ label: 'Sponsors', href: '/sponsors' }
		]
	},
	{
		label: 'Learning',
		items: [
			{ label: 'Tutorials', href: '/learning' },
			{ label: 'Courses', href: '/courses' }
		]
	},
	{
		label: 'Resources',
		items: [
			{ label: 'FAQ', href: '/faq' },
			{ label: 'Gallery', href: '/gallery' },
			{ label: 'Custom charts', href: '/custom-charts' },
			{ label: 'Documentation', href: '/documentation' }
		]
	}
];

/** The button at the end of the menu. */
export const callToAction: NavLinkItem = {
	label: 'Use it now!',
	href: 'https://app.rawgraphs.io/'
};

/** Whether an address of the menu is the current page, or one of its parents. */
export const isCurrent = (href: string, pathname: string) =>
	pathname === href || pathname.startsWith(`${href}/`);
