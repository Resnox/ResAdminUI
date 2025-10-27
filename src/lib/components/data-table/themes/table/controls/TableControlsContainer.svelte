<script lang="ts">
	import type { GridControlsContainerProps } from '$lib/components/data-table/props.js';

	let { children }: GridControlsContainerProps = $props();
</script>

<div class="flex justify-between items-center gap-2">
	{@render children?.()}
</div>
