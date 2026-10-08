<!--
	@component
	Call-to-action card: serif title, text and one or more buttons. Title and text share a minimum
	height, so that the buttons of cards side by side line up.
-->
<script lang="ts">
	import Button from '#lib/components/atoms/Button.svelte';
	import Prose from '#lib/components/atoms/Prose.svelte';
	import ButtonGroup from '#lib/components/molecules/ButtonGroup.svelte';

	type Props = { title: string; html: string; buttons?: { label: string; href: string }[] };

	let { title, html, buttons = [] }: Props = $props();
</script>

<div class="flex flex-col items-start gap-sm rounded-xl bg-page p-md">
	<div class="flex min-h-[200px] w-full flex-col gap-xs">
		<h2 class="type-section text-heading">{title}</h2>
		<Prose {html} class="text-heading" />
	</div>
	{#if buttons.length}
		<ButtonGroup>
			{#each buttons as button (button.href + button.label)}
				<Button href={button.href}>{button.label}</Button>
			{/each}
		</ButtonGroup>
	{/if}
</div>
