<script lang="ts">
	import { onMount } from 'svelte';
	import { config } from '#lib/cms/config.ts';

	onMount(async () => {
		const { init } = await import('@sveltia/cms');
		init({ config });
	});
</script>

<svelte:head>
	<title>Content Manager · RAWGraphs</title>
	<meta name="robots" content="noindex" />
</svelte:head>
