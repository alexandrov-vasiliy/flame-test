<script lang="ts" setup>

import PeopleTable from '@/components/peoples/PeopleTable.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

const isLoading = computed(() => store.getters.isLoading)
const peopleList = computed(() => store.getters.peoplesList)
onMounted(() => {
  if (!store.getters.peoplesList.length) {
    store.dispatch('fetchPeoples')
  }
})
</script>

<template>
  <div>
    <div v-if="isLoading">Loading ...</div>
    <people-table v-else :peoples-list="peopleList" button-header-text="Add Favorite/Remove favorite"/>
  </div>
</template>

<style scoped>

</style>
