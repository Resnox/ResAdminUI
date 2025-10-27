<script lang="ts">
	import type { GridHeaderIndicatorProps } from '$lib/components/data-table/props.js';

	let { sortIndex = -1, isDescending = false }: GridHeaderIndicatorProps = $props();
</script>

<div class="flex flex-col *:-my-1">
	<span class={[{ 'bg-gray-500': sortIndex === -1 || !isDescending }, 'icon-[mdi--menu-up]']}
	></span>
	<span class={[{ 'bg-gray-500': sortIndex === -1 || isDescending }, 'icon-[mdi--menu-down]']}
	></span>
</div>
{#if sortIndex !== -1}
	<span class="text-xs">{sortIndex + 1}</span>
{/if}
