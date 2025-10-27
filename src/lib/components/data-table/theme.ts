import type { Component } from 'svelte';
import type {
	GridBodyCellProps,
	GridBodyCheckboxProps,
	GridBodyContainerProps,
	GridBodyRowProps,
	GridContainerProps,
	GridControlsContainerProps,
	GridCountButtonProps,
	GridCountContainerProps,
	GridCountCurrentProps,
	GridCountDisplayProps,
	GridHeaderCellProps,
	GridHeaderCheckboxProps,
	GridHeaderContainerProps,
	GridHeaderIndicatorProps,
	GridHeaderRowProps,
	GridPagingContainerProps,
	GridPagingNextProps,
	GridPagingPrevProps,
	GridPagingSelectProps
} from '$lib/components/data-table/props.js';

export declare type GridContainer = Component<GridContainerProps>;
export declare type GridBodyContainer = Component<GridBodyContainerProps>;
export declare type GridBodyRow = Component<GridBodyRowProps>;
export declare type GridBodyCell = Component<GridBodyCellProps>;
export declare type GridBodyCheckbox = Component<GridBodyCheckboxProps>;
export declare type GridHeaderContainer = Component<GridHeaderContainerProps>;
export declare type GridHeaderRow = Component<GridHeaderRowProps>;
export declare type GridHeaderCheckbox = Component<GridHeaderCheckboxProps>;
export declare type GridHeaderCell = Component<GridHeaderCellProps>;
export declare type GridHeaderIndicator = Component<GridHeaderIndicatorProps>;
export declare type GridPagingContainer = Component<GridPagingContainerProps>;
export declare type GridControlsContainer = Component<GridControlsContainerProps>;
export declare type GridCountContainer = Component<GridCountContainerProps>;
export declare type GridCountButton = Component<GridCountButtonProps>;
export declare type GridCountDisplay = Component<GridCountDisplayProps>;
export declare type GridCountCurrent = Component<GridCountCurrentProps>;
export declare type GridPagingSelect = Component<GridPagingSelectProps>;
export declare type GridPagingPrev = Component<GridPagingPrevProps>;
export declare type GridPagingNext = Component<GridPagingNextProps>;

export type DataTableTheme = {
	container: GridContainer;
	header: {
		container: GridHeaderContainer;
		row: GridHeaderRow;
		cell: GridHeaderCell;
		indicator: GridHeaderIndicator;
		checkbox: GridHeaderCheckbox;
	};
	body: {
		container: GridBodyContainer;
		row: GridBodyRow;
		cell: GridBodyCell;
		checkbox: GridBodyCheckbox;
	};
	controls: {
		container: GridControlsContainer;
		pagination: {
			container: GridPagingContainer;
			select: GridPagingSelect;
			prev: GridPagingPrev;
			next: GridPagingNext;
		};
		count: {
			container: GridCountContainer;
			current: GridCountCurrent;
			button: GridCountButton;
			display: GridCountDisplay;
		};
	};
};
