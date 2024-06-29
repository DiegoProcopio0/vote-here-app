<script setup lang="ts">
  defineProps({
    routePush: {
      type: String,
      required: true,
      validator(value: string): boolean {
        if (value[0] !== '/') return false
        return true
      },
    },
  })
</script>

<template>
  <li
    class="p-2 cursor-pointer hover:bg-gray-800 transition-all ease-out delay-75 rounded"
  >
    <a @click="$router.push(`${routePush}`)"><slot></slot></a>
  </li>
</template>
