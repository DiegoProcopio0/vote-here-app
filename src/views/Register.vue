<script setup lang="ts">
  import { useToast } from 'primevue/usetoast'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const toast = useToast()

  const showBottomRight = () => {
    toast.add({
      severity: 'success',
      summary: 'Usuário cadastrado com sucesso',
      detail: 'Faça login para criar enquetes',
      group: 'br',
      life: 3000,
    })
  }

  const registerUser = () => {
    showBottomRight()
    router.push('/login')
  }
</script>

<template>
  <div
    class="surface-card p-4 shadow-2 border-round w-full custom-height flex flex-col justify-center items-center mx-auto"
  >
    <div class="text-center mb-5">
      <img
        src="../assets/hyper.svg"
        alt="Image"
        height="50"
        class="mb-3 mx-auto"
      />
      <div class="text-900 text-3xl font-medium mb-3">Cadastrar conta</div>
      <span class="text-600 font-medium line-height-3">Já tem uma conta?</span>
      <a
        @click="$router.push('/login')"
        class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >Faça login agora!</a
      >
    </div>

    <div>
      <label for="nome" class="block text-900 font-medium mb-2">Nome</label>
      <InputText
        id="nome"
        type="text"
        placeholder="Node de usuário"
        class="w-full mb-3"
      />
      <label for="email1" class="block text-900 font-medium mb-2">Email</label>
      <InputText
        id="email1"
        type="email"
        placeholder="Endereço de email"
        class="w-full mb-3"
      />

      <label for="password1" class="block text-900 font-medium mb-2"
        >Senha</label
      >
      <InputText
        id="password1"
        type="password"
        placeholder="Senha"
        class="w-full mb-3"
      />
      <Button
        @click="registerUser"
        label="Cadastrar"
        icon="pi pi-user"
        class="w-full"
      ></Button>
    </div>
  </div>
</template>
