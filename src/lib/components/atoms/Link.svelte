<!--
	@component
	Text link, in the variants of the DLS:
	- `text`: inline link in the brand color
	- `nav` and `dropdown`: items of the main menu
	- `topic`: items of an in-page navigation
	- `cta`: large serif link, for the brand background
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { linkAttributes } from '#lib/links.ts';

	type Props = {
		href: string;
		variant?: 'text' | 'nav' | 'dropdown' | 'topic' | 'cta';
		/** Marks the link as the current page. */
		current?: boolean;
		class?: string;
		children: Snippet;
	} & Omit<HTMLAnchorAttributes, 'class' | 'href'>;

	let {
		href,
		variant = 'text',
		current = false,
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const current_ = 'aria-[current=page]:text-brand';
	const variants = {
		text: 'text-brand hover:text-heading',
		nav: `p-sm type-nav text-nav hover:text-brand ${current_}`,
		dropdown: `block p-sm type-nav whitespace-nowrap text-nav hover:text-brand data-highlighted:text-brand ${current_}`,
		topic: `type-nav text-heading hover:text-brand ${current_}`,
		cta: 'border-b border-strong type-cta text-on-brand'
	};
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- resolved by the caller, or set in the CMS -->
<a
	{href}
	class="transition-colors {variants[variant]} {className}"
	aria-current={current ? 'page' : undefined}
	{...linkAttributes(href)}
	{...rest}
>
	{@render children()}
</a>
