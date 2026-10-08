<script lang="ts">
	import Link from '#lib/components/atoms/Link.svelte';
	import Prose from '#lib/components/atoms/Prose.svelte';
	import Section from '#lib/components/atoms/Section.svelte';
	import CodeBlock from '#lib/components/molecules/CodeBlock.svelte';
	import ContactNote from '#lib/components/molecules/ContactNote.svelte';
	import SectionHeading from '#lib/components/molecules/SectionHeading.svelte';
	import PageHeader from '#lib/components/organisms/PageHeader.svelte';
	import SectionIntro from '#lib/components/organisms/SectionIntro.svelte';
	import TeamSection from '#lib/components/organisms/TeamSection.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let page = $derived(data.page);
</script>

<svelte:head>
	<title>{page.title} · RAWGraphs</title>
</svelte:head>

<PageHeader title={page.title} image={page.background_image} />

<SectionIntro
	lead={page.intro}
	html={page.html}
	aside={data.contacts.length ? contacts : undefined}
/>
{#snippet contacts()}
	<h2 class="type-h4 text-primary">{data.titles.contacts}</h2>
	{#each data.contacts as html, index (index)}
		<ContactNote {html} />
	{/each}
{/snippet}

<TeamSection title={data.titles.team} members={data.team} />

{#if page.main_contributors?.length}
	<Section class="flex flex-col gap-sm pt-md pb-lg">
		<SectionHeading title={data.titles.mainContributors} />
		<ul class="grid gap-sm sm:grid-cols-2 lg:grid-cols-4">
			{#each page.main_contributors as person (person.name)}
				<li>
					<p class="type-h4 text-primary">
						{#if person.url}
							<Link href={person.url}>{person.name}</Link>
						{:else}
							{person.name}
						{/if}
					</p>
					{#if person.affiliation}
						<p class="type-body text-muted">{person.affiliation}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</Section>
{/if}

{#if data.cite?.html || data.cite?.reference}
	<Section class="py-md">
		<div class="flex max-w-text flex-col gap-sm">
			<SectionHeading title={data.titles.cite} />
			<Prose html={data.cite.html} />
			{#if data.cite.reference}
				<CodeBlock code={data.cite.reference} />
			{/if}
		</div>
	</Section>
{/if}
