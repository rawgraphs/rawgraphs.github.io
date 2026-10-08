<!--
	@component
	Grid of call-to-action cards, on two or three columns.
-->
<script lang="ts">
	import Section from '#lib/components/atoms/Section.svelte';
	import SupportBox from '#lib/components/molecules/SupportBox.svelte';

	type Props = {
		boxes: { title: string; html: string; buttons?: { label: string; href: string }[] }[];
		columns?: 2 | 3;
	};

	let { boxes, columns = 2 }: Props = $props();
</script>

{#if boxes.length}
	<Section
		tone="surface"
		class="grid gap-md pt-sm pb-2xl {columns === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2'}"
	>
		{#each boxes as box (box.title)}
			<SupportBox {...box} />
		{/each}
	</Section>
{/if}
