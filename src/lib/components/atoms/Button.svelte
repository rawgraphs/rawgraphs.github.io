<!--
	@component
	Call-to-action button. Use `primary` for the main action, `secondary` next to it, `dark` on light
	bars and `light` for minor actions. It is a link when it has an `href`.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { linkAttributes } from '#lib/links.ts';

	type Props = {
		variant?: 'primary' | 'secondary' | 'dark' | 'light';
		size?: 'lg' | 'md' | 'sm';
		href?: string;
		class?: string;
		children: Snippet;
	} & Omit<HTMLAnchorAttributes & HTMLButtonAttributes, 'class' | 'href'>;

	let {
		variant = 'primary',
		size = 'lg',
		href,
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const variants = {
		primary: 'bg-button-primary text-inverse',
		secondary: 'bg-button-secondary text-inverse',
		dark: 'bg-button-dark text-inverse',
		light: 'bg-button-light text-heading'
	};
	const sizes = {
		lg: 'min-w-[200px] px-md py-sm',
		md: 'min-w-[200px] px-md py-xs',
		sm: 'px-[15px] py-[9px]'
	};
	let classes = $derived(
		`inline-flex items-center justify-center rounded-sm text-center type-button transition-opacity hover:opacity-85 ${variants[variant]} ${sizes[size]} ${className}`
	);
</script>

{#if href}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- resolved by the caller, or set in the CMS -->
	<a {href} class={classes} {...linkAttributes(href)} {...rest}>{@render children()}</a>
{:else}
	<button type="button" class={classes} {...rest}>{@render children()}</button>
{/if}
