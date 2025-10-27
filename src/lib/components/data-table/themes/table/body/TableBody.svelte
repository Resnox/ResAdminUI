<script lang="ts">
	import type { GridBodyContainerProps } from '$lib/components/data-table/props.js';

	let { children }: GridBodyContainerProps = $props();
</script>

<tbody class="divide-y divide-gray-200">
	{@render children?.()}
</tbody>
