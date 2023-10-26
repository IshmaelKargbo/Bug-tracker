<template>
  <div class="py-5 px-4 dark:text-gray-300 text-white border-r dark:border-gray-700">
    <div class="pb-6 pt-1 px-2 border-b dark:border-gray-700 border-gray-500">
      <p>Current board</p>
    </div>
    <ul class="pt-5">
      <li>
        <NuxtLink to="/" class="hover:bg-emerald-600 space-x-3 rounded-md hover:text-gray-100 p-3 flex items-center">
          <Icon name="akar-icons:dashboard" class="text-xl mb-1" />
          <span>Dashboard</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="hover:bg-emerald-600 space-x-3 rounded-md hover:text-gray-100 p-3 flex items-center">
          <Icon name="lucide:projector" class="text-xl mb-1" />
          <span>Projects</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="hover:bg-emerald-600 space-x-3 rounded-md hover:text-gray-100 p-3 flex items-center">
          <Icon name="mdi:sticker-text-outline" class="text-xl mb-1" />
          <span>Tickets</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>