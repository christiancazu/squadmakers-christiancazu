export type Filters = {
  gender: FilterGenter
  type: FilterType
  status: FilterStatus
  especies: FilterSpecies
}

export type FilterGenter = 'all' | 'unknown' | 'female' | 'male' | 'genderless'
export type FilterType = 'Planet' | 'Space station' | 'Dimension' | 'Rick\'s Toxic Side'
export type FilterStatus = 'alive' | 'dead' | 'unknown'
export type FilterSpecies = 'Human' | 'Humanoid'
