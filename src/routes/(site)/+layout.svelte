<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';
	import ActionCallsBar from '#lib/components/organisms/ActionCallsBar.svelte';
	import Footer from '#lib/components/organisms/Footer.svelte';
	import Navbar from '#lib/components/organisms/Navbar.svelte';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
	let footer = $derived(data.footer);
	// The ribbon chosen by the current page, if any: see `getLayoutOptions`.
	let ribbon = $derived(page.data.ribbon);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="flex-1">
		{@render children()}
	</main>

	{#if ribbon}
		<ActionCallsBar label={ribbon.title} links={ribbon.links} />
	{/if}
	<Footer creditsHtml={footer.html} links={footer.links} contacts={footer.contacts} />
</div>
