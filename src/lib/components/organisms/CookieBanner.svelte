<!--
	@component
	Fixed bottom notice with a dismiss button. The choice is remembered in the browser.
	Not mounted yet: the site does not use analytics.
-->
<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import Button from '#lib/components/atoms/Button.svelte';

	type Props = { dismissLabel?: string; children: Snippet };

	let { dismissLabel = 'Got it', children }: Props = $props();

	const key = 'cookie-banner-dismissed';
	let visible = $state(false);
	onMount(() => {
		visible = localStorage.getItem(key) === null;
	});

	function dismiss() {
		localStorage.setItem(key, '1');
		visible = false;
	}
</script>

{#if visible}
	<div
		class="fixed inset-x-0 bottom-0 z-50 flex min-h-[75px] flex-wrap items-center justify-between gap-sm border-t border-default bg-page p-sm"
	>
		<p class="type-body text-primary">{@render children()}</p>
		<Button variant="dark" size="sm" onclick={dismiss}>{dismissLabel}</Button>
	</div>
{/if}
