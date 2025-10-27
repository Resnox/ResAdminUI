<script lang="ts">
	import type { GridCountContainerProps } from '$lib/components/data-table/props.js';

	let { children }: GridCountContainerProps = $props();
</script>

<div class="flex items-center gap-2">
	{@render children?.()}
</div>
