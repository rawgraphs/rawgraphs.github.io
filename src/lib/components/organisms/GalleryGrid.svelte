<!--
	@component
	Four-column grid of gallery thumbnails.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import Section from '#lib/components/atoms/Section.svelte';
	import EmptyState from '#lib/components/molecules/EmptyState.svelte';
	import GalleryThumbnail from '#lib/components/molecules/GalleryThumbnail.svelte';

	type Props = { projects: { slug: string; title: string; image: string }[] };

	let { projects }: Props = $props();
</script>

<Section class="pt-sm pb-2xl">
	{#if projects.length}
		<div class="grid grid-cols-2 gap-sm md:grid-cols-3 lg:grid-cols-4">
			{#each projects as project (project.slug)}
				<GalleryThumbnail
					href={resolve(`gallery/${project.slug}`)}
					image={project.image}
					title={project.title}
				/>
			{/each}
		</div>
	{:else}
		<EmptyState>No projects yet.</EmptyState>
	{/if}
</Section>
