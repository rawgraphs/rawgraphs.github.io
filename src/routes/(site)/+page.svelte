<script lang="ts">
	import Prose from '#lib/components/atoms/Prose.svelte';
	import Section from '#lib/components/atoms/Section.svelte';
	import ActionCallsBar from '#lib/components/organisms/ActionCallsBar.svelte';
	import FeaturesSection from '#lib/components/organisms/FeaturesSection.svelte';
	import HomeHero from '#lib/components/organisms/HomeHero.svelte';
	import SponsorsSection from '#lib/components/organisms/SponsorsSection.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);
</script>

<svelte:head>
	<title>RAWGraphs</title>
	<meta name="description" content={page.subtitle} />
</svelte:head>

<HomeHero
	title={page.title}
	primary={{ label: page.cta_label, href: page.cta_url }}
	secondary={{ label: page.repo_label, href: page.repo_url }}
	video={page.video}
	backgroundImage={page.background_image}
/>

{#if data.heroRibbon}
	<ActionCallsBar label={data.heroRibbon.title} links={data.heroRibbon.links} />
{/if}

{#if page.features?.length}
	<FeaturesSection title={data.titles.features} features={page.features} />
{/if}

<SponsorsSection title={data.titles.sponsors} tiers={data.sponsorTiers} />

{#if page.html}
	<Section class="py-md">
		<Prose html={page.html} class="max-w-text" />
	</Section>
{/if}
