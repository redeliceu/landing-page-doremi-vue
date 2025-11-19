<template>


  <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 ">
    <div class="flex items-start">

      <slot />

      <div>
        <h3 class="text-lg font-bold text-blue-900 mb-2">{{ title }}</h3>
        <p class="text-gray-600">{{ subtitle }}</p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

const props = defineProps(['title', 'subtitle'])

</script>
