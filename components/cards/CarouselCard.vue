<template>
  <div class="relative h-72 rounded-2xl bg-primary-pink">
    <div class="flex w-full justify-center align-middle">
      <img :src="carouselInfo.image" class="absolute -top-24 mx-auto w-44" />
    </div>

    <div>
      {{ carouselInfo.person }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    carouselInfo: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
