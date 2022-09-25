export type Attribute<T> = {
  attributes: T
  id: number
}

export type StrapiCore<T> = {
  data: Array<Attribute<T>>
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}
