<!--
	@component
	Full-width band of a page, with the background colors of the DLS and the site container inside.
	`class` applies to the container, to lay out the content of the section.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		tone?: 'page' | 'surface' | 'muted' | 'inverse' | 'brand';
		as?: 'section' | 'div' | 'header' | 'footer' | 'nav' | 'aside';
		class?: string;
		children: Snippet;
	} & Omit<HTMLAttributes<HTMLElement>, 'class'>;

	let { tone = 'page', as = 'section', class: className = '', children, ...rest }: Props = $props();

	const tones = {
		page: 'bg-page',
		surface: 'bg-surface',
		muted: 'bg-muted',
		// A background image set by the caller covers the band.
		inverse: 'bg-inverse bg-cover bg-center text-inverse',
		brand: 'bg-brand'
	};
</script>

<svelte:element this={as} class="px-gutter {tones[tone]}" {...rest}>
	<div class="mx-auto w-full max-w-site {className}">
		{@render children()}
	</div>
</svelte:element>
