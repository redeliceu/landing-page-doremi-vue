<template>

  <div
    class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg border-l-4 border-blue-900 hover:shadow-xl transition-all hover:scale-105">
    <div class="flex items-start mb-3">

      <slot />

      <div>
        <h3 class="text-xl font-bold text-blue-900 mb-2">{{ title }}</h3>
        <p class="text-gray-700">{{ subtitle }}</p>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">

  const props = defineProps(['title', 'subtitle'])


</script>
