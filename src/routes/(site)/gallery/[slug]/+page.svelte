<script lang="ts">
	import { resolve } from '$app/paths';
	import Markdown from '#lib/components/Markdown.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} · RAWGraphs</title>
</svelte:head>

<a class="text-sm hover:underline" href={resolve('gallery')}>Back to gallery</a>

<!-- eslint-disable svelte/no-navigation-without-resolve -- URLs set in the CMS -->
<article class="grid gap-10 pt-6 md:grid-cols-[2fr_1fr]">
	<img class="w-full rounded" src={project.image} alt="" />
	<div class="flex flex-col items-start gap-4">
		<h1 class="font-serif text-3xl font-semibold">{project.title}</h1>
		<Markdown html={project.html} />
		<dl class="flex flex-col gap-4">
			<div>
				<dt class="text-sm tracking-wide text-neutral-500 uppercase">Author</dt>
				<dd>
					{#if project.author_url}
						<a class="underline" href={project.author_url}>{project.author}</a>
					{:else}
						{project.author}
					{/if}
				</dd>
			</div>
			{#if project.charts?.length}
				<div>
					<dt class="text-sm tracking-wide text-neutral-500 uppercase">Charts used</dt>
					<dd>{project.charts.join(', ')}</dd>
				</div>
			{/if}
		</dl>
		{#if project.url}
			<a class="rounded bg-neutral-900 px-5 py-2.5 font-medium text-white" href={project.url}>
				Open project
			</a>
		{/if}
	</div>
</article>
