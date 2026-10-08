<!--
	@component
	RAWGraphs logo, for light backgrounds. The file is a raster image, as on the previous site.
-->
<script lang="ts">
	import logo from '#lib/assets/logo.png';

	let { class: className = '' }: { class?: string } = $props();
</script>

<img class="h-[20px] w-auto {className}" src={logo} alt="RAWGraphs" width="408" height="69" />
