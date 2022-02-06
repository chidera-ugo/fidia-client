<template>
  <section class="bg-primary-dark-blue bg-cover">
    <div class="mx-auto max-w-7xl px-6 py-36">
      <div class="relative grid-cols-12 md:grid">
        <img
          src="/images/subscribe.png"
          class="relative z-10 col-span-6 my-auto mr-auto hidden h-80 w-80 animate-float align-middle md:mx-auto md:flex lg:h-104 lg:w-104"
        />

        <div class="relative z-10 col-span-6 my-auto">
          <div class="my-auto">
            <h2
              class="font-secondary text-2xl font-semibold capitalize text-primary-light-blue lg:mt-0 lg:text-4xl"
            >
              find out about new games
            </h2>
            <h4 class="mt-2 text-primary-light-blue">
              Subscribe to get updated on future game releases
            </h4>

            <div class="py-4"></div>

            <div>
              <input
                placeholder="Enter your email"
                class="mobile:w-96 mx-auto w-80 border border-primary-light-blue bg-primary-dark-blue bg-opacity-20 p-3 font-medium text-gray-300 placeholder-gray-500 ring-primary-light-blue ring-offset-1 ring-offset-primary-dark-blue transition duration-300 ease-linear focus:outline-none focus:ring-1 lg:mr-auto"
              />
              <div class="mt-5">
                <button to="#" class="primary-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="absolute z-0 my-auto hidden h-full w-full flex-col justify-center align-middle md:flex"
        >
          <div
            class="my-auto h-104 w-full bg-primary-light-blue bg-opacity-5"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
