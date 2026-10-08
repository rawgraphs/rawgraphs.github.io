<script lang="ts">
	import { resolve } from '$app/paths';
	import Section from '#lib/components/atoms/Section.svelte';
	import ContentCard from '#lib/components/molecules/ContentCard.svelte';
	import EmptyState from '#lib/components/molecules/EmptyState.svelte';
	import SectionHeading from '#lib/components/molecules/SectionHeading.svelte';
	import PageHeader from '#lib/components/organisms/PageHeader.svelte';
	import SectionIntro from '#lib/components/organisms/SectionIntro.svelte';
	import { formatDate } from '#lib/content.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

<PageHeader title={page.title} image={page.background_image} />
<SectionIntro lead={page.intro} html={page.html} tone="surface" />

<Section tone="surface" class="grid gap-sm pt-sm pb-2xl lg:grid-cols-[2fr_1fr]">
	<section class="flex flex-col gap-xs">
		<SectionHeading title={page.charts_title} />
		{#each data.charts as chart (chart.slug)}
			<ContentCard
				href={resolve(`custom-charts/${chart.slug}`)}
				title={chart.title}
				image={chart.icon}
				meta="Last update: {formatDate(chart.updated)}"
			/>
		{:else}
			<EmptyState>No custom charts yet.</EmptyState>
		{/each}
	</section>

	{#if page.resources?.length}
		<section class="flex flex-col gap-xs">
			<SectionHeading title={page.resources_title} />
			{#each page.resources as resource (resource.url)}
				<ContentCard href={resource.url} title={resource.label} size="sm" thumbnail={false} />
			{/each}
		</section>
	{/if}
</Section>
