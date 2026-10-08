<script lang="ts">
	let { html, class: className = '' }: { html: string; class?: string } = $props();
</script>

<div class="prose max-w-none prose-neutral {className}">
	<!-- The HTML is rendered at build time from the Markdown files committed to the repository. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html html}
</div>
