<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref('')
</script>

<template>
  <main
    class="surface-card px-4 pt-6 shadow-2 border-round w-full h-full flex flex-col justify-center items-center mx-auto"
  >
    <header
      class="flex justify-between items-center gap-6 w-full px-4 flex-col md:flex-row"
    >
      <h1 class="text-xl md:text-2xl text-center text-bold">
        Visualize as melhores perguntas do momento!
      </h1>
      <div class="flex items-center gap-2">
        <IconField class="max-w-">
          <InputIcon class="pi pi-search" />
          <InputText v-model="value1" placeholder="Search" />
        </IconField>
        <Button label="Pesquisar" icon="pi pi-search"></Button>
      </div>
    </header>
  </main>
</template>
