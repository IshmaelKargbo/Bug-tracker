<template>
  <NuxtLink :to="to" class="space-x-2 flex items-center">
    <Icon name="clarity:bug-solid" class="text-red-600 text-2xl" />
    <p class="font-inter font-semibold text-emerald-600 text-3xl">iBug</p>
  </NuxtLink>
</template>ˇ

<script setup lang="ts">
const { to } = defineProps<{ to: string }>();
</script>