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

<div class="grid gap-10 py-10 md:grid-cols-[12rem_1fr]">
	<nav class="self-start md:sticky md:top-6" aria-label="Topics">
		<h2 class="mb-3 border-b border-neutral-200 pb-3 font-semibold">Topics</h2>
		<ul class="flex flex-col gap-2 text-sm">
			{#each data.topics as topic (topic.key)}
				<li><a class="hover:underline" href="#{topic.key}">{topic.label}</a></li>
			{/each}
		</ul>
	</nav>

	<div class="flex flex-col gap-12">
		{#each data.topics as topic (topic.key)}
			<section id={topic.key} class="scroll-mt-6">
				<h2 class="mb-4 font-serif text-2xl font-semibold">{topic.label}</h2>
				<ul class="grid gap-4 sm:grid-cols-2">
					{#each topic.tutorials as tutorial (tutorial.slug)}
						<li>
							<a
								class="group flex h-full items-center gap-4 rounded border border-neutral-200 p-3"
								href={resolve(`learning/${tutorial.slug}`)}
							>
								{#if tutorial.cover}
									<img
										class="size-16 shrink-0 object-contain"
										src={tutorial.cover}
										alt=""
										loading="lazy"
									/>
								{/if}
								<div>
									<h3 class="font-semibold group-hover:underline">{tutorial.title}</h3>
									<p class="text-sm text-neutral-500">
										Last update: {formatDate(tutorial.updated)}
									</p>
								</div>
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{:else}
			<p class="text-neutral-500">No tutorials yet.</p>
		{/each}
	</div>
</div>
