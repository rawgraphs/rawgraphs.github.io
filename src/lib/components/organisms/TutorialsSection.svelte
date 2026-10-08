<!--
	@component
	In-page navigation next to titled groups of content cards. The navigation highlights the group
	being read. A group marked as `compact` shows small cards on two columns.
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import Section from '#lib/components/atoms/Section.svelte';
	import ContentCard from '#lib/components/molecules/ContentCard.svelte';
	import SectionHeading from '#lib/components/molecules/SectionHeading.svelte';
	import TopicsNav from '#lib/components/molecules/TopicsNav.svelte';

	type Card = { href: string; title: string; image?: string; meta?: string };
	type Props = {
		navTitle: string;
		groups: { id: string; title: string; compact?: boolean; cards: Card[] }[];
	};

	let { navTitle, groups }: Props = $props();

	// The current group is the last one whose top has passed the upper part of the window.
	let currentId = $state<string>();
	let list: HTMLElement;
	onMount(() => {
		const update = () => {
			const sections = [...list.querySelectorAll<HTMLElement>(':scope > section')];
			const passed = sections.filter((section) => section.getBoundingClientRect().top < 200);
			currentId = (passed.at(-1) ?? sections[0])?.id;
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		return () => window.removeEventListener('scroll', update);
	});
</script>

<Section
	tone="surface"
	class="flex flex-col gap-x-2xl gap-y-md pt-lg pb-md lg:flex-row lg:items-start lg:pt-2xl"
>
	<TopicsNav
		title={navTitle}
		items={groups.map(({ id, title }) => ({
			label: title,
			href: `#${id}`,
			current: id === currentId
		}))}
		class="w-full shrink-0 lg:sticky lg:top-[120px] lg:w-sidebar"
	/>
	<div class="flex flex-1 flex-col gap-2xl" bind:this={list}>
		{#each groups as group (group.id)}
			<section class="flex scroll-mt-[120px] flex-col gap-xs pb-md" id={group.id}>
				<SectionHeading title={group.title} />
				<div class="grid gap-sm {group.compact ? 'gap-xs sm:grid-cols-2' : ''}">
					{#each group.cards as card (card.href)}
						<ContentCard {...card} size={group.compact ? 'sm' : 'lg'} />
					{/each}
				</div>
			</section>
		{/each}
	</div>
</Section>
