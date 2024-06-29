<script setup lang="ts"></script>

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
      <div class="text-900 text-3xl font-medium mb-3">Bem vindo de volta</div>
      <span class="text-600 font-medium line-height-3">Não tem uma conta?</span>
      <a
        @click="$router.push('/register')"
        class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >Crie agora!</a
      >
    </div>

    <div>
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
      <Button label="Login" icon="pi pi-user" class="w-full"></Button>
    </div>
  </div>
</template>
