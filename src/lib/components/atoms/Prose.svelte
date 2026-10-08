<!--
	@component
	Rich text from the CMS: Markdown already rendered to HTML at build time, from the files
	committed to the repository. Styles are in `src/lib/styles/prose.css`.
-->
<script lang="ts">
	type Props = { html?: string; size?: 'md' | 'sm' | 'lead'; class?: string };

	let { html, size = 'md', class: className = '' }: Props = $props();
</script>

{#if html}
	<div class="prose {size === 'md' ? '' : `prose-${size}`} {className}">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- trusted: rendered from the repository content -->
		{@html html}
	</div>
{/if}
