<script lang="ts">
	import type { GridBodyCellProps } from '$lib/components/data-table/props.js';

	let { children, column }: GridBodyCellProps = $props();
</script>

<td class="p-2">
	{@render children?.()}
</td>
