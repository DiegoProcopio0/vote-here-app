<script setup lang="ts">
  import { InputTypeHTMLAttribute } from 'vue'

  defineProps({
    type: {
      type: String as () => InputTypeHTMLAttribute,
      required: true,
      default: 'text',
    },
    id: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    error: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: false,
    },
  })

  const emit = defineEmits(['update:modelValue'])

  const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
  }
</script>

<template>
  <div :class="[error ? 'mb-1' : 'mb-4']">
    <label :for="id" class="block text-900 font-medium mb-2">{{
      description
    }}</label>
    <InputText
      :id="id"
      :type="type"
      :placeholder="placeholder"
      class="w-full mb-1"
      :value="modelValue"
      @input="updateValue"
    />
    <p class="text-red-500">{{ error }}</p>
  </div>
</template>
