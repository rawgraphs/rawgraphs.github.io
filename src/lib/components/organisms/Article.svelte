<!--
	@component
	Long-form entry: a kicker linking back to its list, a line of details, title, optional intro,
	then the content. With the `aside` snippet the article sits next to a sidebar; without it, in
	a narrow centered column.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Link from '#lib/components/atoms/Link.svelte';
	import Section from '#lib/components/atoms/Section.svelte';

	type Props = {
		kicker: { label: string; href: string };
		meta?: string;
		title: string;
		intro?: string;
		aside?: Snippet;
		children: Snippet;
	};

	let { kicker, meta, title, intro, aside, children }: Props = $props();
</script>

<Section
	class="flex flex-col gap-x-2xl gap-y-md py-lg lg:flex-row lg:items-start {aside
		? ''
		: 'lg:justify-center'}"
>
	{#if aside}
		<aside class="order-last w-full shrink-0 lg:order-first lg:w-sidebar">
			{@render aside()}
		</aside>
	{/if}
	<article class="flex w-full min-w-0 flex-col gap-sm {aside ? 'flex-1' : 'max-w-[640px]'}">
		<p class="flex flex-wrap items-baseline gap-x-sm type-body text-muted">
			<Link href={kicker.href} class="type-button tracking-wide uppercase">{kicker.label}</Link>
			{#if meta}
				<span>{meta}</span>
			{/if}
		</p>
		<h1 class="type-h2 text-heading">{title}</h1>
		{#if intro}
			<p class="type-lead whitespace-pre-line text-primary">{intro}</p>
		{/if}
		{@render children()}
	</article>
</Section>
