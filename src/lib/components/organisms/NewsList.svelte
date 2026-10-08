<!--
	@component
	List of news items, with an optional title.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import Section from '#lib/components/atoms/Section.svelte';
	import EmptyState from '#lib/components/molecules/EmptyState.svelte';
	import NewsItem from '#lib/components/molecules/NewsItem.svelte';
	import SectionHeading from '#lib/components/molecules/SectionHeading.svelte';
	import { formatDate } from '#lib/content.ts';

	type Props = {
		title?: string;
		posts: { slug: string; title: string; date: string; cover?: string }[];
		tone?: 'page' | 'surface';
	};

	let { title, posts, tone = 'page' }: Props = $props();
</script>

<Section {tone} class="flex flex-col pb-lg {title ? 'gap-sm pt-md' : 'pt-sm'}">
	{#if title}
		<SectionHeading {title} />
	{/if}
	<div class="flex flex-col">
		{#each posts as post (post.slug)}
			<NewsItem
				href={resolve(`news/${post.slug}`)}
				date={formatDate(post.date)}
				title={post.title}
				image={post.cover}
			/>
		{:else}
			<EmptyState>No news yet.</EmptyState>
		{/each}
	</div>
</Section>
