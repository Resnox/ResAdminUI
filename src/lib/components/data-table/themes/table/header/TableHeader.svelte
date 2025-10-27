<script lang="ts">
	import type { GridHeaderContainerProps } from '$lib/components/data-table/props.js';

	let { children }: GridHeaderContainerProps = $props();
</script>

<tbody class="divide-y divide-gray-200">
	{@render children?.()}
</tbody>
