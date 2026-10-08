<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '#lib/components/organisms/PageHeader.svelte';
	import SectionIntro from '#lib/components/organisms/SectionIntro.svelte';
	import TutorialsSection from '#lib/components/organisms/TutorialsSection.svelte';
	import { formatDate } from '#lib/content.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);

	let groups = $derived(
		data.topics.map((topic) => ({
			id: topic.key,
			title: topic.label,
			compact: topic.compact,
			cards: topic.tutorials.map((tutorial) => ({
				href: resolve(`learning/${tutorial.slug}`),
				title: tutorial.title,
				image: tutorial.cover,
				meta: topic.compact ? undefined : `Last update: ${formatDate(tutorial.updated)}`
			}))
		}))
	);
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

<PageHeader title={page.title} image={page.background_image} />
<SectionIntro lead={page.intro} html={page.html} />
<TutorialsSection navTitle="Topics" {groups} />
