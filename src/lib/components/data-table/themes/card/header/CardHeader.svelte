<script lang="ts">
	import type { GridHeaderContainerProps } from '$lib/components/data-table/props.js';

	let { children }: GridHeaderContainerProps = $props();
</script>

<div class="w-full">
	{@render children?.()}
</div>
