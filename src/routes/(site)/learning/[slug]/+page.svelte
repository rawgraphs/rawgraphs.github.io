<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '#lib/components/atoms/Button.svelte';
	import Prose from '#lib/components/atoms/Prose.svelte';
	import TopicsNav from '#lib/components/molecules/TopicsNav.svelte';
	import Article from '#lib/components/organisms/Article.svelte';
	import { formatDate } from '#lib/content.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let tutorial = $derived(data.tutorial);

	// The sidebar lists the tutorials of the same topic, then the other topics.
	let topic = $derived(data.topics.find(({ value }) => value === tutorial.topic));
</script>

<svelte:head>
	<title>{tutorial.title} · RAWGraphs</title>
	{#if tutorial.intro}
		<meta name="description" content={tutorial.intro} />
	{/if}
</svelte:head>

<Article
	kicker={{ label: 'Tutorial', href: resolve('learning') }}
	meta="Latest update: {formatDate(tutorial.updated)}"
	title={tutorial.title}
	intro={tutorial.intro}
	{aside}
>
	<Prose html={data.videoHtml} />
	{#if tutorial.resources_url}
		<Button href={tutorial.resources_url} class="self-start">{data.resourcesLabel}</Button>
	{/if}
	<Prose html={tutorial.html} />
	<Prose html={data.noteHtml} size="sm" class="pt-md" />
</Article>

{#snippet aside()}
	<div class="flex flex-col gap-md">
		{#if topic}
			<TopicsNav
				title={topic.label}
				items={topic.tutorials.map((item) => ({
					label: item.title,
					href: resolve(`learning/${item.slug}`),
					current: item.slug === tutorial.slug
				}))}
			/>
		{/if}
		<TopicsNav
			title="Topics"
			items={data.topics.map((item) => ({
				label: item.label,
				href: `${resolve('learning')}#${item.key}`
			}))}
		/>
	</div>
{/snippet}
