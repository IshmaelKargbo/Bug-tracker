<template>
  <div class="bg-gray-50 flex min-h-screen items-center justify-center">
    <div class="w-2/6 flex flex-col h-screen">
      <div class="flex-1 h-full items-center flex">
        <div class="w-full">
          <div class="mb-6">
            <p class="text-2xl mb-0.5 font-inter">Welcome Back</p>
            <p class="text-sm text-gray-400">Sign in to your account</p>
          </div>
          <div>
            <button class="border w-full py-2.5 rounded-md bg-white block">
              Continue with Github
            </button>
            <button class="border w-full py-2.5 mt-2 rounded-md bg-white block">
              Continue with Google
            </button>
            <div class="flex items-center my-5">
              <hr class="flex-1" />
              <p class="px-2.5">or</p>
              <hr class="flex-1" />
            </div>
            <form @submit.prevent>
              <div class="mb-5">
                <label for="email" class="text-sm text-gray-400">Email</label>
                <div
                  class="bg-white border rounded-md overflow-hidden p-3 mt-1.5 text-sm"
                >
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    class="w-full bg-transparent focus:outline-none"
                  />
                </div>
              </div>
              <div class="mb-5">
                <div class="flex justify-between">
                  <label for="password" class="text-sm text-gray-400"
                    >Password</label
                  >
                  <NuxtLink to="/" class="text-sm text-gray-400"
                    >Forget Password?</NuxtLink
                  >
                </div>
                <div
                  class="bg-white border rounded-md overflow-hidden p-3 mt-1.5 text-sm"
                >
                  <input
                    id="password"
                    type="password"
                    placeholder="you@example.com"
                    class="w-full bg-transparent focus:outline-none"
                  />
                </div>
              </div>
              <button class="bg-emerald-600 w-full rounded py-2.5 text-white">
                Login
              </button>
            </form>
            <div class="flex space-x-1 text-sm mt-8 justify-center">
              <p class="text-gray-500">Don't have an account?</p>
              <NuxtLink to="/register" class="underline">Register Now</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="py-8">
        <p class="text-xs text-center">
          By continuing, you agree to Bug Tracker
          <NuxtLink to="/login" class="underline">Terms of Service</NuxtLink>
          and <NuxtLink to="/login" class="underline">Privacy Policy</NuxtLink>,
          and to receive periodic emails with updates.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
</script>