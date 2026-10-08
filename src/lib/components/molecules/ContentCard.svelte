<!--
	@component
	Card linking to a tutorial or a custom chart: bordered card with a square
	thumbnail on the muted color, title and a line of details.
	`sm` is the compact version, for long lists.
-->
<script lang="ts">
	import Media from '#lib/components/atoms/Media.svelte';

	type Props = {
		href: string;
		title: string;
		image?: string;
		meta?: string;
		size?: 'lg' | 'sm';
		/** Set to `false` for a card without the thumbnail. */
		thumbnail?: boolean;
	};

	let { href, title, image, meta, size = 'lg', thumbnail = true }: Props = $props();

	let compact = $derived(size === 'sm');
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- resolved by the caller -->
<a
	{href}
	class="group flex overflow-clip rounded-md border border-light bg-page {compact
		? 'min-h-[100px]'
		: 'min-h-[200px]'}"
>
	{#if thumbnail}
		<!-- The thumbnail sits on the muted color and is multiplied with it, so that it reads as a
		     distinct area even when the image has a white background. Large thumbnails fill the
		     square; small ones are icons, shown whole. -->
		<div
			class="flex shrink-0 self-stretch bg-muted {compact ? 'w-[100px]' : 'w-[100px] sm:w-[200px]'}"
		>
			<Media
				src={image}
				fit={compact ? 'contain' : 'cover'}
				class="w-full self-stretch opacity-70 mix-blend-multiply {compact ? '[&>img]:p-xs' : ''}"
			/>
		</div>
	{/if}
	<div class="flex flex-1 flex-col items-start justify-between gap-xs p-sm">
		<h3 class="type-h4 font-semibold! text-heading group-hover:text-brand">{title}</h3>
		{#if meta}
			<p class="type-body text-subtle">{meta}</p>
		{/if}
	</div>
</a>
