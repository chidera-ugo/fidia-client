<template>
  <div class="relative col-span-6 my-8 lg:my-0">
    <img
      class="h-80 w-full rounded-t-xl border-4 border-gradient-hero-blue object-cover"
      :src="gameInfo.image"
    />
    <div class="mobile:px-6 w-full bg-gradient-hero-blue py-4 px-4 shadow-lg">
      <div class="flex justify-between align-middle">
        <div class="my-auto mr-4 w-full">
          <div
            class="font-secondary text-lg font-semibold uppercase text-white line-clamp-1 sm:text-xl"
          >
            {{ gameInfo.title }}
          </div>
          <div class="text-gray-300 line-clamp-1">
            {{ gameInfo.description }}
          </div>
        </div>

        <button class="primary-button-small">play now</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IGame } from '@/utils/types'

export default Vue.extend({
  props: {
    gameInfo: {
      type: Object as PropType<IGame>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
