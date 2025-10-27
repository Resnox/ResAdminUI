<script lang="ts">
	import type { GridPagingContainerProps } from '$lib/components/data-table/props.js';

	let { children }: GridPagingContainerProps = $props();
</script>

<div class="flex items-center gap-2">
	{@render children?.()}
</div>
