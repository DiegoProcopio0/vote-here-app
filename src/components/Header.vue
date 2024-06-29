<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const routerToPush = (route: string) => {
    router.push(`${route}`)
  }
</script>

<template>
  <header class="bg-zinc-900 p-4 flex justify-between items-center">
    <nav>
      <ul class="flex gap-2 items-center">
        <li
          class="p-2 cursor-pointer hover:bg-gray-800 transition-all ease-out delay-75 rounded"
        >
          <a @click="routerToPush('/')">Pagina Inicial</a>
        </li>
        <li
          class="p-2 cursor-pointer hover:bg-gray-800 transition-all ease-out delay-75 rounded"
        >
          <a @click="routerToPush('/login')">Meu Perfil</a>
        </li>
        <li
          class="p-2 cursor-pointer hover:bg-gray-800 transition-all ease-out delay-75 rounded"
        >
          <a @click="routerToPush('/login')">Criar votação</a>
        </li>
      </ul>
    </nav>

    <div>
      <Button
        label="Registrar"
        class="p-button-outlined mr-2"
        icon="pi pi-user"
      ></Button>
      <Button
        label="Login"
        icon="pi pi-user"
        @click="routerToPush('/login')"
      ></Button>
    </div>
  </header>
</template>
