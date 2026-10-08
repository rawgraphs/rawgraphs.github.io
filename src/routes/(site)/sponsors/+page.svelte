<script lang="ts">
	import Markdown from '#lib/components/Markdown.svelte';
	import SponsorTiers from '#lib/components/SponsorTiers.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

<h1 class="mb-4 font-serif text-4xl font-semibold">{page.title}</h1>
{#if page.intro}
	<p class="mb-8 max-w-2xl text-xl text-neutral-600">{page.intro}</p>
{/if}

<Markdown html={page.html} />

<SponsorTiers tiers={data.sponsorTiers} />
