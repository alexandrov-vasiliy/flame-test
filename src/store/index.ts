import { createStore } from 'vuex'
import { peoplesModule } from '@/store/peoplesModule'
import { RootState } from '@/types/store'
import { favoritesModule } from '@/store/favoritesModule'

export default createStore<RootState>({
  modules: {
    peoples: peoplesModule,
    favorites: favoritesModule
  }
})
