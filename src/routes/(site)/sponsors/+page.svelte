<script lang="ts">
	import PageHeader from '#lib/components/organisms/PageHeader.svelte';
	import SectionIntro from '#lib/components/organisms/SectionIntro.svelte';
	import SponsorsSection from '#lib/components/organisms/SponsorsSection.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

<PageHeader title={page.title} image={page.background_image} />
<SectionIntro lead={page.intro} html={page.html} />
<SponsorsSection tiers={data.sponsorTiers} />
