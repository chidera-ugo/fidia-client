<template>
  <div
    class="navigation-two fixed inset-0 z-50 hidden w-full border-b border-dark-200 bg-white lg:block"
  >
    <div
      class="mx-auto flex h-full max-w-laptop justify-between px-8 align-middle"
    >
      <div class="flex align-middle">
        <div class="my-auto hidden align-middle lg:flex">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item"
            :to="`?current=${item.split(' ').join('-')}`"
            class="navigation-item"
          >
            <span class="line-clamp-1"> {{ item }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="flex align-middle">
        <SearchInput />
      </div>

      <button class="-mr-4 inline-block p-4 focus:outline-none lg:hidden">
        <svg
          xmls="https://www.w3.org/2000/svg"
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
import Vue from 'vue'

export default Vue.extend({
  data() {
    const navigationItems = [
      'overview',
      'notifications',
      'analytics',
      'saved reports',
      'saved history',
      'user reports',
    ]
    return {
      navigationItems,
      current: this.$route.query.current,
    }
  },
})
</script>

<style scoped>
.navigation-two {
  height: 65px;
  top: 72px;
}
</style>
