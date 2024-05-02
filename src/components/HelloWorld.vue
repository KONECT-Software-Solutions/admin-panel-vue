<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
  title: {
    type: String,
    default: 'Hello World'
  },
  count: Number
})
defineEmits(['update'])
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="">
    <button type="button" @click="$emit('update')">count is {{ count }}</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
