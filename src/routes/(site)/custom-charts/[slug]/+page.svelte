<script lang="ts">
	import { resolve } from '$app/paths';
	import Markdown from '#lib/components/Markdown.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let chart = $derived(data.chart);
</script>

<svelte:head>
	<title>{chart.title} · RAWGraphs</title>
</svelte:head>

<a class="text-sm hover:underline" href={resolve('custom-charts')}>Back to custom charts</a>

<!-- eslint-disable svelte/no-navigation-without-resolve -- URLs set in the CMS -->
<article class="grid gap-10 pt-6 md:grid-cols-[2fr_1fr]">
	<img class="w-full rounded" src={chart.image} alt="" />
	<div class="flex flex-col items-start gap-4">
		<div class="flex items-center gap-3">
			<img class="size-12 object-contain" src={chart.icon} alt="" />
			<h1 class="font-serif text-3xl font-semibold">{chart.title}</h1>
		</div>
		<Markdown html={chart.html} />
		<dl class="flex flex-col gap-4">
			<div>
				<dt class="text-sm tracking-wide text-neutral-500 uppercase">Author</dt>
				<dd>
					{#if chart.author_url}
						<a class="underline" href={chart.author_url}>{chart.author}</a>
					{:else}
						{chart.author}
					{/if}
				</dd>
			</div>
			{#if chart.data_sample_url}
				<div>
					<dt class="text-sm tracking-wide text-neutral-500 uppercase">Data sample</dt>
					<dd><a class="underline" href={chart.data_sample_url}>Link</a></dd>
				</div>
			{/if}
		</dl>
		{#if chart.download_url || chart.repository_url}
			<p class="text-sm tracking-wide text-neutral-500 uppercase">Resources</p>
			<div class="flex flex-wrap gap-3">
				{#if chart.download_url}
					<a
						class="rounded bg-neutral-900 px-5 py-2.5 font-medium text-white"
						href={chart.download_url}
					>
						Download
					</a>
				{/if}
				{#if chart.repository_url}
					<a class="rounded bg-neutral-200 px-5 py-2.5 font-medium" href={chart.repository_url}>
						Repository
					</a>
				{/if}
			</div>
		{/if}
	</div>
</article>
