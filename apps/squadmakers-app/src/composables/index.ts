import { reactive } from "vue"

export type TypeSearch = {
  text: string
  filters: string[]
  gender: string,
  isLoading: boolean
  trigger: () => void
}

const filters: TypeSearch = {
  text: '',
  filters: [],
  gender: 'all',
  isLoading: false,
  trigger: () => {}
}

export const useFilters = (cb?: () => void) => {
  const search = reactive(filters)

  if (cb) {
    search.trigger = cb
  }

  return {
    search,
    onSearchCharacters: () => search.trigger()
  }
}
