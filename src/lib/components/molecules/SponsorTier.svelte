<!--
	@component
	Title of a sponsor type with its sponsors: desaturated logos on a grid of square tiles that takes the
	whole width, or a run of names for those without a logo.
-->
<script lang="ts">
	import Link from '#lib/components/atoms/Link.svelte';
	import { linkAttributes } from '#lib/links.ts';

	type Props = {
		title: string;
		sponsors: { slug: string; title: string; image?: string; url?: string }[];
		/** Logos per row on large screens. */
		columns?: number;
		/** Set to `false` to hide the rule above the title, e.g. right below a section heading. */
		rule?: boolean;
	};

	let { title, sponsors, columns = 6, rule = true }: Props = $props();

	let logos = $derived(sponsors.filter(({ image }) => image));
	let names = $derived(sponsors.filter(({ image }) => !image));
</script>

<div class="flex w-full flex-col items-start gap-sm {rule ? 'border-t border-default pt-xs' : ''}">
	<h3 class="type-h4 text-primary">{title}</h3>
	{#if logos.length}
		<ul
			class="grid w-full grid-cols-2 gap-[16px] sm:grid-cols-3 lg:grid-cols-[repeat(var(--columns),minmax(0,1fr))]"
			style:--columns={columns}
		>
			{#each logos as sponsor (sponsor.slug)}
				<li>
					<!-- Multiply blends the background of a logo file with the section, also on hover. It is
					     set on the same element as the filters, which would otherwise isolate it. -->
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- set in the CMS -->
					<svelte:element
						this={sponsor.url ? 'a' : 'span'}
						class="flex aspect-square items-center justify-center overflow-clip opacity-60 mix-blend-multiply grayscale transition hover:opacity-100 hover:grayscale-0"
						href={sponsor.url}
						{...linkAttributes(sponsor.url)}
					>
						<!-- Logo files are squares with wide margins, like the tile: the size sets how large the logo looks. -->
						<img
							class="size-[81%] object-contain"
							src={sponsor.image}
							alt={sponsor.title}
							loading="lazy"
						/>
					</svelte:element>
				</li>
			{/each}
		</ul>
	{/if}
	{#if names.length}
		<p class="type-body text-primary">
			{#each names as sponsor, index (sponsor.slug)}
				{#if index}<span>&nbsp;· </span>{/if}
				{#if sponsor.url}
					<Link href={sponsor.url}>{sponsor.title}</Link>
				{:else}
					{sponsor.title}
				{/if}
			{/each}
		</p>
	{/if}
</div>
