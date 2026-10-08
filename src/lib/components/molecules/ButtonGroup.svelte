<!--
	@component
	Buttons side by side, e.g. the primary and secondary actions of the home hero.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';

	let { class: className = '', children }: { class?: string; children: Snippet } = $props();
</script>

<div class="flex flex-wrap items-start gap-sm {className}">
	{@render children()}
</div>
