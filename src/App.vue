<script lang="ts" setup>
import NavigationMenu from '@/components/shared/NavigationMenu.vue'
import { useStore } from 'vuex'
import { computed, onMounted, watch } from 'vue'
import { LocalStorageKeys } from '@/constants/localStorageKeys'

const store = useStore()
const favoriteList = computed(() => store.getters.favoriteList)
onMounted(() => {
  store.dispatch('initFavoriteList')
})

watch(favoriteList, (value) => {
  console.log('watch favorite', favoriteList.value)
  localStorage.setItem(LocalStorageKeys.FAVORITES, JSON.stringify(value))
}, { deep: true })

</script>

<template>
  <div>
    <navigation-menu/>
    <div class="container">

      <router-view/>
    </div>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  margin: 40px auto;
  max-width: 1300px;
}
</style>
