<script setup lang="ts"></script>

<template>
  <div class="flex custom-height items-center justify-center">
    <div class="flex card flex-col items-center gap-8 sm:p-20">
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary"
      >
        <span class="font-bold sm:text-9xl text-6xl"> 4 </span>
        <div
          class="flex items-center justify-center bg-primary text-primary-contrast rounded-full sm:w-28 sm:h-28 h-14 w-14"
        >
          <i class="pi pi-prime !text-6xl"></i>
        </div>
        <span class="font-bold text-6xl sm:text-9xl"> 4 </span>
      </div>
      <div class="font-bold text-center text-4xl border-t border-surface pt-8">
        Page Not Found
      </div>
      <a href="/" class=""
        ><button
          class="p-button p-component"
          type="button"
          aria-label="GO TO HOMEPAGE"
          data-pc-name="button"
          data-pc-section="root"
          pc150=""
        >
          <!----><span class="p-button-label" data-pc-section="label"
            >VOLTAR PARA PÁGINA INICIAL</span
          ><!---->
        </button></a
      >
    </div>
  </div>
</template>
