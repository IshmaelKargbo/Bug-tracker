<template>
  <div
    class="dark:text-gray-300 flex flex-col justify-between py-6 text-gray-500 px-5 drop-shadow-2xl dark:bg-slate-950"
  >
    <div>
      <Logo class="px-4" to="/" />
      <ul class="mt-6">
        <li>
          <MenuItem to="/">
            <Icon name="bx:home" class="text-xl mb-1" />
            <span>Dashboard</span>
          </MenuItem>
        </li>
        <li>
          <MenuItem to="/board">
            <Icon name="ep:data-board" class="text-xl mb-1" />
            <span>Board</span>
          </MenuItem>
        </li>
        <li>
          <MenuItem to="/project">
            <Icon name="lucide:projector" class="text-xl mb-1" />
            <span>Project</span>
          </MenuItem>
        </li>
        <li>
          <MenuItem to="/ticket">
            <Icon name="icon-park-outline:ticket" class="text-xl mb-1" />
            <span>Ticket</span>
          </MenuItem>
        </li>
        <li>
          <MenuItem to="/employee">
            <Icon name="fa-solid:users" class="text-xl mb-1" />
            <span>Employee</span>
          </MenuItem>
        </li>
      </ul>
    </div>
    <MenuItem to="/profile">
      <Icon name="fa-solid:user" class="text-xl mb-1" />
      <span>Profile</span>
    </MenuItem>
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