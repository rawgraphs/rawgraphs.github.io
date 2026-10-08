<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Icon from '#lib/components/Icon.svelte';
	import Markdown from '#lib/components/Markdown.svelte';
	import Ribbon from '#lib/components/Ribbon.svelte';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
	let footer = $derived(data.footer);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- The background image chosen by the current page, if any: see `getLayoutOptions`. -->
<div
	class="bg-size-[100%_auto] bg-top bg-no-repeat"
	style:background-image={page.data.backgroundImage &&
		`url(${JSON.stringify(page.data.backgroundImage)})`}
>
	<div class="mx-auto flex min-h-screen max-w-4xl flex-col px-6">
		<header class="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6">
			<a class="text-xl font-bold" href={resolve('')}>RAWGraphs</a>
			<nav class="flex flex-wrap gap-x-5 gap-y-1 text-sm">
				<a class="hover:underline" href={resolve('about')}>About</a>
				<a class="hover:underline" href={resolve('learning')}>Learning</a>
				<a class="hover:underline" href={resolve('courses')}>Courses</a>
				<a class="hover:underline" href={resolve('gallery')}>Gallery</a>
				<a class="hover:underline" href={resolve('news')}>News</a>
				<a class="hover:underline" href={resolve('support-us')}>Support us</a>
				<a class="hover:underline" href={resolve('sponsors')}>Sponsors</a>
			</nav>
		</header>

		<main class="flex-1 py-10">
			{@render children()}
		</main>

		<!-- The ribbon chosen by the current page, if any: see `getLayoutOptions`. -->
		{#if page.data.ribbon}
			<Ribbon ribbon={page.data.ribbon} />
		{/if}

		<footer
			class="flex flex-wrap justify-between gap-6 border-t border-neutral-200 py-8 text-sm text-neutral-600"
		>
			<!-- eslint-disable svelte/no-navigation-without-resolve -- URLs set in the CMS -->
			<div class="flex flex-col gap-2">
				<Markdown html={footer.html} class="prose-sm" />
				{#each footer.links ?? [] as link (link.url)}
					<a class="hover:underline" href={link.url}>{link.label}</a>
				{/each}
			</div>
			<ul class="flex flex-col gap-2">
				{#each footer.contacts ?? [] as contact (contact.url)}
					<li>
						<a class="flex items-center gap-2 hover:underline" href={contact.url}>
							{#if contact.icon}
								<Icon name={contact.icon} />
							{/if}
							{contact.label}
						</a>
					</li>
				{/each}
			</ul>
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		</footer>
	</div>
</div>
