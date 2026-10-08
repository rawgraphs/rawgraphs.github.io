<!--
	@component
	Row of a list of news: date, serif title and an optional thumbnail shown on hover.
-->
<script lang="ts">
	import Media from '#lib/components/atoms/Media.svelte';

	type Props = { href: string; date: string; title: string; image?: string };

	let { href, date, title, image }: Props = $props();
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- resolved by the caller -->
<a
	{href}
	class="group flex min-h-[150px] flex-col gap-x-sm gap-y-xs border-t border-default bg-surface py-xs text-heading transition-colors hover:bg-muted sm:flex-row sm:items-center"
>
	<p class="shrink-0 type-body sm:w-[200px]">{date}</p>
	<h3 class="flex-1 type-news-title">{title}</h3>
	{#if image}
		<!-- The thumbnail shows only while pointing at the row, or reaching it with the keyboard. -->
		<Media
			src={image}
			class="h-[130px] w-[200px] shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
		/>
	{/if}
</a>
