<script lang="ts">
	import { resolve } from '$app/paths';
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

<ul class="grid grid-cols-2 gap-4 py-10 sm:grid-cols-3 md:grid-cols-4">
	{#each data.projects as project (project.slug)}
		<li>
			<a class="block" href={resolve(`gallery/${project.slug}`)}>
				<img
					class="aspect-square w-full rounded object-cover transition-opacity hover:opacity-80"
					src={project.image}
					alt={project.title}
					loading="lazy"
				/>
			</a>
		</li>
	{:else}
		<li class="text-neutral-500">No projects yet.</li>
	{/each}
</ul>

{#if page.submit}
	<aside class="flex flex-wrap items-center justify-between gap-6 rounded bg-neutral-100 p-6">
		<p class="text-lg font-semibold whitespace-pre-line">{page.submit.text}</p>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- URL set in the CMS -->
		<a
			class="rounded bg-neutral-900 px-5 py-2.5 font-medium text-white"
			href={page.submit.button_url}
		>
			{page.submit.button_label}
		</a>
	</aside>
{/if}
