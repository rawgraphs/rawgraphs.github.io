<!--
	@component
	Upcoming courses, with a message when there are none, and past courses.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Section from '#lib/components/atoms/Section.svelte';
	import CourseItem from '#lib/components/molecules/CourseItem.svelte';
	import EmptyState from '#lib/components/molecules/EmptyState.svelte';

	type Course = { slug: string; title: string; date: string; duration: number };
	type Props = {
		upcomingTitle: string;
		pastTitle: string;
		upcoming: Course[];
		past: Course[];
		/** Shown when there are no upcoming courses. */
		empty: Snippet;
	};

	let { upcomingTitle, pastTitle, upcoming, past, empty }: Props = $props();

	const duration = (hours: number) => `Duration: ${hours} ${hours === 1 ? 'hour' : 'hours'}`;
</script>

<Section class="flex flex-col gap-sm pt-sm pb-lg">
	<h2 class="type-h4 text-primary">{upcomingTitle}</h2>
	{#if upcoming.length}
		<div class="flex flex-col">
			{#each upcoming as course (course.slug)}
				<CourseItem
					date={course.date}
					title={course.title}
					duration={duration(course.duration)}
					state="upcoming"
				/>
			{/each}
		</div>
	{:else}
		<EmptyState>{@render empty()}</EmptyState>
	{/if}

	{#if past.length}
		<h2 class="type-h4 text-primary">{pastTitle}</h2>
		<div class="flex flex-col">
			{#each past as course (course.slug)}
				<CourseItem date={course.date} title={course.title} duration={duration(course.duration)} />
			{/each}
		</div>
	{/if}
</Section>
