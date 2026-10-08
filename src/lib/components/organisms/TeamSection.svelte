<!--
	@component
	Titled row of team cards, on the muted background.
-->
<script lang="ts">
	import Section from '#lib/components/atoms/Section.svelte';
	import SectionHeading from '#lib/components/molecules/SectionHeading.svelte';
	import TeamCard from '#lib/components/molecules/TeamCard.svelte';

	type Props = {
		title: string;
		members: { title: string; html: string; image?: string; url?: string }[];
	};

	let { title, members }: Props = $props();
</script>

{#if members.length}
	<Section tone="muted" class="flex flex-col gap-sm pt-md pb-lg">
		<SectionHeading {title} />
		<div class="flex flex-col gap-md md:flex-row md:items-start">
			{#each members as member (member.title)}
				<TeamCard {...member} />
			{/each}
		</div>
	</Section>
{/if}
