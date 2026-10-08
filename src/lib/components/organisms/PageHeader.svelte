<!--
	@component
	Title band of an inner page, on the inverse background or on the page's background image.
-->
<script lang="ts">
	import Section from '#lib/components/atoms/Section.svelte';

	type Props = { title: string; image?: string };

	let { title, image }: Props = $props();
</script>

<Section
	as="header"
	tone="inverse"
	class="flex min-h-[240px] flex-col justify-end pt-md pb-md"
	style={image ? `background-image: url(${JSON.stringify(image)})` : undefined}
>
	<h1 class="type-page-title text-inverse">{title}</h1>
</Section>
