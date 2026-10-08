<!--
	@component
	Message shown in place of an empty list.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="flex min-h-[100px] w-full items-center justify-center bg-muted p-sm text-center text-heading"
>
	{@render children()}
</div>
