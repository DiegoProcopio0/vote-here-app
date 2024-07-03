<script setup lang="ts">
  import { useToast } from 'primevue/usetoast'
  import { useRouter } from 'vue-router'
  import { useField, useForm } from 'vee-validate'
  import { toTypedSchema } from '@vee-validate/zod'
  import { registerSchema } from '../schemas'
  import { ref } from 'vue'
  import Input from '../components/Input.vue'
  import { useLoginStore } from '../stores'

  const { signIn } = useLoginStore()

  const validationSchema = toTypedSchema(registerSchema.omit({ nome: true }))
  const { handleSubmit, errors } = useForm({ validationSchema })

  const { value: email } = useField('email')
  const { value: senha } = useField('senha')

  let loading = ref(false)

  const verifyIfExistError = () => {
    if (Object.keys(errors).length > 0) {
      loading.value = true
    }
    loading.value = false
  }

  const showErrors = (errors: string[]) => {
    errors.map((error) => {
      toast.add({
        severity: 'error',
        summary: 'Erro ao autenticar Usuário!',
        detail: error,
        group: 'br',
        life: 9000,
      })
    })
  }

  const onSubmit = handleSubmit(async ({ email, senha }) => {
    verifyIfExistError()
    if (loading.value) return

    const result = await signIn(email, senha)

    if (result.errors) {
      showErrors(result.errors)
      return
    }

    showMessageAndRedirect()
  })

  const router = useRouter()
  const toast = useToast()

  const showBottomRight = () => {
    toast.add({
      severity: 'success',
      summary: 'Usuário Logado com sucesso',
      detail: 'Agora é possível criar enquetes',
      group: 'br',
      life: 3000,
    })
  }

  const showMessageAndRedirect = () => {
    showBottomRight()
    router.push('/')
  }
</script>

<template>
  <main
    class="surface-card p-4 shadow-2 border-round w-full custom-height flex flex-col justify-center items-center mx-auto"
  >
    <header class="text-center mb-5">
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
    </header>

    <form @submit="onSubmit" class="md:w-1/2 w-full max-w-xl">
      <Input
        type="email"
        description="Email"
        placeholder="Endereço de email"
        id="email"
        v-model="email"
        :error="errors.email"
      />
      <Input
        type="password"
        description="Senha"
        placeholder="Senha"
        id="password"
        v-model="senha"
        :error="errors.senha"
      />
      <Button
        @click="onSubmit"
        label="Login"
        icon="pi pi-user"
        class="w-full mt-2"
        :disabled="Object.keys(errors).length > 0"
      ></Button>
    </form>
  </main>
</template>
