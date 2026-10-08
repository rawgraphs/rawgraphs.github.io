<!--
	@component
	Titled list of links, for the navigation inside a page or a section of the site.
-->
<script lang="ts">
	import Divider from '#lib/components/atoms/Divider.svelte';
	import Link from '#lib/components/atoms/Link.svelte';

	type Props = {
		title: string;
		items: { label: string; href: string; current?: boolean }[];
		class?: string;
	};

	let { title, items, class: className = '' }: Props = $props();
</script>

<nav class="flex flex-col items-start gap-sm {className}" aria-label={title}>
	<h2 class="type-h4 text-primary">{title}</h2>
	<Divider />
	<ul class="flex flex-col items-start gap-[14px] pt-xs">
		{#each items as item (item.href)}
			<li><Link href={item.href} variant="topic" current={item.current}>{item.label}</Link></li>
		{/each}
	</ul>
</nav>
