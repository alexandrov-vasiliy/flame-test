import { Module } from 'vuex'
import { displayPeople, People } from '@/types/People'
import { Api } from '@/api/Api'
import { PeopleState, RootState } from '@/types/store'
import { peoplesToDisplay } from '@/utils/peoplesToDisplay'

export const peoplesModule: Module<PeopleState, RootState> = {
  state: {
    peoplesList: [],
    isLoading: false
  },
  getters: {
    peoplesList: (state: PeopleState) => state.peoplesList,
    isLoading: (state: PeopleState) => state.isLoading
  },
  mutations: {
    setPeoplesList (state: PeopleState, peoplesList: displayPeople[]) {
      state.peoplesList = peoplesList
    },
    loadingStart (state: PeopleState) {
      state.isLoading = true
    },
    loadingEnd (state: PeopleState) {
      state.isLoading = false
    }
  },
  actions: {
    async fetchPeoples ({
      commit,
      rootState
    }) {
      try {
        commit('loadingStart')
        const peoples: People[] = await Api.get<People[]>('/people')

        const displayPeople: displayPeople[] = peoplesToDisplay(peoples, rootState.favorites.favoriteList)
        commit('setPeoplesList', displayPeople)
      } finally {
        commit('loadingEnd')
      }
    }
  }
}
