<template>
  <UButton
    @click="handleSignIn"
    class="w-full flex justify-center -space-x-1 mb-2"
    size="xl"
    variant="outline"
    color="gray"
  >
    <Icon name="line-md:github-loop" />
    <span>Continue with Github</span>
  </UButton>
</template>

<script setup lang="ts">
const handleSignIn = async () => {
  const handle = window.open("http://localhost:4000/auth/github", "_self");
  if (handle) {
    handle.close();
    console.log(handle);
  }
};
</script>