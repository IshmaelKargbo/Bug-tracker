<template>
  <div
    class="bg-gray-50 dark:bg-gray-900 flex min-h-screen items-center justify-center"
  >
    <div class="w-2/6 flex flex-col h-screen">
      <div class="flex-1 h-full items-center flex">
        <div class="w-full">
          <div class="mb-6">
            <p class="text-2xl mb-0.5 font-inter dark:text-white">
              Welcome Back
            </p>
            <p class="text-sm text-gray-400">Sign in to your account</p>
          </div>
          <div>
            <Button class="mb-5">Continue with Github</Button>
            <Button> Continue with Google</Button>
            <div class="flex items-center mt-6 mb-5">
              <hr class="flex-1 dark:border-gray-700" />
              <p class="px-2.5 dark:text-gray-400 text-xs">OR</p>
              <hr class="flex-1 dark:border-gray-700" />
            </div>
            <form @submit.prevent>
              <div class="mb-5">
                <Input
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="yes@example.com"
                />
              </div>
              <div class="mb-5">
                <div class="flex justify-between">
                  <label class="text-sm text-gray-400">Password</label>
                  <NuxtLink to="/" class="text-sm text-gray-400"
                    >Forget Password?</NuxtLink
                  >
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                />
              </div>
              <Button
                primary
                @click="toggleDark()"
              >
                Login
              </Button>
            </form>
            <div class="flex space-x-1 text-sm mt-8 justify-center">
              <p class="text-gray-400">Don't have an account?</p>
              <NuxtLink to="/register" class="underline text-emerald-600"
                >Register Now</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="py-8">
        <p class="text-xs text-center dark:text-gray-300">
          By continuing, you agree to Bug Tracker
          <NuxtLink to="/login" class="underline text-emerald-600"
            >Terms of Service</NuxtLink
          >
          and
          <NuxtLink to="/login" class="underline text-emerald-600"
            >Privacy Policy</NuxtLink
          >, and to receive periodic emails with updates.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

const toggleDark = useToggle(isDark);

console.log(isDark.value);

definePageMeta({
  layout: "custom",
});
</script>