<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AppTable from '@/components/shared/AppTable.vue'
import { displayPeople } from '@/types/People'
import { RootState } from '@/types/store'
import { peopleLabels } from '@/constants/peopleLabels'

interface Props {
  peoplesList: displayPeople[]
  buttonHeaderText: string
}

defineProps<Props>()
const store = useStore<RootState>()

function addAndRemoveFavorite (people: displayPeople) {
  store.dispatch('toggleFavorite', people)
}

const btnText = computed(() => {
  return (people: displayPeople) => people.inFavorite ? 'Remove Favorite' : 'Add Favorite'
})

</script>

<template>
  <div class="people-table">
    <app-table :data="peoplesList" :labels="peopleLabels">
      <template v-slot:additional-head>
        <th>
          {{
            buttonHeaderText
          }}
        </th>
      </template>
      <template v-slot:additional-row="{row}">
        <td>
          <button @click="addAndRemoveFavorite(row)">{{ btnText(row) }}</button>
        </td>
      </template>
    </app-table>
  </div>
</template>

<style scoped>
.people-table {
  display: flex;
  justify-content: center;
}
</style>
