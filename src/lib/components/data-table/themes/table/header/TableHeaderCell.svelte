<script lang="ts">
	import type { GridHeaderCellProps } from '$lib/components/data-table/props.js';

	let {
		title = '',
		onclick = () => {},
		sortable = false,
		children
	}: GridHeaderCellProps = $props();
</script>

<th class={['p-2 transition', { 'hover:bg-gray-700 cursor-pointer': sortable }]} {onclick}>
	<span class="inline-flex flex-row items-center gap-1">
		{title}
		{@render children?.()}
	</span>
</th>
