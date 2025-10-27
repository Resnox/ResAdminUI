import Table from './Table.svelte';
import type { DataTableTheme } from '$lib/components/data-table/theme.js';
import TableBody from '$lib/components/data-table/themes/table/body/TableBody.svelte';
import TableBodyRow from '$lib/components/data-table/themes/table/body/TableBodyRow.svelte';
import TableBodyCell from '$lib/components/data-table/themes/table/body/TableBodyCell.svelte';
import TableHeader from '$lib/components/data-table/themes/table/header/TableHeader.svelte';
import TableHeaderRow from '$lib/components/data-table/themes/table/header/TableHeaderRow.svelte';
import TableHeaderCell from '$lib/components/data-table/themes/table/header/TableHeaderCell.svelte';
import TableHeaderIndicator from '$lib/components/data-table/themes/table/header/TableHeaderIndicator.svelte';
import TableBodyCheckbox from '$lib/components/data-table/themes/table/body/TableBodyCheckbox.svelte';
import TableHeaderCheckbox from '$lib/components/data-table/themes/table/header/TableHeaderCheckbox.svelte';
import TablePaginationContainer from '$lib/components/data-table/themes/table/controls/pagination/TablePaginationContainer.svelte';
import TableCountContainer from '$lib/components/data-table/themes/table/controls/count/TableCountContainer.svelte';
import TableCountButton from '$lib/components/data-table/themes/table/controls/count/TableCountButton.svelte';
import TableCountDisplay from '$lib/components/data-table/themes/table/controls/count/TableCountDisplay.svelte';
import TablePaginationSelect from '$lib/components/data-table/themes/table/controls/pagination/TablePaginationSelect.svelte';
import TablePaginationPrev from '$lib/components/data-table/themes/table/controls/pagination/TablePaginationPrev.svelte';
import TablePaginationNext from '$lib/components/data-table/themes/table/controls/pagination/TablePaginationNext.svelte';
import TableCountCurrent from '$lib/components/data-table/themes/table/controls/count/TableCountCurrent.svelte';
import TableControlsContainer from '$lib/components/data-table/themes/table/controls/TableControlsContainer.svelte';

const TableTheme: DataTableTheme = {
	container: Table,
	body: {
		container: TableBody,
		row: TableBodyRow,
		cell: TableBodyCell,
		checkbox: TableBodyCheckbox
	},
	header: {
		container: TableHeader,
		row: TableHeaderRow,
		cell: TableHeaderCell,
		indicator: TableHeaderIndicator,
		checkbox: TableHeaderCheckbox
	},
	controls: {
		container: TableControlsContainer,
		pagination: {
			container: TablePaginationContainer,
			select: TablePaginationSelect,
			prev: TablePaginationPrev,
			next: TablePaginationNext
		},
		count: {
			button: TableCountButton,
			container: TableCountContainer,
			current: TableCountCurrent,
			display: TableCountDisplay
		}
	}
};

export default TableTheme;
