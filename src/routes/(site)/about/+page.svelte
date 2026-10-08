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

{#if data.team.length}
	<section class="py-10">
		<h2 class="mb-4 font-serif text-2xl font-semibold">{data.titles.team}</h2>
		<ul class="grid gap-8 md:grid-cols-3">
			{#each data.team as member (member.title)}
				<li class="flex flex-col items-start gap-3">
					{#if member.image}
						<img class="h-12" src={member.image} alt="" />
					{/if}
					<h3 class="font-semibold">{member.title}</h3>
					<Markdown html={member.html} class="prose-sm" />
					{#if member.url}
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- URL set in the CMS -->
						<a class="text-sm underline" href={member.url}>
							{member.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
{/if}

{#if page.main_contributors?.length}
	<section class="py-10">
		<h2 class="mb-4 font-serif text-2xl font-semibold">{data.titles.mainContributors}</h2>
		<ul class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
			{#each page.main_contributors as person (person.name)}
				<li>
					{#if person.url}
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- URL set in the CMS -->
						<a class="font-medium hover:underline" href={person.url}>{person.name}</a>
					{:else}
						<span class="font-medium">{person.name}</span>
					{/if}
					{#if person.affiliation}
						<p class="text-sm text-neutral-600">{person.affiliation}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
{/if}

{#if data.contacts.length}
	<section class="py-10">
		<h2 class="mb-4 font-serif text-2xl font-semibold">{data.titles.contacts}</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each data.contacts as html, index (index)}
				<Markdown {html} />
			{/each}
		</div>
	</section>
{/if}

{#if data.cite?.html || data.cite?.reference}
	<section class="py-10">
		<h2 class="mb-4 font-serif text-2xl font-semibold">{data.titles.cite}</h2>
		<Markdown html={data.cite.html} />
		{#if data.cite.reference}
			<blockquote
				class="mt-4 border-l-2 border-neutral-300 pl-4 whitespace-pre-line text-neutral-700"
			>
				{data.cite.reference}
			</blockquote>
		{/if}
	</section>
{/if}
