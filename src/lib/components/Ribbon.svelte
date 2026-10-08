<script lang="ts">
	import type { Ribbon } from '#lib/content.ts';

	let { ribbon }: { ribbon: Ribbon } = $props();
</script>

<nav class="grid gap-4 border-t border-neutral-200 py-10 sm:grid-cols-3" aria-label={ribbon.title}>
	{#each ribbon.links as link (link.url)}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- URL set in the CMS -->
		<a class="font-serif text-3xl font-semibold hover:underline" href={link.url}>{link.label}</a>
	{/each}
</nav>
