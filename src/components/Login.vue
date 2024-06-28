<script setup lang="ts"></script>

<template>
  <div
    class="surface-card p-4 shadow-2 border-round w-1/2 h-screen flex flex-col justify-center items-center mx-auto"
  >
    <div class="text-center mb-5">
      <img
        src="../assets/vue.svg"
        alt="Image"
        height="50"
        class="mb-3 mx-auto"
      />
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      <span class="text-600 font-medium line-height-3"
        >Don't have an account?</span
      >
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >Create today!</a
      >
    </div>

    <div>
      <label for="email1" class="block text-900 font-medium mb-2">Email</label>
      <InputText
        id="email1"
        type="text"
        placeholder="Email address"
        class="w-full mb-3"
      />

      <label for="password1" class="block text-900 font-medium mb-2"
        >Password</label
      >
      <InputText
        id="password1"
        type="password"
        placeholder="Password"
        class="w-full mb-3"
      />
      <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
    </div>
  </div>
</template>
