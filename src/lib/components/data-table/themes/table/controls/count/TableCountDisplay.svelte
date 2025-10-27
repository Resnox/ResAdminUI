<script lang="ts">
	import type { GridCountDisplayProps } from '$lib/components/data-table/props.js';

	let { count }: GridCountDisplayProps = $props();
</script>

<span>of</span>
<span>{count}</span>
<span>entries</span>
