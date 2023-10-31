<template>
  <UButton
    @click="handleSignIn"
    class="w-full flex justify-center -space-x-1 mb-2"
    size="xl"
    variant="outline"
    color="gray"
  >
    <Icon name="fe:google" />
    <span>Continue with Google</span>
  </UButton>
</template>

<script setup lang="ts">
const handleSignIn = async () => {
  const handle = window.open("http://localhost:4000/auth/google", "_self");
  if (handle) {
    handle.close();
  }
};
</script>