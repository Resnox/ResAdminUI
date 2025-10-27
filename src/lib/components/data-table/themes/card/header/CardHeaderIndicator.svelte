<script lang="ts">
	import type { GridHeaderIndicatorProps } from '$lib/components/data-table/props.js';

	let { sortIndex = -1, isDescending = false }: GridHeaderIndicatorProps = $props();
</script>

{#if sortIndex !== -1}
	{#if isDescending}
		<span class="icon-[mdi--chevron-down]"></span>
	{:else}
		<span class="icon-[mdi--chevron-up]"></span>
	{/if}
	<span class="text-xs">({sortIndex + 1})</span>
{/if}
