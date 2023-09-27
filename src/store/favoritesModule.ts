import { Module } from 'vuex'
import { displayPeople } from '@/types/People'
import { FavoriteState, RootState } from '@/types/store'
import { LocalStorageKeys } from '@/constants/localStorageKeys'

export const favoritesModule: Module<FavoriteState, RootState> = {
  state: {
    favoriteList: []
  },
  getters: {
    favoriteList: (state: FavoriteState) => state.favoriteList
  },
  mutations: {
    addFavorite (state: FavoriteState, people: displayPeople) {
      people.inFavorite = true
      state.favoriteList.push(people)
    },
    removeFavorite (state: FavoriteState, people: displayPeople) {
      people.inFavorite = false
      state.favoriteList = state.favoriteList.filter((favoritePeople) => favoritePeople.url !== people.url)
    }
  },
  actions: {
    initFavoriteList ({ state }) {
      const fromStorage = localStorage.getItem(LocalStorageKeys.FAVORITES)
      if (fromStorage) {
        state.favoriteList = JSON.parse(fromStorage)
      }
    },
    toggleFavorite ({ commit }, people: displayPeople) {
      if (people.inFavorite) {
        commit('removeFavorite', people)
      } else {
        commit('addFavorite', people)
      }
    }
  }
}
