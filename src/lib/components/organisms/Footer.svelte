<!--
	@component
	Credits, secondary links and contact links, on the inverse background.
-->
<script lang="ts">
	import Prose from '#lib/components/atoms/Prose.svelte';
	import Section from '#lib/components/atoms/Section.svelte';
	import type { IconName } from '#lib/components/atoms/Icon.svelte';
	import FooterLink from '#lib/components/molecules/FooterLink.svelte';
	import { linkAttributes } from '#lib/links.ts';

	type Link = { label: string; url: string };
	type Props = {
		creditsHtml: string;
		links?: Link[];
		contacts?: (Link & { icon?: IconName })[];
	};

	let { creditsHtml, links = [], contacts = [] }: Props = $props();
</script>

<Section as="footer" tone="inverse" class="flex flex-wrap items-start justify-between gap-sm py-md">
	<div class="footer-credits flex flex-col items-start gap-2xs type-caption text-inverse">
		<Prose html={creditsHtml} class="type-caption" />
		{#each links as link (link.url)}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- set in the CMS -->
			<a class="underline" href={link.url} {...linkAttributes(link.url)}>{link.label}</a>
		{/each}
	</div>
	<ul class="flex flex-wrap items-start gap-sm">
		{#each contacts as contact (contact.url)}
			<li><FooterLink href={contact.url} label={contact.label} icon={contact.icon} /></li>
		{/each}
	</ul>
</Section>

<style>
	/* Links of the credits keep the text color on the inverse background. */
	.footer-credits :global(.prose a) {
		color: inherit;
		text-decoration: underline;
	}
</style>
