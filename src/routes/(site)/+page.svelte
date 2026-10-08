<script lang="ts">
	import { resolve } from '$app/paths';
	import Markdown from '#lib/components/Markdown.svelte';
	import SponsorTiers from '#lib/components/SponsorTiers.svelte';
	import { formatDate } from '#lib/content.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);
</script>

<svelte:head>
	<title>RAWGraphs</title>
	<meta name="description" content={page.subtitle} />
</svelte:head>

<section class="grid items-center gap-10 py-10 md:grid-cols-2">
	<div class="flex flex-col items-start gap-5">
		<h1 class="font-serif text-5xl font-semibold">{page.title}</h1>
		<p class="max-w-2xl text-xl text-neutral-600">{page.subtitle}</p>
		<div class="flex flex-wrap gap-3">
			<!-- eslint-disable svelte/no-navigation-without-resolve -- URLs set in the CMS -->
			<a class="rounded bg-neutral-900 px-5 py-2.5 font-medium text-white" href={page.cta_url}>
				{page.cta_label}
			</a>
			<a class="rounded bg-neutral-200 px-5 py-2.5 font-medium" href={page.repo_url}>
				{page.repo_label}
			</a>
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		</div>
	</div>
	{#if page.video}
		<video class="w-full" src={page.video} autoplay loop muted playsinline></video>
	{/if}
</section>

{#if page.features?.length}
	<section class="py-10">
		<h2 class="mb-6 font-serif text-2xl font-semibold">{data.titles.features}</h2>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each page.features as feature (feature.title)}
				<div>
					{#if feature.image}
						<img class="mb-3 h-12" src={feature.image} alt="" />
					{/if}
					<h3 class="mb-1 font-semibold">{feature.title}</h3>
					<p class="text-neutral-600">{feature.text}</p>
				</div>
			{/each}
		</div>
	</section>
{/if}

{#if page.html}
	<Markdown html={page.html} class="py-10" />
{/if}

{#if data.sponsorTiers.length}
	<section class="py-10">
		<h2 class="mb-6 font-serif text-2xl font-semibold">{data.titles.sponsors}</h2>
		<SponsorTiers tiers={data.sponsorTiers} />
	</section>
{/if}

{#if data.news.length}
	<section class="py-10">
		<h2 class="mb-4 font-serif text-2xl font-semibold">Latest news</h2>
		<ul class="flex flex-col gap-3">
			{#each data.news as post (post.slug)}
				<li>
					<a class="font-medium hover:underline" href={resolve(`news/${post.slug}`)}>
						{post.title}
					</a>
					<span class="text-sm text-neutral-500">· {formatDate(post.date)}</span>
				</li>
			{/each}
		</ul>
	</section>
{/if}
