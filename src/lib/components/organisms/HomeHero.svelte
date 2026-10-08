<!--
	@component
	Opening of the home page: serif claim, buttons and the looping demo video, on the inverse
	background or on a background image.
-->
<script lang="ts">
	import Button from '#lib/components/atoms/Button.svelte';
	import Section from '#lib/components/atoms/Section.svelte';
	import ButtonGroup from '#lib/components/molecules/ButtonGroup.svelte';

	type Action = { label: string; href: string };
	type Props = {
		title: string;
		primary: Action;
		secondary?: Action;
		video?: string;
		backgroundImage?: string;
	};

	let { title, primary, secondary, video, backgroundImage }: Props = $props();
</script>

<Section
	tone="inverse"
	class="flex min-h-[500px] flex-col gap-md pt-lg pb-xl lg:flex-row lg:items-center"
	style={backgroundImage ? `background-image: url(${JSON.stringify(backgroundImage)})` : undefined}
>
	<div class="flex flex-1 flex-col items-start gap-md">
		<h1 class="type-hero text-inverse">{title}</h1>
		<ButtonGroup>
			<Button href={primary.href}>{primary.label}</Button>
			{#if secondary}
				<Button href={secondary.href} variant="secondary">{secondary.label}</Button>
			{/if}
		</ButtonGroup>
	</div>
	{#if video}
		<video
			class="aspect-video w-full shrink-0 bg-muted drop-shadow-media lg:w-[640px]"
			src={video}
			autoplay
			loop
			muted
			playsinline
		></video>
	{/if}
</Section>
