<script lang="ts">
	import type { GridBodyContainerProps } from '$lib/components/data-table/props.js';

	let { children }: GridBodyContainerProps = $props();
</script>

<div
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 @container"
>
	{@render children?.()}
</div>
