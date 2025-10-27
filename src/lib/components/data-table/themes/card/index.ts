import type { DataTableTheme } from '$lib/components/data-table/theme.js';
import CardContainer from '$lib/components/data-table/themes/card/CardContainer.svelte';
import Card from '$lib/components/data-table/themes/card/body/Card.svelte';
import CardRow from '$lib/components/data-table/themes/card/body/CardRow.svelte';
import CardValue from '$lib/components/data-table/themes/card/body/CardValue.svelte';
import CardHeader from '$lib/components/data-table/themes/card/header/CardHeader.svelte';
import CardHeaderRow from '$lib/components/data-table/themes/card/header/CardHeaderRow.svelte';
import CardHeaderCell from '$lib/components/data-table/themes/card/header/CardHeaderCell.svelte';
import CardHeaderIndicator from '$lib/components/data-table/themes/card/header/CardHeaderIndicator.svelte';
import TableBodyCheckbox from '$lib/components/data-table/themes/table/body/TableBodyCheckbox.svelte';
import TableHeaderCheckbox from '$lib/components/data-table/themes/table/header/TableHeaderCheckbox.svelte';
import TableTheme from '$lib/components/data-table/themes/table/index.js';
import {deepMerge} from "$lib/utils/deepmerge.js";

const CardTheme: DataTableTheme = deepMerge(
    TableTheme,
    {
        container: CardContainer,
        body: {
            container: Card,
            row: CardRow,
            cell: CardValue,
        },
        header: {
            container: CardHeader,
            row: CardHeaderRow,
            cell: CardHeaderCell,
            indicator: CardHeaderIndicator,
        },
    },
);


export default CardTheme;
