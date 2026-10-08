<!--
	@component
	Small paragraph with a rule above, for the sidebar of a section intro.
-->
<script lang="ts">
	import Prose from '#lib/components/atoms/Prose.svelte';

	let { html }: { html: string } = $props();
</script>

<div class="border-t border-subtle py-xs">
	<Prose {html} size="sm" />
</div>
