<!--
	@component
	Image coming from the CMS. Without an image, it shows the muted placeholder color of the DLS. Size and proportions are
	set by the caller through `class`: the image fills that box, whatever its own proportions.
-->
<script lang="ts">
	type Props = {
		src?: string;
		alt?: string;
		fit?: 'cover' | 'contain';
		class?: string;
	};

	let { src, alt = '', fit = 'cover', class: className = '' }: Props = $props();
</script>

<div class="relative overflow-clip {src ? '' : 'bg-muted'} {className}">
	{#if src}
		<img
			class="absolute inset-0 size-full {fit === 'cover' ? 'object-cover' : 'object-contain'}"
			{src}
			{alt}
			loading="lazy"
		/>
	{/if}
</div>
