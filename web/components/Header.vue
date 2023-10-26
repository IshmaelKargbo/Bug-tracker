<template>
  <header class="py-4 p-5 dark:bg-gray-900 dark:border-gray-700 bg-white border-b flex space-x-2 items-center justify-between">
      <Logo to="/" />
      <ul>
        <li>
          <button class="border p-1.5 px-2 rounded-md dark:border-gray-700 text-gray-500 dark:text-gray-400" @click="toggleTheme()">
            <Icon v-if="isDark" name="charm:sun" class="text-xl" />
            <Icon v-if="!isDark" name="fontisto:night-clear" class="text-xl" />
          </button>
        </li>
      </ul>
  </header>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

const toggleTheme = useToggle(isDark);
</script>

<style scoped>
</style>