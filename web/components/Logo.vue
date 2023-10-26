<template>
  <NuxtLink :to="to" class="flex space-x-2 items-center">
    <p class="font-caveat text-emerald-600 text-2xl">Bug nn</p>
    <div>
      <Icon name="fa6-solid:hammer" class="text-gray-700 text-2xl" />
      <Icon name="clarity:bug-solid" class="text-red-600 text-xl" />
    </div>
  </NuxtLink>
</template>ˇ

<script setup lang="ts">
const {to} = defineProps<{to: string}>();
</script>