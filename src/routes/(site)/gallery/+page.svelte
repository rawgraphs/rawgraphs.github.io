<script lang="ts">
	import Section from '#lib/components/atoms/Section.svelte';
	import Banner from '#lib/components/molecules/Banner.svelte';
	import GalleryGrid from '#lib/components/organisms/GalleryGrid.svelte';
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
<SectionIntro lead={page.intro} html={page.html} />
<GalleryGrid projects={data.projects} />

{#if page.submit}
	<Section tone="muted" class="py-md">
		<Banner
			text={page.submit.text}
			button={{ label: page.submit.button_label, href: page.submit.button_url }}
		/>
	</Section>
{/if}
