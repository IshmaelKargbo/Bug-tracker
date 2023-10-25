<template>
  <div>
    <label :for="id" class="text-sm text-gray-400">{{ label }}</label>
    <div class="bg-white dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 border rounded-md overflow-hidden p-3 mt-1.5 text-sm">
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        @onchange="onchange"
        class="w-full bg-transparent focus:outline-none"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  id?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  onchange?: (val) => void;
}
const { placeholder, label, id, type = "text" } = defineProps<Props>();
</script>

<style scoped>
</style>