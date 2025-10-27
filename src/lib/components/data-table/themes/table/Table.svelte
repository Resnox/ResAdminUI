<script lang="ts">
	import type { GridContainerProps } from '$lib/components/data-table/props.js';

	let { children }: GridContainerProps = $props();
</script>

<table class="min-w-full divide-y divide-gray-200">
	{@render children()}
</table>
