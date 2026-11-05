<!--
	@component
	Sticky header: brand rule, logo, main menu and call to action. The menu is defined in
	`src/lib/navigation.ts`; below the `lg` breakpoint it collapses behind a button. The open menu
	is never taller than the screen: it scrolls on its own (and the page behind it does not, see
	`base.css`), so every item and the call to action stay reachable. Escape closes it.
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
	let toggle = $state<HTMLButtonElement>();
	afterNavigate(() => {
		open = false;
	});

	const current = (href: string) => isCurrent(href, page.url.pathname);

	function onkeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && open) {
			open = false;
			toggle?.focus();
		}
	}
</script>

<svelte:window {onkeydown} />

<header class="sticky top-0 z-40 flex max-h-dvh flex-col bg-page">
	<Divider tone="brand" />
	<div class="shrink-0 border-b border-light px-gutter py-xs">
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
				bind:this={toggle}
				type="button"
				class="p-xs text-icon-default lg:hidden"
				aria-expanded={open}
				aria-controls="mobile-menu"
				aria-label={open ? 'Close menu' : 'Open menu'}
				onclick={() => (open = !open)}
			>
				<Icon name={open ? 'close' : 'menu'} />
			</button>
		</div>
	</div>

	{#if open}
		<nav
			id="mobile-menu"
			class="flex min-h-0 flex-col overflow-y-auto overscroll-contain border-b border-light px-gutter pb-sm lg:hidden"
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
