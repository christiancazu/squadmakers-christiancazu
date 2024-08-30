import { reactive } from "vue"

export type TypeFilters = {
  name: string
  status: string
  species: string
  type: string
  isLoading: boolean
  onSearch: () => void
}

const _filters: TypeFilters = {
  name: '',
  status: '',
  species: '',
  type: '',
  isLoading: false,
  onSearch: () => {}
}

export const useFilters = (cb?: () => void) => {
  const filters = reactive(_filters)

  if (cb) {
    filters.onSearch = cb
  }

  return {
    filters,
    onSearchCharacters: () => filters.onSearch()
  }
}
