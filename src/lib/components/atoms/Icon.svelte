<!--
	@component
	UI icon of the DLS. The files in `src/lib/assets/icons` are used as masks, so an icon takes the
	text color: set it with the `text-icon-*` utilities.
-->
<script lang="ts" module>
	export type IconName =
		'mail' | 'github' | 'twitter' | 'newsletter' | 'clock' | 'chevron-down' | 'menu';

	const urls = import.meta.glob<string>('../../assets/icons/*.svg', {
		eager: true,
		query: '?url',
		import: 'default'
	});
	// Icons are 16px, unless drawn at another size.
	const sizes: Partial<Record<IconName, number>> = { clock: 20, menu: 24 };
</script>

<script lang="ts">
	type Props = { name: IconName; size?: number; class?: string };

	let { name, size, class: className = '' }: Props = $props();

	let pixels = $derived(size ?? sizes[name] ?? 16);
</script>

<span
	class="icon {className}"
	style:mask-image={`url("${urls[`../../assets/icons/${name}.svg`]}")`}
	style:width="{pixels}px"
	style:height="{pixels}px"
	aria-hidden="true"
></span>

<style>
	.icon {
		display: inline-block;
		flex-shrink: 0;
		background-color: currentColor;
		/* The image is set inline: an address in a custom property would resolve against this stylesheet. */
		mask-position: center;
		mask-size: contain;
		mask-repeat: no-repeat;
	}
</style>
