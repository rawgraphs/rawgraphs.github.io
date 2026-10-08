<!--
	@component
	Opening of a page: serif lead, body text and an optional sidebar (the `aside` snippet).
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Prose from '#lib/components/atoms/Prose.svelte';
	import Section from '#lib/components/atoms/Section.svelte';

	type Props = {
		lead?: string;
		html?: string;
		/** Shows the body text in the lead style: for an opening with links, which `lead` cannot have. */
		htmlAsLead?: boolean;
		tone?: 'page' | 'surface';
		aside?: Snippet;
	};

	let { lead, html, htmlAsLead = false, tone = 'page', aside }: Props = $props();
</script>

{#if lead || html || aside}
	<Section {tone} class="flex flex-col gap-x-2xl gap-y-md py-md lg:flex-row lg:items-start">
		<div class="flex max-w-text flex-1 flex-col gap-sm text-primary">
			{#if lead}
				<p class="type-lead whitespace-pre-line">{lead}</p>
			{/if}
			<Prose {html} size={htmlAsLead ? 'lead' : 'md'} />
		</div>
		{#if aside}
			<aside class="flex w-full shrink-0 flex-col gap-xs lg:w-sidebar">
				{@render aside()}
			</aside>
		{/if}
	</Section>
{/if}
