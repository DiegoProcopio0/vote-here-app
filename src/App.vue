<script setup lang="ts">
  import Header from './components/Header.vue'
</script>

<template>
  <div class="h-full">
    <Header />
    <main>
      <RouterView />
    </main>
    <Toast position="bottom-right" group="br" />
  </div>
</template>
