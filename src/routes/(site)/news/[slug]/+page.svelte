<script lang="ts">
	import Markdown from '#lib/components/Markdown.svelte';
	import { formatDate } from '#lib/content.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} · RAWGraphs</title>
	{#if post.excerpt}
		<meta name="description" content={post.excerpt} />
	{/if}
</svelte:head>

<article class="mx-auto max-w-2xl">
	<p class="text-sm text-neutral-500">{formatDate(post.date)}</p>
	<h1 class="mb-6 font-serif text-4xl font-semibold">{post.title}</h1>
	{#if post.cover}
		<img class="mb-6 w-full rounded" src={post.cover} alt="" />
	{/if}
	<Markdown html={post.html} />
</article>
