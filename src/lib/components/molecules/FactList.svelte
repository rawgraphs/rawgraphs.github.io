<!--
	@component
	Labelled details of an entry, e.g. the author of a gallery project.
-->
<script lang="ts">
	import Link from '#lib/components/atoms/Link.svelte';

	type Props = { facts: { label: string; text: string; href?: string }[] };

	let { facts }: Props = $props();
</script>

<dl class="flex flex-col gap-sm">
	{#each facts as fact (fact.label)}
		<div>
			<dt class="type-body-lg text-primary uppercase">{fact.label}</dt>
			<dd class="type-body text-primary">
				{#if fact.href}
					<Link href={fact.href} class="underline">{fact.text}</Link>
				{:else}
					{fact.text}
				{/if}
			</dd>
		</div>
	{/each}
</dl>
