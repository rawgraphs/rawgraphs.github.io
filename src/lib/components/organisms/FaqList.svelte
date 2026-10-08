<!--
	@component
	Stack of questions that open to show their answers.
-->
<script lang="ts">
	import { Accordion } from 'bits-ui';
	import Prose from '#lib/components/atoms/Prose.svelte';
	import Section from '#lib/components/atoms/Section.svelte';
	import AccordionItem from '#lib/components/molecules/AccordionItem.svelte';

	type Props = { faqs: { question: string; html: string }[] };

	let { faqs }: Props = $props();
</script>

<Section tone="surface" class="pb-lg">
	<Accordion.Root type="multiple" class="flex flex-col border-b border-default">
		{#each faqs as faq (faq.question)}
			<AccordionItem value={faq.question} question={faq.question}>
				<Prose html={faq.html} size="sm" />
			</AccordionItem>
		{/each}
	</Accordion.Root>
</Section>
