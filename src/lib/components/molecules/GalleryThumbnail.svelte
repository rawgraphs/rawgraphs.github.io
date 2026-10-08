<!--
	@component
	Rounded square image linking to a gallery project.
-->
<script lang="ts">
	import Media from '#lib/components/atoms/Media.svelte';

	type Props = { href: string; image: string; title: string };

	let { href, image, title }: Props = $props();
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- resolved by the caller -->
<a
	{href}
	class="block overflow-clip rounded-lg border border-light transition-opacity hover:opacity-80"
>
	<Media src={image} alt={title} class="aspect-square w-full" />
</a>
