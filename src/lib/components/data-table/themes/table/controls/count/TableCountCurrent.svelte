<script lang="ts">
	import type { GridCountCurrentProps } from '$lib/components/data-table/props.js';

	let { offset, limit, count }: GridCountCurrentProps = $props();
</script>

<span>{offset + 1}</span>
<span>to</span>
<span>{count ?? offset + limit}</span>
