<template>
  <div class="mx-auto h-full max-w-laptop px-8">
    <div class="flex w-full justify-center align-middle">
      <div class="py-20">
        <h1 class="w-full text-center text-4xl font-bold">Home Page</h1>
        <div class="flex justify-center align-middle">
          <div class="mt-4 flex align-middle">
            <p class="mr-1 text-center">Navigate to</p>
            <NuxtLink
              to="/dashboard"
              class="text-primary-600 underline transition duration-200 ease-linear hover:text-primary-700"
            >
              Dashboard
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
