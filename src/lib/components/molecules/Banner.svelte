<!--
	@component
	Bar with a short text and one action, e.g. the invitation to submit a project to the gallery.
-->
<script lang="ts">
	import Button from '#lib/components/atoms/Button.svelte';

	type Props = { text: string; button: { label: string; href: string } };

	let { text, button }: Props = $props();
</script>

<div class="flex flex-wrap items-center justify-between gap-sm">
	<p class="type-h4 whitespace-pre-line text-heading">{text}</p>
	<Button href={button.href} variant="dark" size="md">{button.label}</Button>
</div>
