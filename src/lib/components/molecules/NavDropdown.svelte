<!--
	@component
	Item of the main menu with a submenu.
-->
<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import Icon from '#lib/components/atoms/Icon.svelte';
	import Link from '#lib/components/atoms/Link.svelte';
	import type { NavGroup } from '#lib/navigation.ts';

	type Props = { group: NavGroup; isCurrent?: (href: string) => boolean };

	let { group, isCurrent = () => false }: Props = $props();

	let current = $derived(group.items.some(({ href }) => isCurrent(href)));
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="group flex items-center gap-2xs p-sm type-nav transition-colors hover:text-brand data-[state=open]:text-brand {current
			? 'text-brand'
			: 'text-nav'}"
	>
		{group.label}
		<Icon name="chevron-down" class="transition-transform group-data-[state=open]:rotate-180" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content
			align="start"
			class="z-50 flex flex-col overflow-clip rounded-md bg-page shadow-dropdown"
		>
			{#each group.items as item (item.href)}
				<DropdownMenu.Item>
					{#snippet child({ props })}
						<Link {...props} href={item.href} variant="dropdown" current={isCurrent(item.href)}>
							{item.label}
						</Link>
					{/snippet}
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
