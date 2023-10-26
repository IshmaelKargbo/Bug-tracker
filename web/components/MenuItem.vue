<template>
  <NuxtLink
    :to="to"
    active-class="bg-emerald-900 text-gray-100"
    class="hover:bg-emerald-900 mb-2 dark:text-gray-400 space-x-3 rounded-md hover:text-gray-100 p-3 px-4 flex items-center"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    to: string;
}

const {to} = defineProps<Props>();
</script>

<style scoped>
</style>