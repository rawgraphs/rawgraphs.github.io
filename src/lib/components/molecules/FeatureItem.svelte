<!--
	@component
	Icon, title and short text.
-->
<script lang="ts">
	type Props = { icon?: string; title: string; text: string };

	let { icon, title, text }: Props = $props();
</script>

<div class="flex flex-col items-start gap-xs">
	{#if icon}
		<img class="size-[50px]" src={icon} alt="" />
	{/if}
	<h3 class="type-h4 text-primary">{title}</h3>
	<p class="type-body text-primary">{text}</p>
</div>
