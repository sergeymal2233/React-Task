export type Filters<T> = {
  per_page: number
  sort?: keyof T
  direction?: 'asc' | 'desc'
}
