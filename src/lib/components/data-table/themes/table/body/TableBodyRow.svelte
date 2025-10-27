<script lang="ts">
	import type { GridBodyRowProps } from '$lib/components/data-table/props.js';

	let { index, isOdd = false, isSelected = false, children }: GridBodyRowProps = $props();
</script>

<tr
	class={[
		{ 'bg-gray-800/10': isOdd, 'bg-gray-800/20': !isOdd },
		'whitespace-nowrap text-sm text-gray-800'
	]}
>
	{@render children?.()}
</tr>
