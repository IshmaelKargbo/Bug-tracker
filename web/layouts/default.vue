<template>
  <div class="flex h-screen font-poppins text-base">
    <Menu class="bg-gray-900 text-gray-200 w-60" />
    <main class="flex-1 flex-col bg-gray-100 flex">
        <Header />
        <div class="flex-1 overflow-y-auto  dark:bg-gray-900 dark:text-gray-300">
          <slot />
        </div>
    </main>
  </div>
</template>
  