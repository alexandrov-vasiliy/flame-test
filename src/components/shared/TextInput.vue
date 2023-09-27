<script setup lang="ts">

import { EMITS } from '@/constants/emits'

interface Props {
  modelValue?: string
}

defineProps<Props>()
const emit = defineEmits([EMITS.MODEL])
function onInput (event: InputEvent) {
  emit(EMITS.MODEL, (event.target as HTMLInputElement).value)
}
</script>

<template>
<div class="search-input">
  <input type="text"
         :value="modelValue"
         @input="onInput"
  >
</div>
</template>

<style scoped>
input {
  padding: 5px 15px;
  border-radius: 22px;
}
</style>
