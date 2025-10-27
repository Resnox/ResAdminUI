import type { Snippet } from 'svelte';
import type { ColumnDef } from '$lib/components/types.js';
import type { IdentifiableType, PaginationParams } from '$lib/services/providers/data/types.js';
import type { ChangeEventHandler, MouseEventHandler } from 'svelte/elements';

export interface GridContainerProps {
	children: Snippet;
}

export interface GridHeaderContainerProps {
	children?: Snippet<[]>;
}

export interface GridHeaderRowProps {
	children?: Snippet<[]>;
}

export interface GridHeaderCellProps {
	title?: string;
	onclick?: MouseEventHandler<HTMLElement>;
	sortable?: boolean;
	children?: Snippet<[]>;
}

export interface GridHeaderIndicatorProps {
	sortIndex: number;
	isDescending?: boolean;
}

export interface GridHeaderCheckboxProps {
	checked?: boolean;
	onchange?: () => void;
}

export interface GridBodyContainerProps {
	children?: Snippet<[]>;
}

export interface GridBodyRowProps {
	index: number;
	isOdd?: boolean;
	isSelected?: boolean;
	children?: Snippet<[]>;
}

export interface GridBodyCellProps {
	children?: Snippet<[]>;
	column: ColumnDef;
}

export interface GridBodyCheckboxProps {
	index?: number;
	value?: IdentifiableType;
	checked?: boolean;
	selectedRows: IdentifiableType[];
}

export interface GridControlsContainerProps {
	children?: Snippet<[]>;
}

export interface GridCountContainerProps {
	children?: Snippet<[]>;
}

export interface GridCountButtonProps {
	onclick: () => void;
}

export interface GridCountDisplayProps {
	count: number;
}

export interface GridCountCurrentProps {
	offset: number;
	limit: number;
    count?: number;
}

export interface GridPagingContainerProps {
	children?: Snippet<[]>;
}

export interface GridPagingSelectProps {
	onchange: ChangeEventHandler<HTMLElement>;
	sizes: number[];
}

export interface GridPagingPrevProps {
	onclick: () => void;
	disabled: boolean;
}

export interface GridPagingNextProps {
	onclick: () => void;
	disabled: boolean;
}
