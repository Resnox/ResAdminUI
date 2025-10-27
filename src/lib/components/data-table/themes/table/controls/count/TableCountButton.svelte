<script lang="ts">
	import type { GridCountButtonProps } from '$lib/components/data-table/props.js';

	let { onclick }: GridCountButtonProps = $props();
</script>

<button {onclick} class="px-2 py-1 bg-blue-500 text-white rounded"> Get count </button>
