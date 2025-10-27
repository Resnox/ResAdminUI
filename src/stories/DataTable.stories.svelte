<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { mockDataProvider } from './example_dataprovider.js';
	import TableTheme from '$lib/components/data-table/themes/table/index.js';
	import CardTheme from '$lib/components/data-table/themes/card/index.js';
	import { FilterOperator, type FilterParam } from '$lib/services/providers/data/types.js';
	import DataTable from '$lib/components/DataTable.svelte';

	const { Story } = defineMeta({
		title: 'Components/DataTable',
		component: DataTable,
		tags: ['autodocs'],
		argTypes: {
			theme: {
				options: ['TableTheme', 'CardTheme'],
				control: { type: 'radio' },
				mapping: {
					TableTheme,
					CardTheme
				}
			}
		}
	});

	const defaultColumns = [
		{ field: 'id', label: 'ID', editable: false, sortable: true },
		{ field: 'name', label: 'Name', editable: true, sortable: true },
		{ field: 'category', label: 'Category', editable: false, sortable: true },
		{ field: 'status', label: 'Status', editable: false, sortable: true },
		{ field: 'value', label: 'Value', editable: true, sortable: false }
	];
</script>

<Story
	name="Default - First Page"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [],
		sorter: [],
		pagination: { offset: 0, limit: 10 }
	}}
/>

<Story
	name="Pagination - Second Page"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [],
		sorter: [],
		pagination: { offset: 10, limit: 10 }
	}}
/>

<Story
	name="Default - Checkboxes"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [],
		sorter: [],
		pagination: { offset: 10, limit: 10 },
		showCheckboxes: true
	}}
/>

<Story
	name="Filter - Category A"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [{ field: 'category', operator: FilterOperator.EQ, value: 'A' }],
		sorter: [],
		pagination: { offset: 0, limit: 10 }
	}}
/>

<Story
	name="Filter - Category B or C"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [{ field: 'category', operator: FilterOperator.IN, value: ['B', 'C'] }],
		sorter: [],
		pagination: { offset: 0, limit: 10 }
	}}
/>

<Story
	name="Filter - Status Active"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [{ field: 'status', operator: FilterOperator.EQ, value: 'Active' }],
		sorter: [],
		pagination: { offset: 0, limit: 10 }
	}}
/>

<Story
	name="Filter - Value Greater Than 500"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [{ field: 'value', operator: FilterOperator.GT, value: 500 }],
		sorter: [],
		pagination: { offset: 0, limit: 10 }
	}}
/>

<Story
	name="Filter - Search by Name"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [{ field: 'name', operator: FilterOperator.LIKE, value: 'A' }],
		sorter: [],
		pagination: { offset: 0, limit: 10 }
	}}
/>

<Story
	name="Sort - By Name Ascending"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [],
		sorter: [{ field: 'name', order: 'ASC' }],
		pagination: { offset: 0, limit: 10 }
	}}
/>

<Story
	name="Sort - By Value Descending"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [],
		sorter: [{ field: 'value', order: 'DESC' }],
		pagination: { offset: 0, limit: 10 }
	}}
/>

<Story
	name="Sort - By Category then Name"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [],
		sorter: [
			{ field: 'category', order: 'ASC' },
			{ field: 'name', order: 'ASC' }
		],
		pagination: { offset: 0, limit: 10 }
	}}
/>

<Story
	name="Combined - Filter + Sort + Pagination"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [{ field: 'status', operator: FilterOperator.EQ, value: 'Active' }],
		sorter: [{ field: 'value', order: 'DESC' }],
		pagination: { offset: 0, limit: 5 }
	}}
/>

<Story
	name="Large Dataset"
	args={{
		columns: defaultColumns,
		dataProvider: mockDataProvider,
		resource: 'items',
		filters: [],
		sorter: [],
		pagination: { offset: 0, limit: 50 }
	}}
/>
