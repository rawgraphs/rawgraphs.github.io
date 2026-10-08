<script lang="ts">
	import { resolve } from '$app/paths';
	import Markdown from '#lib/components/Markdown.svelte';
	import { formatDate } from '#lib/content.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let tutorial = $derived(data.tutorial);
</script>

<svelte:head>
	<title>{tutorial.title} · RAWGraphs</title>
	{#if tutorial.intro}
		<meta name="description" content={tutorial.intro} />
	{/if}
</svelte:head>

<div class="grid gap-10 md:grid-cols-[14rem_1fr]">
	<nav class="order-last self-start text-sm md:order-first" aria-label="Topics">
		<h2 class="mb-3 border-b border-neutral-200 pb-3 text-base font-semibold">Topics</h2>
		{#each data.topics as topic (topic.key)}
			<details class="border-b border-neutral-200 py-2" open={topic.value === tutorial.topic}>
				<summary class="cursor-pointer font-medium">{topic.label}</summary>
				<ul class="flex flex-col gap-2 py-2 pl-4">
					{#each topic.tutorials as item (item.slug)}
						<li>
							<a
								class="hover:underline aria-[current]:font-semibold"
								href={resolve(`learning/${item.slug}`)}
								aria-current={item.slug === tutorial.slug ? 'page' : undefined}
							>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</details>
		{/each}
	</nav>

	<article class="min-w-0">
		<p class="flex flex-wrap gap-x-3 text-sm text-neutral-500">
			<a class="font-semibold tracking-wide uppercase hover:underline" href={resolve('learning')}>
				Tutorial
			</a>
			<span>Latest update: {formatDate(tutorial.updated)}</span>
		</p>
		<h1 class="mt-2 mb-6 font-serif text-4xl font-semibold">{tutorial.title}</h1>
		{#if tutorial.intro}
			<p class="mb-6 text-xl whitespace-pre-line text-neutral-600">{tutorial.intro}</p>
		{/if}
		<Markdown html={data.videoHtml} class="mb-6" />
		{#if tutorial.resources_url}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- URL set in the CMS -->
			<a
				class="mb-6 inline-block rounded bg-neutral-900 px-5 py-2.5 font-medium text-white"
				href={tutorial.resources_url}
			>
				{data.resourcesLabel}
			</a>
		{/if}
		<Markdown html={tutorial.html} />
		<Markdown html={data.noteHtml} class="prose-sm mt-10" />
	</article>
</div>
