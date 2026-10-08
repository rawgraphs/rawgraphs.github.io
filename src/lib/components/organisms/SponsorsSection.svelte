<!--
	@component
	Sponsors grouped by type, with an optional title.
-->
<script lang="ts">
	import Section from '#lib/components/atoms/Section.svelte';
	import SectionHeading from '#lib/components/molecules/SectionHeading.svelte';
	import SponsorTier from '#lib/components/molecules/SponsorTier.svelte';
	import type { SponsorTier as Tier } from '#lib/server/sponsors.ts';

	type Props = { title?: string; tiers: Tier[] };

	let { title, tiers }: Props = $props();
</script>

{#if tiers.length}
	<Section tone="surface" class="flex flex-col gap-md py-md">
		{#if title}
			<SectionHeading {title} />
		{/if}
		{#each tiers as tier, index (tier.value)}
			<!-- Below the section heading, which has its own rule, the first type shows none. -->
			<SponsorTier
				title={tier.label}
				sponsors={tier.sponsors}
				columns={tier.columns}
				rule={index > 0 || !title}
			/>
		{/each}
	</Section>
{/if}
