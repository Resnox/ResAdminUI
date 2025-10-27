<script lang="ts">
	import type { GridHeaderCheckboxProps } from '$lib/components/data-table/props.js';

	let { checked = $bindable(false), onchange = () => {} }: GridHeaderCheckboxProps = $props();
</script>

<th scope="col" class="w-8">
	<label>
		<input type="checkbox" {checked} {onchange} />
	</label>
</th>
