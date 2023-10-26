<template>
  <ClientOnly>
    <div class="flex h-screen font-poppins text-sm">
      <Menu class="w-64" />
      <main class="flex-1 flex-col dark:bg-slate-900 dark:text-gray-300 bg-gray-100 flex">
        <Header />
        <div class="flex-1 overflow-y-auto">
          <slot />
        </div>
      </main>
    </div>
  </ClientOnly>
</template>
  