<template>
  <div class="flex justify-between align-middle">
    <div class="hidden align-middle md:flex">
      <button class="tag mr-3">
        <div class="button-slot">
          <span class="mr-2.5 text-left line-clamp-1">All Time</span>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            class="my-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1L1 11M1 1L11 11"
              stroke="#6941C6"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>

      <button class="tag mr-3">
        <div class="button-slot">
          <span class="mr-2.5 text-left line-clamp-1">US, AU, +4</span>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            class="my-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1L1 11M1 1L11 11"
              stroke="#6941C6"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>

      <button class="secondary-button mr-3">
        <div class="button-slot">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            class="my-auto mr-2.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H14M1.5 1H16.5M6.5 11H11.5"
              stroke="#344054"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="text-left line-clamp-1"> More Filters </span>
        </div>
      </button>
    </div>

    <div class="w-full px-4 sm:px-0 md:w-auto">
      <SearchInput />

      <button
        class="secondary-button mt-4 flex w-full justify-center align-middle md:hidden"
      >
        <div class="button-slot">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            class="my-auto mr-2.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H14M1.5 1H16.5M6.5 11H11.5"
              stroke="#344054"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="text-left line-clamp-1"> Edit Filters </span>
        </div>
      </button>

      <div class="mt-4 flex align-middle md:hidden">
        <button class="small-tag mr-3">
          <div class="button-slot">
            <span class="mr-2.5 text-left line-clamp-1">All Time</span>

            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              class="my-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L1 11M1 1L11 11"
                stroke="#6941C6"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>

        <button class="small-tag mr-3">
          <div class="button-slot">
            <span class="mr-2.5 text-left line-clamp-1">US, AU, +4</span>

            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              class="my-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L1 11M1 1L11 11"
                stroke="#6941C6"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
