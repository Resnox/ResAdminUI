<script lang="ts">
	import type { GridBodyRowProps } from '$lib/components/data-table/props.js';

	let { index, isOdd = false, isSelected = false, children }: GridBodyRowProps = $props();
</script>

<div
	class="divide-y divide-gray-200 rounded-md border border-gray-200 bg-white flex flex-col gap-2 p-2"
>
	{@render children?.()}
</div>
