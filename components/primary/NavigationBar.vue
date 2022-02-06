<template>
  <div
    class="fixed inset-0 top-0 z-40 h-14 w-screen bg-primary-dark-blue bg-opacity-60 backdrop-blur-xl backdrop-filter"
  >
    <div
      class="mx-auto flex h-full max-w-7xl justify-between px-6 align-middle"
    >
      <NuxtLink
        to="/"
        class="my-auto font-secondary text-xl font-extrabold text-white"
        >metasino</NuxtLink
      >
      <div class="my-auto hidden align-middle lg:flex">
        <NuxtLink
          v-for="item in navigationItems"
          :key="item"
          :to="`/${item.split(' ').join('-')}`"
          class="px-4 py-2 font-medium uppercase text-white duration-300 ease-linear hover:text-primary-pink"
          >{{ item }}</NuxtLink
        >
      </div>
      <button class="-mr-4 inline-block p-4 focus:outline-none lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="my-auto h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    white: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    const navigationItems = ['products', 'my items']
    return {
      navigationItems,
    }
  },
}
</script>
