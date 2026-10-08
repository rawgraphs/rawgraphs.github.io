<script lang="ts">
	import NewsList from '#lib/components/organisms/NewsList.svelte';
	import PageHeader from '#lib/components/organisms/PageHeader.svelte';
	import SectionIntro from '#lib/components/organisms/SectionIntro.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

<PageHeader title={page.title} image={page.background_image} />
<SectionIntro html={page.html} htmlAsLead tone="surface" />
<NewsList posts={data.posts} tone="surface" />
