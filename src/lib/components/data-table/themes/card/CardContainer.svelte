<script lang="ts">
	import type { GridContainerProps } from '$lib/components/data-table/props.js';

	let { children }: GridContainerProps = $props();
</script>

<div class="min-w-full flex flex-col gap-2">
	{@render children()}
</div>
