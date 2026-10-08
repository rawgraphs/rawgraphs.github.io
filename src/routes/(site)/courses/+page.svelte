<script lang="ts">
	import { onMount } from 'svelte';
	import Markdown from '#lib/components/Markdown.svelte';
	import type { Course, Entry } from '#lib/content.ts';
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

	const part = (date: string, options: Intl.DateTimeFormatOptions) =>
		new Date(date).toLocaleDateString('en-GB', { ...options, timeZone: 'UTC' });
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

{#snippet list(courses: Pick<Entry<Course>, 'slug' | 'title' | 'date' | 'duration'>[])}
	<ul class="flex flex-col gap-4">
		{#each courses as course (course.slug)}
			<li class="flex items-center gap-6 rounded border border-neutral-200 p-4">
				<time class="flex w-16 shrink-0 flex-col items-center" datetime={course.date.slice(0, 10)}>
					<span class="text-sm uppercase">{part(course.date, { month: 'short' })}</span>
					<span class="font-serif text-4xl font-semibold"
						>{part(course.date, { day: 'numeric' })}</span
					>
					<span class="text-sm text-neutral-500">{part(course.date, { year: 'numeric' })}</span>
				</time>
				<div>
					<h3 class="text-lg font-semibold">{course.title}</h3>
					<p class="text-sm text-neutral-600">
						Duration: {course.duration}
						{course.duration === 1 ? 'hour' : 'hours'}
					</p>
				</div>
			</li>
		{/each}
	</ul>
{/snippet}

<h1 class="mb-4 font-serif text-4xl font-semibold">{page.title}</h1>
{#if page.intro}
	<p class="mb-8 max-w-2xl text-xl whitespace-pre-line text-neutral-600">{page.intro}</p>
{/if}
<Markdown html={page.html} />

<section class="py-10">
	<h2 class="mb-4 font-serif text-2xl font-semibold">{page.upcoming_title}</h2>
	{#if upcoming.length}
		{@render list(upcoming)}
	{:else}
		<Markdown html={data.upcomingEmptyHtml} />
	{/if}
</section>

{#if past.length}
	<section class="py-10">
		<h2 class="mb-4 font-serif text-2xl font-semibold">{page.past_title}</h2>
		{@render list(past)}
	</section>
{/if}
