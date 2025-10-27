<script lang="ts">
	import type { GridBodyCheckboxProps } from '$lib/components/data-table/props.js';
	import { untrack } from 'svelte';
	import type { IdentifiableType } from '$lib/services/providers/data/types.js';

	let {
		index = -1,
		value = undefined,
		checked = $bindable(false),
		selectedRows = $bindable()
	}: GridBodyCheckboxProps = $props();

	$effect(() => {
		checked = selectedRows.findIndex((v: IdentifiableType) => v?.id === value?.id) !== -1;
	});

	$effect(() => {
		const index = selectedRows.findIndex((v: IdentifiableType) => v?.id === value?.id);
		if (checked && index === -1) {
			selectedRows.push(value!);
		} else if (!checked && index !== -1) {
			selectedRows.splice(index, 1);
		}
	});
</script>

<td class="flex justify-center items-center p-2">
	<label for="checkbox-row-{index}">
		<input type="checkbox" bind:checked id="checkbox-row-{index}" />
	</label>
</td>
