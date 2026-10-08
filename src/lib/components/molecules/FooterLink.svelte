<!--
	@component
	Icon and label link of the footer, for the inverse background.
-->
<script lang="ts">
	import Icon, { type IconName } from '#lib/components/atoms/Icon.svelte';
	import { linkAttributes } from '#lib/links.ts';

	type Props = { href: string; label: string; icon?: IconName };

	let { href, label, icon }: Props = $props();
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- set in the CMS -->
<a
	class="flex items-center gap-2xs type-body text-inverse hover:underline"
	{href}
	{...linkAttributes(href)}
>
	{#if icon}
		<Icon name={icon} class="text-icon-brand" />
	{/if}
	{label}
</a>
