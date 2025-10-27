<script lang="ts">
	import type { GridPagingNextProps } from '$lib/components/data-table/props.js';

	let { onclick, disabled }: GridPagingNextProps = $props();
</script>

<button
	{onclick}
	{disabled}
	class="px-2 py-1 bg-blue-500 disabled:grayscale-50 not-disabled:hover:bg-blue-400 transition-colors text-white rounded"
>
	Next
</button>
