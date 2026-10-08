<script lang="ts">
	import { resolve } from '$app/paths';
	import EntryDetail from '#lib/components/organisms/EntryDetail.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let chart = $derived(data.chart);
</script>

<svelte:head>
	<title>{chart.title} · RAWGraphs</title>
</svelte:head>

<EntryDetail
	back={{ label: 'Back to custom charts', href: resolve('custom-charts') }}
	image={chart.image}
	icon={chart.icon}
	title={chart.title}
	html={chart.html}
	facts={[
		{ label: 'Author', text: chart.author, href: chart.author_url },
		...(chart.data_sample_url
			? [{ label: 'Data sample', text: 'Link', href: chart.data_sample_url }]
			: [])
	]}
	buttons={[
		...(chart.download_url ? [{ label: 'Download', href: chart.download_url }] : []),
		...(chart.repository_url
			? [{ label: 'Repository', href: chart.repository_url, variant: 'light' as const }]
			: [])
	]}
/>
