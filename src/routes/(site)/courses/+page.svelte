<script lang="ts">
	import { onMount } from 'svelte';
	import Prose from '#lib/components/atoms/Prose.svelte';
	import CoursesList from '#lib/components/organisms/CoursesList.svelte';
	import PageHeader from '#lib/components/organisms/PageHeader.svelte';
	import SectionIntro from '#lib/components/organisms/SectionIntro.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);

	// The page is built ahead of time: courses are split again in the browser, so that a course
	// moves to the past ones on its date even if the site has not been rebuilt since.
	let now = $state<string>();
	onMount(() => {
		now = new Date().toISOString();
	});

	// A course is upcoming until the end of its day.
	let today = $derived((now ?? data.builtAt).slice(0, 10));
	let upcoming = $derived(
		data.courses
			.filter((course) => course.date.slice(0, 10) >= today)
			.sort((a, b) => a.date.localeCompare(b.date))
	);
	let past = $derived(
		data.courses
			.filter((course) => course.date.slice(0, 10) < today)
			.sort((a, b) => b.date.localeCompare(a.date))
	);
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

<PageHeader title={page.title} image={page.background_image} />
<SectionIntro lead={page.intro} html={page.html} />
<CoursesList upcomingTitle={page.upcoming_title} pastTitle={page.past_title} {upcoming} {past}>
	{#snippet empty()}
		<Prose html={data.upcomingEmptyHtml} size="sm" />
	{/snippet}
</CoursesList>
