<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed, ComputedRef, onMounted, Ref, ref } from 'vue'
import { displayPeople, People } from '@/types/People'
import AppTable from '@/components/shared/AppTable.vue'
import { useStore } from 'vuex'
import { PeopleApi } from '@/api/PeopleApi'
import { getDisplayPeople } from '@/utils/peoplesToDisplay'

const route = useRoute()
const peopleData: Ref<displayPeople[]> = ref([])
const store = useStore()

const peoplesLabels: ComputedRef<Array<(keyof displayPeople)>> = computed(() => {
  if (!peopleData.value.length) return []
  const keys = Object.keys(peopleData.value[0])
  keys.pop()
  return keys as Array<(keyof displayPeople)>
})

const favoriteList: ComputedRef<displayPeople[]> = computed(() => store.getters.favoriteList)

function addFavorite (people: displayPeople) {
  store.commit('addFavorite', people)
}

onMounted(async () => {
  const people = await PeopleApi.get<People>(`/people/${route.params.id}`)
  const displayPeople: displayPeople = getDisplayPeople(people, favoriteList.value)

  peopleData.value.push(displayPeople)
})
</script>

<template>
  <div>
    <app-table :data="peopleData" :labels="peoplesLabels">
      <template v-slot:additional-head>
        <th v-if="!peopleData[0].inFavorite">
          Add
          Favorite
        </th>
      </template>
      <template v-slot:additional-row="{row}">
        <td v-if="!row?.inFavorite">
          <button @click="addFavorite(row)">Add Favorite</button>
        </td>
      </template>
    </app-table>
  </div>
</template>

<style scoped>

</style>
