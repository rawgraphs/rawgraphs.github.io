<script lang="ts">
	import { resolve } from '$app/paths';
	import Markdown from '#lib/components/Markdown.svelte';
	import { formatDate } from '#lib/content.ts';
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

<div class="grid gap-10 py-10 md:grid-cols-[2fr_1fr]">
	<section>
		<h2 class="mb-4 font-serif text-2xl font-semibold">{page.charts_title}</h2>
		<ul class="flex flex-col gap-4">
			{#each data.charts as chart (chart.slug)}
				<li>
					<a
						class="group flex items-center gap-4 rounded border border-neutral-200 p-3"
						href={resolve(`custom-charts/${chart.slug}`)}
					>
						<img class="size-16 shrink-0 object-contain" src={chart.icon} alt="" loading="lazy" />
						<div>
							<h3 class="font-semibold group-hover:underline">{chart.title}</h3>
							<p class="text-sm text-neutral-500">Last update: {formatDate(chart.updated)}</p>
						</div>
					</a>
				</li>
			{:else}
				<li class="text-neutral-500">No custom charts yet.</li>
			{/each}
		</ul>
	</section>

	{#if page.resources?.length}
		<section>
			<h2 class="mb-4 font-serif text-2xl font-semibold">{page.resources_title}</h2>
			<ul class="flex flex-col gap-4">
				{#each page.resources as resource (resource.url)}
					<li>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- URL set in the CMS -->
						<a
							class="block rounded border border-neutral-200 p-3 font-semibold hover:underline"
							href={resource.url}
						>
							{resource.label}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</div>
