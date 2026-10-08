<script lang="ts">
	import Prose from '#lib/components/atoms/Prose.svelte';
	import Section from '#lib/components/atoms/Section.svelte';
	import PageHeader from '#lib/components/organisms/PageHeader.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

<PageHeader title={page.title} image={page.background_image} />
<Section class="py-md">
	<Prose html={page.html} class="max-w-text" />
</Section>
