<script lang="ts">
	import type { SponsorTier } from '#lib/server/sponsors.ts';

	let { tiers }: { tiers: SponsorTier[] } = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -- URLs set in the CMS -->
{#each tiers as tier (tier.value)}
	<h3 class="mt-8 mb-4 font-semibold">{tier.label}</h3>
	{#if tier.key === 'contributors'}
		<!-- Contributors are a run of names. -->
		<p class="text-sm leading-relaxed text-neutral-700">
			{#each tier.sponsors as sponsor, index (sponsor.slug)}
				{#if index}<span>&nbsp;· </span>{/if}
				{#if sponsor.url}
					<a class="underline" href={sponsor.url}>{sponsor.title}</a>
				{:else}
					{sponsor.title}
				{/if}
			{/each}
		</p>
	{:else}
		<ul class="flex flex-wrap items-center gap-10">
			{#each tier.sponsors as sponsor (sponsor.slug)}
				<li>
					<svelte:element
						this={sponsor.url ? 'a' : 'span'}
						class="hover:underline"
						href={sponsor.url}
					>
						{#if sponsor.image}
							<img
								class={tier.key === 'platinum' ? 'h-16' : tier.key === 'gold' ? 'h-10' : 'h-8'}
								src={sponsor.image}
								alt={sponsor.title}
							/>
						{:else}
							{sponsor.title}
						{/if}
					</svelte:element>
				</li>
			{/each}
		</ul>
	{/if}
{/each}
