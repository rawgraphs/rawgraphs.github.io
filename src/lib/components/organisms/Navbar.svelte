<!--
	@component
	Sticky header: brand rule, logo, main menu and call to action. The menu is defined in
	`src/lib/navigation.ts`; below the `lg` breakpoint it collapses behind a button.
-->
<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Button from '#lib/components/atoms/Button.svelte';
	import Divider from '#lib/components/atoms/Divider.svelte';
	import Icon from '#lib/components/atoms/Icon.svelte';
	import Link from '#lib/components/atoms/Link.svelte';
	import Logo from '#lib/components/atoms/Logo.svelte';
	import NavDropdown from '#lib/components/molecules/NavDropdown.svelte';
	import { callToAction, isCurrent, navigation } from '#lib/navigation.ts';

	let open = $state(false);
	afterNavigate(() => {
		open = false;
	});

	const current = (href: string) => isCurrent(href, page.url.pathname);
</script>

<header class="sticky top-0 z-40 bg-page">
	<Divider tone="brand" />
	<div class="border-b border-light px-gutter py-xs">
		<div class="mx-auto flex w-full max-w-site items-center justify-between">
			<a class="p-xs" href="/" aria-label="RAWGraphs, home page"><Logo /></a>

			<nav class="hidden items-center gap-sm lg:flex" aria-label="Main">
				<div class="flex items-start">
					{#each navigation as item (item.label)}
						{#if 'items' in item}
							<NavDropdown group={item} isCurrent={current} />
						{:else}
							<Link href={item.href} variant="nav" current={current(item.href)}>{item.label}</Link>
						{/if}
					{/each}
				</div>
				<Button href={callToAction.href}>{callToAction.label}</Button>
			</nav>

			<button
				type="button"
				class="p-xs text-icon-default lg:hidden"
				aria-expanded={open}
				aria-controls="mobile-menu"
				aria-label="Menu"
				onclick={() => (open = !open)}
			>
				<Icon name="menu" />
			</button>
		</div>
	</div>

	{#if open}
		<nav
			id="mobile-menu"
			class="flex flex-col border-b border-light px-gutter pb-sm lg:hidden"
			aria-label="Main"
		>
			{#each navigation as item (item.label)}
				{#if 'items' in item}
					<p class="px-sm pt-sm type-caption text-muted uppercase">{item.label}</p>
					{#each item.items as child (child.href)}
						<Link href={child.href} variant="nav" current={current(child.href)}>{child.label}</Link>
					{/each}
				{:else}
					<Link href={item.href} variant="nav" current={current(item.href)}>{item.label}</Link>
				{/if}
			{/each}
			<Button href={callToAction.href} class="mt-sm">{callToAction.label}</Button>
		</nav>
	{/if}
</header>
