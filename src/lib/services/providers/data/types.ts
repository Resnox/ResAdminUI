export type RecordType = Record<string, any>;
export type IdentifierType = number | string;
export interface IdentifiableType extends RecordType {
	id: IdentifierType;
}

export enum FilterOperator {
	EQ = 'eq',
	NEQ = 'neq',
	GT = 'gt',
	GTE = 'gte',
	LT = 'lt',
	LTE = 'lte',
	IN = 'in',
	NOT_IN = 'not_in',
	IS_NULL = 'is_null',
	IS_NOT_NULL = 'is_not_null',
	LIKE = 'like',
	NOT_LIKE = 'not_like'
}

export interface FilterParam {
	operator: FilterOperator;
	field: string;
	value: unknown;
}

export interface PaginationParams {
	offset: number;
	limit: number;
}

export interface SorterParam {
	field: string;
	order?: 'ASC' | 'DESC';
	nullFirst?: boolean;
}

export interface GetListResult<RecordType = any> {
	data: RecordType[];
	count?: number;
	pageInfo: {
		hasMore: boolean;
		previousOffset: number;
		nextOffset: number;
	};
}

export interface GetCountResult {
	count: number;
}

export interface GetParams {
	id: IdentifierType;
	meta?: any;
}

export interface GetResult<RecordType = any> {
	data: RecordType;
}

export interface UpdateParams<RecordType = any> {
	id: IdentifierType;
	data: Partial<RecordType> | FormData;
	meta?: any;
}

export interface UpdateResult<RecordType = any> {
	data: RecordType;
}

export interface CreateParams<RecordType = any> {
	data: Partial<RecordType> | FormData;
	meta?: any;
}

export interface CreateResult<RecordType = any> {
	data: RecordType;
}

export interface DeleteParams {
	id: IdentifierType;
	meta?: any;
}

export interface DeleteResult<RecordType = any> {
	data: RecordType;
}

export type DataProvider<
	DataType extends IdentifiableType = IdentifiableType,
	ResourceType extends string = string
> = {
	getList: (
		resource: ResourceType,
		pagination: PaginationParams,
		sorters: SorterParam[],
		filters: FilterParam[],
		meta?: RecordType
	) => Promise<GetListResult<DataType>>;

	getCount: (
		resource: ResourceType,
		filters: FilterParam[],
		meta?: RecordType
	) => Promise<GetCountResult>;

	get: (
		resource: ResourceType,
		id: IdentifierType,
		meta?: RecordType
	) => Promise<GetResult<DataType>>;

	update: (
		resource: ResourceType,
		id: IdentifierType,
		data: unknown,
		meta?: RecordType
	) => Promise<UpdateResult<DataType>>;

	patch: (
		resource: ResourceType,
		id: IdentifierType,
		data: unknown,
		meta?: RecordType
	) => Promise<UpdateResult<DataType>>;

	create: <ResultDataType extends DataType = DataType & { id: IdentifierType }>(
		resource: ResourceType,
		data: unknown,
		meta?: RecordType
	) => Promise<CreateResult<ResultDataType>>;

	delete: (
		resource: ResourceType,
		id: IdentifierType,
		meta?: RecordType
	) => Promise<DeleteResult<DataType>>;
};
