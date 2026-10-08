<!--
	@component
	Serif links on the brand color: the "ribbon" a page can show before the footer.
-->
<script lang="ts">
	import Link from '#lib/components/atoms/Link.svelte';
	import Section from '#lib/components/atoms/Section.svelte';

	type Props = { label: string; links: { label: string; url: string }[] };

	let { label, links }: Props = $props();
</script>

<Section
	as="nav"
	tone="brand"
	class="flex min-h-[130px] flex-col items-center justify-center gap-sm py-sm sm:flex-row"
	aria-label={label}
>
	{#each links as link (link.url)}
		<div class="flex flex-1 justify-center">
			<Link href={link.url} variant="cta">{link.label}</Link>
		</div>
	{/each}
</Section>
