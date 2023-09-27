import { displayPeople, People } from '@/types/People'

export function peoplesToDisplay (peoples: People[], favoriteList: People[]): displayPeople[] {
  return peoples.map((people: People) => getDisplayPeople(people, favoriteList))
}

export function getDisplayPeople (people: People, favoriteList: People[]) {
  return {
    ...people,
    inFavorite: !!favoriteList.find((favorite) => favorite.url === people.url)
  }
}
