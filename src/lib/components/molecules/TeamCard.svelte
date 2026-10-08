<!--
	@component
	Partner of the project: logo on the inverse background, name, description and link.
-->
<script lang="ts">
	import Link from '#lib/components/atoms/Link.svelte';
	import Prose from '#lib/components/atoms/Prose.svelte';
	import { displayUrl } from '#lib/links.ts';

	type Props = { title: string; html: string; image?: string; url?: string };

	let { title, html, image, url }: Props = $props();
</script>

<div class="flex flex-1 flex-col items-start gap-xs">
	<div class="flex h-[250px] w-full items-center justify-center bg-inverse p-md">
		{#if image}
			<img class="max-h-full max-w-full" src={image} alt="" loading="lazy" />
		{/if}
	</div>
	<h3 class="type-h4 text-primary">{title}</h3>
	<Prose {html} size="sm" />
	{#if url}
		<Link href={url} class="type-body">{displayUrl(url)}</Link>
	{/if}
</div>
