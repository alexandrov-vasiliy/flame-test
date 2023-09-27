<script setup lang="ts">

import { getIdFromUrl } from '@/utils/getIdFromUrl'
import { ref, Ref } from 'vue'
import { People } from '@/types/People'
import { useDebounce } from '@/composables/useDebounce'
import { Api } from '@/api/Api'
import TextInput from '@/components/shared/TextInput.vue'

const searchModel: Ref<string> = ref('')
const searchedPeople: Ref<People[]> = ref([])

const onInput = useDebounce(search, 300)
async function search () {
  if (searchModel.value.trim().length) {
    searchedPeople.value = await Api.get<People[]>(`/people/?search=${searchModel.value}`)
  } else {
    searchedPeople.value = []
    searchModel.value = ''
  }
}

</script>

<template>
  <div class="search-input">
    <text-input v-model="searchModel" @input="onInput"/>
    <ul>
      <li v-for="people in searchedPeople"
          :key="people.url"
      >
        <router-link :to="`/peoples/${getIdFromUrl(people.url)}`">

          {{ people.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 35px;
  box-shadow: -1px 1px 9px 5px rgba(34, 60, 80, 0.2);
  border-radius: 20px;
}
li {
  list-style: none;
  cursor: pointer;
  width: 200px;
  border-bottom: 1px solid #eee;
  position: relative;
  padding: 10px;
}

.search-input {
  width: 200px;
  position: relative;
}
</style>
