<!--
	@component
	Question in the serif style, with a chevron on the right, that opens to show its answer. To be used inside an `Accordion.Root` of bits-ui, as
	the `FaqList` organism does. The answer stays in the page when closed, for search engines.
-->
<script lang="ts">
	import { Accordion } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import Icon from '#lib/components/atoms/Icon.svelte';

	type Props = { value: string; question: string; children: Snippet };

	let { value, question, children }: Props = $props();
</script>

<Accordion.Item {value} class="flex flex-col">
	<Accordion.Header level={2}>
		<Accordion.Trigger
			class="group flex min-h-[70px] w-full items-center justify-between gap-sm border-t border-default px-sm py-xs text-left text-heading transition-colors hover:text-brand"
		>
			<span class="type-news-title">{question}</span>
			<Icon name="chevron-down" class="transition-transform group-data-[state=open]:rotate-180" />
		</Accordion.Trigger>
	</Accordion.Header>
	<Accordion.Content forceMount>
		{#snippet child({ props, open })}
			<div {...props} hidden={!open} class="justify-end bg-page p-sm {open ? 'flex' : ''}">
				<div class="w-full max-w-[620px]">
					{@render children()}
				</div>
			</div>
		{/snippet}
	</Accordion.Content>
</Accordion.Item>
