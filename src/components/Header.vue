<script setup lang="ts">
  import NavItem from './NavItem.vue'

  const linkItems = [
    { label: 'Pagina Inicial', route: '/' },
    { label: 'Meu Perfil', route: '/profile' },
    { label: 'Criar votação', route: '/create-poll' },
  ]
</script>

<template>
  <header class="bg-zinc-900 p-4 flex justify-between items-center">
    <nav>
      <ul class="flex flex-col gap-2 items-start sm:flex-row sm:items-center">
        <NavItem v-for="linkItem in linkItems" :routePush="linkItem.route">{{
          linkItem.label
        }}</NavItem>
      </ul>
    </nav>

    <div class="flex flex-col gap-2 items-end sm:flex-row sm:items-center">
      <Button
        label="Registrar"
        class="p-button-outlined"
        icon="pi pi-user"
        @click="$router.push('/register')"
      ></Button>
      <Button
        label="Login"
        icon="pi pi-user"
        @click="$router.push('/login')"
      ></Button>
    </div>
  </header>
</template>
