<!--
	@component
	Code snippet or quoted reference, in the monospaced font.
-->
<script lang="ts">
	let { code, class: className = '' }: { code: string; class?: string } = $props();
</script>

<p class="rounded-md bg-muted px-sm py-xs type-code whitespace-pre-line text-primary {className}">
	{code}
</p>
