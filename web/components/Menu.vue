<template>
  <div class="dark:text-gray-300 py-6 text-gray-500 px-5 drop-shadow-2xl dark:bg-slate-950">
    <Logo class="px-4" to="/" />
    <ul class="mt-6">
      <li>
        <NuxtLink
          to="/"
          class="hover:bg-slate-900 dark:text-gray-400 space-x-3 rounded-md hover:text-gray-100 p-3 px-4 flex items-center"
        >
          <Icon name="bx:home" class="text-xl mb-1" />
          <span>Dashboard</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="hover:bg-slate-900 dark:text-gray-400 space-x-3 rounded-md hover:text-gray-100 p-3 px-4 flex items-center"
        >
          <Icon name="ep:data-board" class="text-xl mb-1" />
          <span>Board</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="hover:bg-slate-900 dark:text-gray-400 space-x-3 rounded-md hover:text-gray-100 p-3 px-4 flex items-center"
        >
          <Icon name="lucide:projector" class="text-xl mb-1" />
          <span>Project</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="hover:bg-slate-900 dark:text-gray-400 space-x-3 rounded-md hover:text-gray-100 p-3 px-4 flex items-center"
        >
          <Icon name="icon-park-outline:ticket" class="text-xl mb-1" />
          <span>Ticket</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="hover:bg-slate-900 dark:text-gray-400 space-x-3 rounded-md hover:text-gray-100 p-3 px-4 flex items-center"
        >
          <Icon name="icon-park-outline:permissions" class="text-xl mb-1" />
          <span>Permission</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="hover:bg-slate-900 dark:text-gray-400 space-x-3 rounded-md hover:text-gray-100 p-3 px-4 flex items-center"
        >
          <Icon name="ep:person" class="text-xl mb-1" />
          <span>Employee</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const people = [
  { name: "Wade Cooper", online: true },
  { name: "Arlene Mccoy", online: false },
  { name: "Devon Webb", online: false },
  { name: "Tom Cook", online: true },
  { name: "Tanya Fox", online: false },
  { name: "Hellen Schmidt", online: true },
  { name: "Caroline Schultz", online: true },
  { name: "Mason Heaney", online: false },
  { name: "Claudie Smitham", online: true },
  { name: "Emil Schaefer", online: false },
];
const selected = ref(people[3]);
</script>

<style scoped>
</style>