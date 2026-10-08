<!--
	@component
	Page of an entry that is mainly an image, e.g. a gallery project or a custom chart: a link back
	to its list, then a white panel with the large image and, next to it, serif title, description,
	details and actions.
-->
<script lang="ts">
	import Button from '#lib/components/atoms/Button.svelte';
	import Link from '#lib/components/atoms/Link.svelte';
	import Prose from '#lib/components/atoms/Prose.svelte';
	import Section from '#lib/components/atoms/Section.svelte';
	import ButtonGroup from '#lib/components/molecules/ButtonGroup.svelte';
	import FactList from '#lib/components/molecules/FactList.svelte';

	type Props = {
		back: { label: string; href: string };
		image: string;
		icon?: string;
		title: string;
		html?: string;
		facts?: { label: string; text: string; href?: string }[];
		buttons?: { label: string; href: string; variant?: 'primary' | 'light' }[];
	};

	let { back, image, icon, title, html, facts = [], buttons = [] }: Props = $props();
</script>

<Section tone="surface" class="flex flex-col gap-sm pt-lg pb-2xl">
	<Link href={back.href} class="self-start type-body underline">{back.label}</Link>
	<article class="grid gap-sm rounded-md bg-page p-sm lg:grid-cols-[2fr_1fr] lg:p-md">
		<img class="w-full" src={image} alt="" />
		<div class="flex flex-col items-start gap-sm">
			<div class="flex w-full items-center gap-xs border-b border-light pb-sm">
				{#if icon}
					<img class="size-[50px] object-contain" src={icon} alt="" />
				{/if}
				<h1 class="type-section text-heading">{title}</h1>
			</div>
			<Prose {html} />
			{#if facts.length}
				<FactList {facts} />
			{/if}
			{#if buttons.length}
				<ButtonGroup>
					{#each buttons as button (button.href)}
						<Button href={button.href} variant={button.variant} size="md">{button.label}</Button>
					{/each}
				</ButtonGroup>
			{/if}
		</div>
	</article>
</Section>
