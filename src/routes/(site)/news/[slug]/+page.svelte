<script lang="ts">
	import { resolve } from '$app/paths';
	import Prose from '#lib/components/atoms/Prose.svelte';
	import Article from '#lib/components/organisms/Article.svelte';
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

<Article
	kicker={{ label: 'News', href: resolve('news') }}
	meta={formatDate(post.date)}
	title={post.title}
>
	{#if post.cover}
		<img class="w-full" src={post.cover} alt="" />
	{/if}
	<Prose html={post.html} />
</Article>
