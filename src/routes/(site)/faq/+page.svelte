<script lang="ts">
	import Markdown from '#lib/components/Markdown.svelte';
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

<div class="py-10">
	{#each data.faqs as faq (faq.question)}
		<details class="group border-b border-neutral-200 py-4">
			<summary class="cursor-pointer font-serif text-2xl font-semibold">{faq.question}</summary>
			<Markdown html={faq.html} class="pt-4 md:ml-auto md:w-1/2" />
		</details>
	{/each}
</div>
