<script lang="ts">
	import type { GridBodyCellProps } from '$lib/components/data-table/props.js';

	let { children, column }: GridBodyCellProps = $props();
</script>

<div class="grid grid-cols-2 gap-2">
	<span class="whitespace-nowrap font-bold text-sm text-gray-800">
		{column.label ?? column.field}
	</span>
	<span class="whitespace-nowrap text-sm text-gray-800">
		{@render children?.()}
	</span>
</div>
