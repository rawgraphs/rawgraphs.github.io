<script lang="ts">
	import { resolve } from '$app/paths';
	import Markdown from '#lib/components/Markdown.svelte';
	import { formatDate } from '#lib/content.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.page.title} · RAWGraphs</title>
</svelte:head>

<h1 class="mb-4 font-serif text-4xl font-semibold">{data.page.title}</h1>
<Markdown html={data.page.html} class="prose-lg mb-10" />

<ul class="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
	{#each data.posts as post (post.slug)}
		<li>
			<a class="group flex flex-col gap-2" href={resolve(`news/${post.slug}`)}>
				<p class="text-sm text-neutral-500">{formatDate(post.date)}</p>
				<h2 class="font-semibold group-hover:underline">{post.title}</h2>
				{#if post.excerpt}
					<p class="text-sm text-neutral-600">{post.excerpt}</p>
				{/if}
				{#if post.cover}
					<img
						class="aspect-video w-full rounded object-cover"
						src={post.cover}
						alt=""
						loading="lazy"
					/>
				{/if}
			</a>
		</li>
	{:else}
		<li class="text-neutral-500">No news yet.</li>
	{/each}
</ul>
