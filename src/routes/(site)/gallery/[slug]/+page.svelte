<script lang="ts">
	import { resolve } from '$app/paths';
	import EntryDetail from '#lib/components/organisms/EntryDetail.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} · RAWGraphs</title>
</svelte:head>

<EntryDetail
	back={{ label: 'Back to gallery', href: resolve('gallery') }}
	image={project.image}
	title={project.title}
	html={project.html}
	facts={[
		{ label: 'Author', text: project.author, href: project.author_url },
		...(project.charts?.length ? [{ label: 'Charts used', text: project.charts.join(', ') }] : [])
	]}
	buttons={project.url ? [{ label: 'Open project', href: project.url }] : []}
/>
