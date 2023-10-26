<template>
  <header class="p-5 px-5">
    <div
      class="rounded-md dark:bg-slate-950 shadow-md dark:border-slate-950 bg-white border-b flex space-x-2 items-center justify-between"
    >
      <div class="w-full flex items-center space-x-2 py-4 px-5">
        <Icon name="iconamoon:search-bold" />
        <input
          placeholder="Search . . ."
          type="search"
          class="w-full bg-transparent focus:outline-none"
        />
      </div>
      <ul class="px-5 flex space-x-4">
        <li>
          <ColorModeButton />
        </li>
        <li>
          <UAvatar
            chip-color="primary"
            chip-position="bottom-right"
            icon="i-heroicons-photo"
            size="sm"
          />
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>