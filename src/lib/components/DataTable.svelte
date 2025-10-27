<script lang="ts">
	import type {
		FilterParam,
		PaginationParams,
		SorterParam,
		IdentifiableType,
		GetListResult,
		DataProvider
	} from '$lib/services/providers/data/types.js';
	import type { DataTableTheme } from '$lib/components/data-table/theme.js';
	import TableTheme from '$lib/components/data-table/themes/table/index.js';
	import type { ColumnDef } from '$lib/components/types.js';
    import {untrack} from "svelte";

	type DataType = $$Generic<IdentifiableType>;
	type ResourceType = $$Generic<string>;

	let {
		dataProvider,
		resource,
		columns = $bindable(),
		filters = $bindable(),
		sorter = $bindable(),
		pagination = $bindable(),
		showCheckboxes = false,
		selectedRows = [],
		sizes = [10, 25, 50],
        debounce = 500,
		theme = TableTheme
	}: {
		dataProvider: DataProvider<DataType, ResourceType>;
		resource: ResourceType;
		columns: ColumnDef[];
		filters: FilterParam[];
		sorter: SorterParam[];
		pagination: PaginationParams;
		showCheckboxes: boolean;
		selectedRows: DataType[];
		sizes: number[];
        debounce: number;
		theme: DataTableTheme;
	} = $props();

	let count = $state<number | undefined>();
	let result = $state<GetListResult<DataType>>();

	$effect(() => {
		if ($state.snapshot(filters)) {
			count = undefined;
		}
	});

    $effect(() => {
        resource;
        $state.snapshot(pagination);

        untrack(() => {
            updateData();
        });
    });

	$effect(() => {
        $state.snapshot(sorter);
        $state.snapshot(filters);

        const handler = setTimeout(() => {
            updateData()
        }, debounce);

        return () => {
            clearTimeout(handler);
        };
    });

    let headerCheckboxChecked = $derived(
        result?.data.every(
            (item: DataType) => selectedRows.findIndex((value: DataType) => value.id === item.id) !== -1
        )
    );

    function updateData() {
        const promise = dataProvider.getList(
            resource,
            pagination,
            sorter,
            filters
        );
        promise.then((providerResult) => {
            result = providerResult;
            if (result?.pageInfo.hasMore === false) {
                count = pagination.offset + result.data.length;
            }
        });
	}

	function toggleHeaderCheckbox() {
		if (result === undefined) return;

		if (headerCheckboxChecked) {
			selectedRows = [];
		} else {
			selectedRows = result.data;
		}
	}

	function toggleHeaderSort(column: ColumnDef, event: MouseEvent) {
		if (!column.sortable) {
			return;
		}

		const sorterIndex = sorter.findIndex((s) => s.field === column.field);
		if (sorterIndex !== -1) {
			const sorterItem = sorter[sorterIndex];
			if (sorterItem.order === 'ASC') {
				sorter[sorterIndex].order = 'DESC';
			} else {
				sorter.splice(sorterIndex, 1);
			}
		} else if (event.shiftKey) {
			sorter.push({
				field: column.field,
				order: 'ASC'
			});
		} else {
			sorter = [
				{
					field: column.field,
					order: 'ASC'
				}
			];
		}
	}

	function fetchCount() {
		dataProvider.getCount(resource, $state.snapshot(filters)).then((result) => {
			count = result.count;
		});
	}

	function goPreviousPage() {
		pagination.offset = result!.pageInfo.previousOffset;
	}

	function goNextPage() {
		pagination.offset = result!.pageInfo.nextOffset;
	}

	function changeLimit(event: Event) {
		const newLimit = Number.parseInt((event.target as HTMLSelectElement | HTMLInputElement).value);

		if (pagination.limit !== newLimit) {
			pagination.limit = newLimit;
			pagination.offset = 0;
		}
	}
</script>

<theme.controls.container>
    <theme.controls.pagination.container>
        <theme.controls.pagination.prev
                onclick={goPreviousPage}
                disabled={result?.pageInfo.previousOffset === pagination.offset}
        />
        <theme.controls.pagination.next
                onclick={goNextPage}
                disabled={!(result?.pageInfo.hasMore ?? false)}
        />
        <theme.controls.count.container>
            <theme.controls.count.current bind:offset={pagination.offset} limit={pagination.limit} {count} />
            {#if count === undefined}
                <theme.controls.count.button onclick={fetchCount} />
            {:else}
                <theme.controls.count.display {count} />
            {/if}
        </theme.controls.count.container>
    </theme.controls.pagination.container>
    <theme.controls.pagination.select onchange={changeLimit} {sizes} />
</theme.controls.container>

<theme.container>
	<theme.header.container>
		<theme.header.row>
			{#if showCheckboxes}
				<theme.header.checkbox
					checked={headerCheckboxChecked}
					onchange={() => toggleHeaderCheckbox()}
				/>
			{/if}
			{#each columns as column}
				<theme.header.cell
					title={column.label}
					sortable={column.sortable}
					onclick={(event: MouseEvent) => toggleHeaderSort(column, event)}
				>
					{#if column.sortable}
						<theme.header.indicator
							sortIndex={sorter.findIndex((s) => s.field === column.field)}
							isDescending={sorter.some((s) => s.field === column.field && s.order === 'DESC')}
						/>
					{/if}
				</theme.header.cell>
			{/each}
		</theme.header.row>
	</theme.header.container>
	{#if result}
		<theme.body.container>
			{#each result.data as row, index}
				<theme.body.row isOdd={(index + 1) % 2 === 1} {index} isSelected={false}>
					{#if showCheckboxes}
						<theme.body.checkbox value={row} {index} bind:selectedRows />
					{/if}
					{#each columns as column}
						<theme.body.cell {column}>
							{row[column.field]}
						</theme.body.cell>
					{/each}
				</theme.body.row>
			{/each}
		</theme.body.container>
	{/if}
</theme.container>