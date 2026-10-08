<script lang="ts">
	import Markdown from '#lib/components/Markdown.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

<article class="mx-auto max-w-2xl">
	<h1 class="mb-6 font-serif text-4xl font-semibold">{page.title}</h1>
	<Markdown html={page.html} />
</article>
