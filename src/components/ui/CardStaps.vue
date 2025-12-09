<template>

  <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">

    <img loading="lazy" width="614"
      height="409" class="rounded-lg mb-4" :src="imageSrc" :alt="altText">


    <h3 class="text-xl font-bold mb-2 text-blue-900">{{ title }}</h3>
    <p class="text-gray-700 mb-4">{{ subtitle }}</p>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </div>

</template>

<script setup lang="ts">

  const props = defineProps(['title', 'subtitle', 'description', 'imageSrc', 'altText']);


</script>
