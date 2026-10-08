<!--
	@component
	Title of a section: serif, with a grey rule below. The only style for section titles.
-->
<script lang="ts">
	type Props = { title: string; level?: 2 | 3; id?: string; class?: string };

	let { title, level = 2, id, class: className = '' }: Props = $props();
</script>

<svelte:element
	this={`h${level}`}
	{id}
	class="w-full border-b border-default pb-xs type-section text-heading {className}"
>
	{title}
</svelte:element>
