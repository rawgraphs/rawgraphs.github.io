<!--
	@component
	Horizontal rule: `default` and `subtle` are 1px lines, `brand` is the 4px rule above the menu.
-->
<script lang="ts">
	type Props = { tone?: 'default' | 'subtle' | 'brand'; class?: string };

	let { tone = 'default', class: className = '' }: Props = $props();

	const tones = {
		default: 'h-px bg-(--color-border-default)',
		subtle: 'h-px bg-(--color-border-subtle)',
		brand: 'h-[4px] bg-(--color-border-brand)'
	};
</script>

<div class="w-full {tones[tone]} {className}" role="presentation"></div>
