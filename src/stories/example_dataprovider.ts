import type {
	DataProvider,
	FilterParam,
	PaginationParams,
	SorterParam,
	GetListResult,
	GetCountResult,
	GetResult,
	UpdateResult,
	CreateResult,
	DeleteResult,
	IdentifierType,
	RecordType
} from '$lib/services/providers/data/types.js';

export interface MockItem {
	id: number;
	name: string;
	category: string;
	status: string;
	value: number;
	description: string;
}

// Générateur de données mock
function generateMockData(count: number = 100): MockItem[] {
	const categories = ['A', 'B', 'C', 'D', 'E'];
	const statuses = ['Active', 'Inactive', 'Pending', 'Archived'];

	return Array.from({ length: count }, (_, index) => {
		const id = index + 1;
		const categoryIndex = index % categories.length;
		const statusIndex = index % statuses.length;

		return {
			id,
			name: `Item ${String.fromCharCode(65 + (index % 26))}${Math.floor(index / 26) + 1}`,
			category: categories[categoryIndex],
			status: statuses[statusIndex],
			value: (index + 1) * 10,
			description: `Description for item ${id} in category ${categories[categoryIndex]}`
		};
	});
}

// Store de données en mémoire
let mockData: MockItem[] = generateMockData(100);

// Helper pour appliquer les filtres
function applyFilters<T extends Record<string, any>>(data: T[], filters: FilterParam[]): T[] {
	return data.filter((item) => {
		return filters.every((filter) => {
			const value = item[filter.field];

			switch (filter.operator) {
				case 'eq':
					return value === filter.value;
				case 'neq':
					return value !== filter.value;
				case 'gt':
					return value > filter.value;
				case 'gte':
					return value >= filter.value;
				case 'lt':
					return value < filter.value;
				case 'lte':
					return value <= filter.value;
				case 'in':
					return Array.isArray(filter.value) && filter.value.includes(value);
				case 'not_in':
					return Array.isArray(filter.value) && !filter.value.includes(value);
				case 'is_null':
					return value === null || value === undefined;
				case 'is_not_null':
					return value !== null && value !== undefined;
				case 'like':
					return String(value).toLowerCase().includes(String(filter.value).toLowerCase());
				case 'not_like':
					return !String(value).toLowerCase().includes(String(filter.value).toLowerCase());
				default:
					return true;
			}
		});
	});
}

// Helper pour appliquer le tri
function applySorters<T extends Record<string, any>>(data: T[], sorters: SorterParam[]): T[] {
	if (sorters.length === 0) return data;

	return [...data].sort((a, b) => {
		for (const sorter of sorters) {
			const aValue = a[sorter.field];
			const bValue = b[sorter.field];

			// Gestion des null
			if (aValue === null || aValue === undefined) {
				return sorter.nullFirst ? -1 : 1;
			}
			if (bValue === null || bValue === undefined) {
				return sorter.nullFirst ? 1 : -1;
			}

			// Comparaison
			let comparison = 0;
			if (aValue < bValue) comparison = -1;
			if (aValue > bValue) comparison = 1;

			if (comparison !== 0) {
				return sorter.order === 'DESC' ? -comparison : comparison;
			}
		}
		return 0;
	});
}

// Helper pour appliquer la pagination
function applyPagination<T>(data: T[], pagination: PaginationParams): T[] {
	const offset = pagination.offset || 0;
	const limit = pagination.limit;

	if (limit === undefined) return data.slice(offset);
	return data.slice(offset, offset + limit);
}

export const mockDataProvider: DataProvider = {
	async getList(
		resource: string,
		pagination: PaginationParams,
		sorters: SorterParam[],
		filters: FilterParam[],
		meta?: RecordType
	): Promise<GetListResult> {
		let filteredData = applyFilters(mockData, filters);
		const totalCount = filteredData.length;

		filteredData = applySorters(filteredData, sorters);

		const offset = pagination.offset || 0;
		const limit = pagination.limit || 20;
		const paginatedData = applyPagination(filteredData, pagination);

		return {
			data: paginatedData as RecordType[],
			count: totalCount,
			pageInfo: {
				hasMore: offset + limit < totalCount,
				previousOffset: Math.max(0, offset - limit),
				nextOffset: offset + limit
			}
		};
	},

	async getCount(
		resource: string,
		filters: FilterParam[],
		meta?: RecordType
	): Promise<GetCountResult> {
		await new Promise((resolve) => setTimeout(resolve, 100));

		const filteredData = applyFilters(mockData, filters);

		return {
			count: filteredData.length
		};
	},

	async get(resource: string, id: IdentifierType, meta?: RecordType): Promise<GetResult> {
		await new Promise((resolve) => setTimeout(resolve, 100));

		const item = mockData.find((item) => item.id === id);

		if (!item) {
			throw new Error(`Item with id ${id} not found`);
		}

		return {
			data: item
		};
	},

	async update(
		resource: string,
		id: IdentifierType,
		data: unknown,
		meta?: RecordType
	): Promise<UpdateResult> {
		await new Promise((resolve) => setTimeout(resolve, 200));

		const index = mockData.findIndex((item) => item.id === id);

		if (index === -1) {
			throw new Error(`Item with id ${id} not found`);
		}

		mockData[index] = { ...mockData[index], ...(data as Partial<MockItem>) };

		return {
			data: mockData[index]
		};
	},

	async patch(
		resource: string,
		id: IdentifierType,
		data: unknown,
		meta?: RecordType
	): Promise<UpdateResult> {
		await new Promise((resolve) => setTimeout(resolve, 200));

		const index = mockData.findIndex((item) => item.id === id);

		if (index === -1) {
			throw new Error(`Item with id ${id} not found`);
		}

		mockData[index] = { ...mockData[index], ...(data as Partial<MockItem>) };

		return {
			data: mockData[index]
		};
	},

	async create(resource: string, data: unknown, meta?: RecordType): Promise<CreateResult> {
		await new Promise((resolve) => setTimeout(resolve, 200));

		const newId = Math.max(...mockData.map((item) => item.id), 0) + 1;
		const newItem: MockItem = {
			id: newId,
			...(data as Omit<MockItem, 'id'>)
		};

		mockData.push(newItem);

		return {
			data: newItem
		};
	},

	async delete(resource: string, id: IdentifierType, meta?: RecordType): Promise<DeleteResult> {
		await new Promise((resolve) => setTimeout(resolve, 200));

		const index = mockData.findIndex((item) => item.id === id);

		if (index === -1) {
			throw new Error(`Item with id ${id} not found`);
		}

		const deletedItem = mockData[index];
		mockData.splice(index, 1);

		return {
			data: deletedItem
		};
	}
};

// Helper pour régénérer les données (utile pour les stories)
export function resetMockData(count: number = 100): void {
	mockData = generateMockData(count);
}

// Helper pour obtenir toutes les données (pour debug)
export function getAllMockData(): MockItem[] {
	return [...mockData];
}
