<template>
  <button
    @click="onClick()"
    :class="`border w-full py-2.5 rounded-md ${btnBG}   dark:border-gray-700 block`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  onClick?: () => void;
  primary?: boolean
}

const { onClick, primary } = defineProps<Props>();

const btnBG = primary ? "dark:bg-emerald-600 bg-emerald-600 text-white" : "dark:bg-gray-800 bg-white dark:text-gray-300";
</script>