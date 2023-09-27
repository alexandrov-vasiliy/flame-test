<script setup generic="T" lang="ts">
defineProps<{
  data: T[],
  labels: Array<(keyof T)>
}>()
</script>

<template>
  <div class="app-table">
    <table v-if="data?.length">
      <tr>
        <th v-for="peoplesLabel in labels" :key="peoplesLabel">
          {{ peoplesLabel }}
        </th>
        <slot name="additional-head"></slot>
      </tr>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="label in labels" :key="label" >
          {{row[label]}}
        </td>
        <slot name="additional-row" :row="row"></slot>
      </tr>
    </table>
  </div>

</template>

<style>
.app-table {
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
}

td, th {
  border: 1px solid #ddd;
  padding: 8px;
  min-width: 10rem;
}

tr:hover {
  background-color: #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
