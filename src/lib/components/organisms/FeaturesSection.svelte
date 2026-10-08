<!--
	@component
	Titled row of feature items.
-->
<script lang="ts">
	import Section from '#lib/components/atoms/Section.svelte';
	import FeatureItem from '#lib/components/molecules/FeatureItem.svelte';
	import SectionHeading from '#lib/components/molecules/SectionHeading.svelte';

	type Props = { title: string; features: { image?: string; title: string; text: string }[] };

	let { title, features }: Props = $props();
</script>

<Section tone="surface" class="flex flex-col gap-sm py-md">
	<SectionHeading {title} />
	<div class="grid gap-sm sm:grid-cols-2 lg:grid-cols-4">
		{#each features as feature (feature.title)}
			<FeatureItem icon={feature.image} title={feature.title} text={feature.text} />
		{/each}
	</div>
</Section>
