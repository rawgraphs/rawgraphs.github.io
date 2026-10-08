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

{#if data.blocks.length}
	<ul class="grid gap-6 py-10 md:grid-cols-3">
		{#each data.blocks as block (block.title)}
			<li class="flex flex-col items-start gap-4 rounded border border-neutral-200 p-6">
				<h2 class="font-serif text-2xl font-semibold">{block.title}</h2>
				<Markdown html={block.html} />
				{#if block.buttons?.length}
					<div class="mt-auto flex flex-wrap gap-3">
						{#each block.buttons as button (button.url)}
							<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- URL set in the CMS -->
							<a
								class="rounded bg-neutral-900 px-5 py-2.5 font-medium text-white"
								href={button.url}
							>
								{button.label}
							</a>
						{/each}
					</div>
				{/if}
			</li>
		{/each}
	</ul>
{/if}
