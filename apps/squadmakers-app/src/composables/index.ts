import { reactive } from "vue"

export type TypeSearch = {
  text: string
  filters: string[]
  isLoading: boolean
  trigger: () => void
}

const filters: TypeSearch = {
  text: '',
  filters: [],
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
