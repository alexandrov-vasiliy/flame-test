import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleView from '@/views/PeopleView.vue'
import PeoplesView from '@/views/PeoplesView.vue'
import FavoritesView from '@/views/FavoritesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/peoples',
    name: 'peoples',
    component: PeoplesView
  },
  {
    path: '/peoples/:id',
    name: 'people',
    component: PeopleView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
