import { displayPeople } from '@/types/People'

export interface PeopleState {
  peoplesList: displayPeople[]
  isLoading: boolean
}

export interface FavoriteState {
  favoriteList: displayPeople[]
}

export interface RootState {
  peoples: PeopleState,
  favorites: FavoriteState
}
