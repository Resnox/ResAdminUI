<script lang="ts">
	import type { GridHeaderRowProps } from '$lib/components/data-table/props.js';

	let { children }: GridHeaderRowProps = $props();
</script>

<tr class="whitespace-nowrap text-sm bg-gray-800 text-white text-center font-bold">
	{@render children?.()}
</tr>
