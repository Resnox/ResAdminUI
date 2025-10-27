<script lang="ts">
	import type { GridPagingSelectProps } from '$lib/components/data-table/props.js';

	let { onchange, sizes }: GridPagingSelectProps = $props();
</script>

<label>
	Limit per page
	<select class="form-select" {onchange}>
		{#each sizes as size}
			<option value={size}>{size}</option>
		{/each}
	</select>
</label>
