<script setup lang="ts">

import PeopleTable from '@/components/peoples/PeopleTable.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const { getters } = useStore()
const favoriteList = computed(() => getters.favoriteList)
</script>

<template>
  <people-table :peoples-list="favoriteList" button-header-text="Remove favorite"/>
</template>

<style scoped>

</style>
