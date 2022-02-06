<template>
  <div class="relative col-span-6 my-8 lg:my-0">
    <img
      class="h-80 w-full rounded-xl border-4 border-purple-700 object-cover"
      :src="gameInfo.image"
    />
    <div
      class="mobile:px-6 relative z-20 -mt-16 w-full bg-purple-700 py-4 px-4 shadow-lg"
    >
      <div class="flex justify-between align-middle">
        <div class="my-auto w-full">
          <div
            class="font-secondary text-lg font-semibold uppercase text-white line-clamp-1 sm:text-2xl"
          >
            {{ gameInfo.title }}
          </div>
          <div class="text-gray-300 line-clamp-1">
            {{ gameInfo.description }}
          </div>
        </div>

        <div class="my-auto w-full">
          <button class="primary-button-small ml-auto">play now</button>
        </div>
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
